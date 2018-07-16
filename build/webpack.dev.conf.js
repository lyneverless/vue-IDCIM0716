const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});