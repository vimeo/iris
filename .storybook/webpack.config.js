const StyledTransformer = require('typescript-plugin-styled-components').default();
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
          getCustomTransformers: () => ({
            before: [StyledTransformer],
          }),
        },
      },
      {
        loader: require.resolve(
          '@storybook/addon-storysource/loader',
        ),
        options: {
          parser: 'typescript',
        },
      },
    ],
  });

  config.resolve.alias['styled-components'] = require.resolve(
    'styled-components',
  );

  config.resolve.extensions.push('.jsx', '.ts', '.tsx');
  config.output.pathinfo = false;
  config.optimization.removeAvailableModules = false;
  config.optimization.removeEmptyChunks = false;
  config.optimization.splitChunks = false;

  config.plugins.push(
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /\.(ts|tsx)$/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
  );

  return config;
};
