const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (baseConfig, env, config) => {

    config.module.rules = config.module.rules.filter(loader => !loader.test.exec('.svg'));

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer]
                    })
                }
            },
            {
                loader: 'react-docgen-typescript-loader'
            }
        ]
    }, {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }, {
        test: /\.s(c|a)ss$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [{
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
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};