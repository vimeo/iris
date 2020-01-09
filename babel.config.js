module.exports = {
  presets: [
    ['@babel/preset-typescript'],
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        'require-context-hook',
      ],
    },
  },
};
