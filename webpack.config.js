const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index'),
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: 'wxappIo',
        libraryTarget: 'umd',
    },
    plugins: [
        // new webpack.NormalModuleReplacementPlugin(/^ws$/, '@2dfire/wxapp-websocket'),
        // new webpack.DefinePlugin({
        //     'typeof window': JSON.stringify('undefined'),
        // }),
        // new UglifyJSPlugin({
        //     sourceMap: false,
        // }),
        // new webpack.ProvidePlugin({
        //     'global.WebSocket': path.resolve(__dirname, 'src/ws/index'),
        // }),
        new webpack.NormalModuleReplacementPlugin(/^engine.io-client$/, 'engine.io-wxapp-client'),
    ],

    module: {
        rules: [
            // the 'transform-runtime' plugin tells babel to require the runtime
            // instead of inlining it.
            {
                test: /\.js$/,
                exclude: /(node_modulesd)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            es2015: {
                                modules: true,
                            },
                        }],
                    ],
                    plugins: [
                        // 'external-helpers',
                        ['transform-object-rest-spread', { useBuiltIns: true }],
                    ],
                },
            },
        ],
    },
};
