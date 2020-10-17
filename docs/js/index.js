let html_files = [];

function loadHtml(id) {
	$("#contents").html(html_files[id]);
	WKFrontend.InitButtions();

	$("setup").template("<div><h1 class='text-white'>{{title}}</h1>{{content}}</div>");

	$("#inline-script").this.forEach((script) => {
		eval($(script).html());
	})

	$("pre code").each((elem) => {
		$(elem).text($(elem).html());
		hljs.highlightBlock(elem);
	});
}

$(()=>{
	let files = [];
	$.get("./php/index.php", (data)=>{
		let html = ""

		Object.keys(data).forEach((elem) => {
			html += "<li><h2>" + elem + "</h2></li>";
			Object.keys(data[elem]).forEach((elm) => {
				let nelm = elm.replace(".html", "")
				html_files[nelm] = data[elem][elm];
				html +="<ul class='nested'>"
				html += "<li><a href='#' onclick='loadHtml(\""+nelm+"\")' id='"+nelm+"'>" + nelm + "</li></a>";
				html += "</ul>"
			});
		});

		$("#objects").html(html);
	});
});