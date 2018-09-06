/* eslint-env node */
var webpack = require('webpack');
var path = require('path');
var STYLEGUIDE_DIR = 'node_modules/steadicam';


// Webpack settings for React Docs

module.exports = {
    entry: './docs/apps/svgPage/svgPage.jsx',

    output: {
        filename: 'svgPage.bundle.js',
        path: path.resolve('./build-styleguide'),
    },

    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react'],
                        },
                    },
                    'svg-react-loader',
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },

    stats: 'errors-only',

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
        }),

    ],
};
