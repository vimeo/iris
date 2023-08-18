module.exports = {
  typescript: {
    check: true,
    checkOptions: {},
  },
  features: {
    postcss: false,
    previewCsfV3: false,
    buildStoriesJson: false,
    storyStoreV7: false,
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ['../src/**/*.story.tsx', '../src/**/*.story.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-designs',
    'storybook-dark-mode',
  ],
  webpackFinal: (config) => {
    console.log(storySource);
    config.module.rules.push(storySource);
    return config;
  },
  staticDirs: ['./public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  docs: {
    autodocs: true,
  },
};
const storySource = {
  test: /\.(stories|story)\.[tj]sx?$/,
  loader: require.resolve('@storybook/source-loader'),
  exclude: [/node_modules/],
  enforce: 'pre',
};
