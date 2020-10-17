import {wkfe} from './class';

function getWaveColor(elem){
	const classes = elem.classList;

	let match = null

	classes.forEach((_class) => {
		if (_class.includes("wave-")){
			match = _class.replace("wave-", "")
		}
	});

	return match
}

wkfe.InitButtions = () => {
	$(".btn.wave").off("click");
	$(".btn.wave").on("click", (elem) => {
		let x = elem.clientX - elem.target.offsetLeft;
		let y = elem.clientY - elem.target.offsetTop + window.pageYOffset;

		let wave_color = getWaveColor(elem.toElement);
		if (wave_color !== null){
			wave_color = " " + wave_color;
		}
		else {
			wave_color = "";
		}

		let ripples = document.createElement('span');

		$(ripples).css({
			left: x + "px",
			top: y + "px"
		}).addClass("wave-temp" + wave_color);
		elem.toElement.appendChild(ripples);
		setTimeout(() =>{
			ripples.remove();
		}, 1000)
	});
}

$(() => {
	wkfe.InitButtions();
});