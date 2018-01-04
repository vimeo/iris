/* eslint-env node */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var STYLEGUIDE_DIR = 'node_modules/steadicam';


// Webpack settings for React Docs

module.exports = {
    entry: './docs/main.jsx',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./build-styleguide'),
    },

    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: '/node_modules/',
                include: [
                    path.resolve(__dirname, 'docs'),
                    path.resolve(__dirname, 'data'),
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'index.jsx'),
                    path.resolve(__dirname, STYLEGUIDE_DIR),
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },

            {
                test: /\.s(c|a)ss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[name]_[local]--[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')],
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
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

    node: {
        fs: 'empty',
    },

    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.svg',
        ],
        modules: ['node_modules', 'components'],
    },

    plugins: [
        new ExtractTextPlugin('css/modules.css', { allChunks: true }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
};
