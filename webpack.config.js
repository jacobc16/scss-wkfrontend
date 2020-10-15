const path = require("path");

module.exports = {
    entry: "./js/wkfrontend.js",
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