const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const StyledTransformer = require('typescript-plugin-styled-components').default();
const CircularDependencyPlugin = require('circular-dependency-plugin');

const tsTransformers = { before: [StyledTransformer] };

module.exports = async ({ config }) => {
  config.module.rules.push(typescript, babel, storySource);
  config.resolve.extensions.push('.jsx', '.ts', '.tsx');
  config.plugins.push(circularDeps);

  return config;
};

const typescript = {
  test: /\.(ts|tsx)$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        getCustomTransformers: () => tsTransformers,
      },
    },
    {
      loader: 'babel-loader',
      options: { babelrc: false },
    },
  ],
};

const babel = {
  test: /\.(stories|story)\.mdx$/,
  use: [
    { loader: 'babel-loader' },
    {
      loader: '@mdx-js/loader',
      options: { compilers: [createCompiler({})] },
    },
  ],
};

const storySource = {
  test: /\.(stories|story)\.[tj]sx?$/,
  loader: require.resolve('@storybook/source-loader'),
  exclude: [/node_modules/],
  enforce: 'pre',
};

const circularDeps = new CircularDependencyPlugin({
  exclude: /a\.js|node_modules/,
  include: /\.(ts|tsx)$/,
  failOnError: true,
  allowAsyncCycles: false,
  cwd: process.cwd(),
});
