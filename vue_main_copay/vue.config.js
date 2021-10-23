const proxy = require('./proxy');
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
    configureWebpack: {
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 100000,
                maxSize: 500000
            }
        }
    },
    css: {
        extract: false
    },
    publicPath: './',
    outputDir: '../../www/web/main/',
    assetsDir: 'build',
    productionSourceMap: false,
    devServer: {
        public: '0.0.0.0:4000',
        port: 4000,
        disableHostCheck: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy
    }
};
