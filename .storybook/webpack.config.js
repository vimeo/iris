const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
    .default;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (_1, _2, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer],
                    }),
                },
            },
            // {
            //     loader: 'react-docgen-typescript-loader',
            // },
        ],
    });
    config.plugins.push(new ForkTsCheckerWebpackPlugin());
    config.resolve.extensions.push('.ts', '.tsx');
    config.output.pathinfo = false;
    config.optimization.removeAvailableModules = false;
    config.optimization.removeEmptyChunks = false;
    config.optimization.splitChunks = false;
    return config;
};