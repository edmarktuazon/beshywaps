/** @format */

const inputFields = document.querySelector("#inputFields");
const copyButton = document.querySelector("#copyButton");

const fieldFunction = (e) => {
	if (e.code === "Space" || e.code === "KEYCODE_SPACE = 62") {
		inputFields.value += "🤸 ";
	}
};

const buttonFunc = () => {
	inputFields.select();
	document.execCommand("copy");
};

copyButton.addEventListener("click", buttonFunc);
inputFields.addEventListener("keyup", fieldFunction);
