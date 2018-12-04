const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (baseConfig, env, config) => {

    config.module.rules = config.module.rules.filter(loader => !loader.test.exec('.svg'));

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
                loader: 'ts-loader',
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
        use: [{
            loader: '@svgr/webpack',
            options: {
                svgoConfig: {
                    plugins: [
                        { cleanupIDs: { 
                            minify: false
                        } },
                    ],
                }
            },
        }],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};