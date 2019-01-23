const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (_, _, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [styledComponentsTransformer]
                })
            }
        }, {
            loader: 'react-docgen-typescript-loader'
        }],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};