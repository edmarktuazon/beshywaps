/** @format */

const inputFields = document.querySelector("#inputFields");
const copyButton = document.querySelector("#copyButton");

const fieldFunction = (e) => {
	if (e.key === " ") {
		inputFields.value += " 🤸";
	}
};
const buttonFunction = () => {
	inputFields.select();
	document.execCommand("copy");
};

copyButton.addEventListener("click", buttonFunction);
inputFields.addEventListener("keydown", fieldFunction);
