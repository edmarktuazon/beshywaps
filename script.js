/** @format */

const inputFields = document.querySelector("#inputFields");
const copyButton = document.querySelector("#copyButton");

const fieldFunction = (e) => {
	var keyCode = event.keyCode || event.which; // Key code for older browsers
	var keyValue = String.fromCharCode(keyCode); // Key value

	if (keyCode === 32 || keyValue === " ") {
		// The space bar was pressed
		console.log("Space bar was pressed");
		inputFields.value += "🤸 ";
	}
};

const buttonFunc = () => {
	inputFields.select();
	document.execCommand("copy");
};

copyButton.addEventListener("click", buttonFunc);
inputFields.addEventListener("keydown", fieldFunction);
