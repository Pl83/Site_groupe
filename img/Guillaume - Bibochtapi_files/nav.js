let div = document.querySelector("header>div");
let nav = document.querySelector("header nav");
let clicked = false;
nav.style.display = "none";

function ToggleClick() {
	if (clicked) {
		clicked = false;
		nav.style.display = "none";
	} else {
		clicked = true;
		nav.style.display = "flex";
	}
}

document.querySelector("#burger").addEventListener("click", ToggleClick());
