const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
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
    resolve: {
        fallback: {
                    fs: false,
                    path: require.resolve("path-browserify"),
                    os: false
        },
        alias: {
            panel: path.resolve(__dirname, 'src/panel.js'),
            livecaption: path.resolve(__dirname, 'src/livecaption.js'),
            background: path.resolve(__dirname, 'src/background.js'),
            interact: path.resolve(__dirname, 'src/lib/interact.min.js'),
            axios: path.resolve(__dirname, 'src/lib/axios.min.js')
             
        },
        extensions: [ ".js"]
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
         new webpack.ProvidePlugin({
              process: 'process/browser',
            }),
         new Dotenv({
                  path: './.env', // Path to .env file (this is the default)
                  safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
                }),
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
        new CopyPlugin({
            patterns: [
                {
                    from: "src/popup.css",
                    to: path.join(__dirname, 'build'),
                    force: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],
   
}