const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
    entry: './public/main.js',
    output: {
        path: dist,
        filename: "index.js"
    },
    plugins: [
        new HTMLWebpackPlugin({template: './public/index.html'}),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.')
        })
    ]
}