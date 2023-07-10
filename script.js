/** @format */

const inputFields = document.querySelector("#inputFields");
const copyButton = document.querySelector("#copyButton");

const fieldFunction = (e) => {
	if (e.key === " ") {
		// Check for space key
		inputFields.value += "🤸 ";
	}
};

const buttonFunction = (e) => {
	e.preventDefault();
	inputFields.select();
	document.execCommand("copy");
};

copyButton.addEventListener("click", buttonFunction);
inputFields.addEventListener("keyup", fieldFunction);
