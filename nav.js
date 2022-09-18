let clicked = false;
document.querySelector("#burger").addEventListener("click", () => {
	console.log("Burger cliqué");
	if (clicked) {
		clicked = false;
		document.querySelector(".burger").style.display = "none";
	} else {
		clicked = true;
		document.querySelector(".burger").style.display = "flex";
	}
});