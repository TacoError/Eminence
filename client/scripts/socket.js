const socket = io();

socket.on("connect", () => {
	document.getElementById("connecting").remove();
	document.getElementById("content").style.visibility = "visible";
});

socket.on("heroes", (list) => {
	
});