/** @format */

const inputFields = document.querySelector("#inputFields");
const copyButton = document.querySelector("#copyButton");

const fieldFunction = (e) => {
	var keyCode = e.keyCode || e.which; // Key code for older browsers
	var keyValue = String.fromCharCode(keyCode); // Key value

	if (keyCode === 32 || keyValue === " ") {
		inputFields.value += "000";
	}
};

const buttonFunc = () => {
	inputFields.select();
	document.execCommand("copy");
};

copyButton.addEventListener("click", buttonFunc);
inputFields.addEventListener("keydown", fieldFunction);
