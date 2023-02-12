const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "main.[contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: "/(node_modules)/",
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    plugins: [
        new HTMLPlugin({
            title: "Whisper",
            filename: "index.html",
            template: "./src/template.html",
            minify: {
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
            },
        }),
    ],
};
