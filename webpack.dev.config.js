const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            contentBase: path.resolve(__dirname, '../dist'),
        }
    },
}