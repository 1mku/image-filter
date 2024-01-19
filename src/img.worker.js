import { grayscale } from "../image-filter/pkg";

self.addEventListener("message", ({ data }) => {
	const img_data_url = grayscale(data);
	self.postMessage(img_data_url);
});
