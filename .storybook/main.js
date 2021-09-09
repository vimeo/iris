module.exports = {
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: true,
    checkOptions: {},
  },
  features: {
    postcss: false,
    previewCsfV3: false,
    buildStoriesJson: true,
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ['../src/**/*.story.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    './addons/themes/register',
  ],
  webpackFinal: (config) => {
    config.module.rules.push(storySource);
    return config;
  },
};

const storySource = {
  test: /\.(stories|story)\.[tj]sx?$/,
  loader: require.resolve('@storybook/source-loader'),
  exclude: [/node_modules/],
  enforce: 'pre',
};
