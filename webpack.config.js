const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");
const imageProcessingLibPath = path.resolve(__dirname, "./image-filter");

module.exports = {
	entry: "./src/main.js",
	output: {
		path: dist,
		filename: "index.js",
	},
	plugins: [
		new HTMLWebpackPlugin({ template: "./public/index.html" }),
		new WasmPackPlugin({
			crateDirectory: imageProcessingLibPath,
			outDir: path.join(imageProcessingLibPath, "pkg"),
		}),
	],
	experiments: {
		asyncWebAssembly: true,
	},
	module: {
		rules: [
			{
				test: /\.worker\.js$/,
				use: { loader: "worker-loader" },
			},
		],
	},
};
