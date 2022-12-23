const socket = io();

function undent(string) {
	return string.replace(/  +/g, "");
}

socket.on("connect", () => {
	document.getElementById("connecting").remove();
	document.getElementById("content").style.visibility = "visible";
});

socket.on("heroes", (list) => {
	for (const key of Object.keys(list)) {
		const div = document.createElement("div");
		div.classList.add("heroDescription");
		
		const data = list[key];

		const name = document.createElement("h2");
		name.innerHTML = key;
		const description = document.createElement("p1");

		const powerOneDescription = data[2] == null ? "No Power One" : data[2];
		const powerTwoDescription = data[3] == null ? "No Power Two" : data[3];
		
		description.innerHTML = undent(`
	  		Hero Name: ${data[0]}<br>
			Hero Description: ${data[1]}<br>
	  		Power One Description: ${powerOneDescription}<br>
			Power Two Description: ${powerTwoDescription}
  		`);

		div.appendChild(name);
		div.appendChild(description);

		document.getElementById("heroes").appendChild(div);
	}
});