const StyledTransformer = require('typescript-plugin-styled-components')
    .default();

module.exports = ({
    config,
    mode
}) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [{
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                experimentalWatchApi: true,
                getCustomTransformers: () => ({
                    before: [StyledTransformer],
                }),
            },
        }],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    config.output.pathinfo = false;
    config.optimization.removeAvailableModules = false;
    config.optimization.removeEmptyChunks = false;
    config.optimization.splitChunks = false;

    return config;
}