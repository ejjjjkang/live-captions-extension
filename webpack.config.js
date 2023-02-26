const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        panel:path.join(__dirname, 'src', 'panel.js'),
        livecaption: path.join(__dirname, 'src', 'livecaption.js'),
        background: path.join(__dirname, 'src', 'background.js')
        
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "src/manifest.json",
                    to: path.join(__dirname, 'build'),
                    force: true
                }
            ]
        })
    ]

}