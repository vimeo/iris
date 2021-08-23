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
    previewCsfV3: true,
    buildStoriesJson: true,
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ['../src/**/*.story.tsx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        docs: false,
        toolbars: true,
        viewport: true,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    './addons/themes/register',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(stories|story)\.tsx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });

    return config;
  },
};
