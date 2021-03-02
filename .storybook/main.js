module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
    '../src/**/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    './addons/themes/register',
  ],
  webpackFinal: (config) => {
    config.module.rules.push(typescript);
    config.module.rules.push(storySource);
    config.resolve.extensions.push('.jsx', '.ts', '.tsx');

    return config;
  },
};

const typescript = {
  test: /\.(ts|tsx)$/,
  use: [
    {
      loader: 'babel-loader',
      options: { babelrc: false },
    },
  ],
};

const storySource = {
  test: /\.(stories|story)\.[tj]sx?$/,
  loader: require.resolve('@storybook/source-loader'),
  exclude: [/node_modules/],
  enforce: 'pre',
};
