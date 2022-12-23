let loginNodeCopy = null;

function play() {
	loginNodeCopy = document.getElementById("login").cloneNode();
	document.getElementById("login").remove();
	document.getElementById("heroes").style.visibility = "visible";
}