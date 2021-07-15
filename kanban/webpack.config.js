const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
}