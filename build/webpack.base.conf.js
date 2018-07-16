const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    plugins: [
        new HtmlWebpackPlugin({
            title: 'title10',
            template: './index.html'
        }),
        new ExtractTextPlugin('[name].css'),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /\.(jpe?g|gif|png|svg)$/,
            use: ['file-loader']
        }, {
            test: /\.(woff2?|ttf|eot|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        }]
    }
};