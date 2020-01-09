const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const StyledTransformer = require('typescript-plugin-styled-components').default();
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = async ({ config }) => {
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
      // {
      //   loader: require.resolve(
      //     '@storybook/addon-storysource/loader',
      //   ),
      //   options: {
      //     parser: 'typescript',
      //   },
      // },
    ],
  });

  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        // plugins: ['@babel/plugin-transform-react-jsx'],
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  config.resolve.extensions.push('.jsx', '.ts', '.tsx');
  config.resolve.alias['styled-components'] = require.resolve(
    'styled-components',
  );

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
