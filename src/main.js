import Worker from "./img.worker";

let fileReader;
const worker = new Worker();

const loader = document.getElementById("loader");
const newImg = document.getElementById("new-img");

function getFileReader() {
	if (fileReader) return fileReader;

	fileReader = new FileReader();
	fileReader.onloadstart = () => {
		loader.hidden = false;
		newImg.hidden = true;
	};

	fileReader.onloadend = function () {
		const base64 = this.result?.replace(
			/^data:image\/(png|jpeg|jpg);base64,/,
			"",
		);
		worker.postMessage(base64);
	};

	return fileReader;
}

function init() {
	const input = document.getElementById("file-upload");

	worker.addEventListener("message", ({ data }) => {
		newImg.setAttribute("src", data);
		loader.hidden = true;
		newImg.hidden = false;
	});

	// File Reader
	const fileReader = getFileReader();
	input.addEventListener("change", (event) => {
		if (event.target.files?.[0]) {
			fileReader.readAsDataURL(event.target.files[0]);
		}
	});
}

init();
