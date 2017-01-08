// 引入依赖插件
const
    cooking = require('cooking'),
    path = require('path');

// cooking 配置
cooking.set({

    // vue 入口文件
    entry: {
        app: './src/main.js',
        vendor: ['vue', 'vue-router']
    },

    chunk: ['vendor'],

    // 打包输出路径
    dist: './dist',

    // 加载index模板
    template: './index.tpl',

    // 内置webpack-dev-server配置
    devServer: {
        port: 8000,
        publicPath: '/'
    },

    // production
    clean: true,
    hash: true,
    sourceMap: false,
    minimize: true,

    postcss: [
        // require('...')
    ],
    publicPath: '/dist/',
    assetsPath: 'static',
    urlLoaderLimit: 10000,

    // 提取css文件为单独的文件
    extractCSS: '[name].[contenthash:7].css',
    alias: {
        'src': path.join(__dirname, 'src')
    },

    // 扩展支持
    extends: ['vue2', 'lint', 'sass', 'autoprefixer']
});

// 生成 webpack 配置并导出
module.exports = cooking.resolve();
