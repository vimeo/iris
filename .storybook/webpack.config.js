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
    }, );
    
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};