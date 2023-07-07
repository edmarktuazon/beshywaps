/** @format */

const inputFields = document.querySelector("#inputFields");
const copyButton = document.querySelector("#copyButton");

const fieldFunction = (e) => {
	// Check if keyCode or key is equal to the space bar keycode
	if (e.keyCode === 32 || e.key === " ") {
		inputFields.value += " 🤸";
	}
};

const buttonFunction = () => {
	inputFields.select();
	document.execCommand("copy");
};

copyButton.addEventListener("click", buttonFunction);
inputFields.addEventListener("keydown", fieldFunction);
