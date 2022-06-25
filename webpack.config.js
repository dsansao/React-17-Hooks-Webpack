const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./config/webpack.${env}`)(env);
const Dotenv = require('dotenv-webpack');

const port = process.env.PORT || 3000;

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return merge({
        mode,
        entry: "./src/index.js",
        devServer: {
            hot: true,
            open: true,
            port: port,
            historyApiFallback: true
        },
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                favicon: './public/favicon.ico',
                manifest: './public/manifest.json'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new Dotenv()
        ],
    },
        modeConfiguration(mode)
    );
};

