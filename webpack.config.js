const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fileSystem = require('fs-extra')
const webpack = require('webpack');

module.exports = {
    entry: {
        panel: path.join(__dirname, 'src', 'panel.js'),
        livecaption: path.join(__dirname, 'src', 'livecaption.js'),
        background: path.join(__dirname, 'src', 'background.js')
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].bundle.js",
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
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
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/styles.css",
                    to: path.join(__dirname, 'build'),
                    force: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.EnvironmentPlugin(['WEATHER'])
        
    ],
   
}