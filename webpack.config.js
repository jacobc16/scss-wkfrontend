const path = require("path");

module.exports = {
    entry: "./js/wkfrontend.js",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname,"src")]
            }
        ]
    },
    mode: 'production',
    resolve: {
        extensions: [ '.js' ],
    },
    optimization: {
        minimize: true
    },
    output: {
        filename: "./js/wkfrontend.min.js",
        path: path.resolve(__dirname,"")
    }
}