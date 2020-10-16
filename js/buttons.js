$(() => {
	$(".wave").on("click", (elem) => {
		let x = elem.clientX - elem.target.offsetLeft;
		let y = elem.clientY - elem.target.offsetTop;

		let ripples = document.createElement('span');
		$(ripples).css({
			left: x + "px",
			top: y + "px"
		}).addClass("wave-temp");
		elem.toElement.appendChild(ripples);
		setTimeout(() =>{
			ripples.remove();
		}, 1000)
	});
});