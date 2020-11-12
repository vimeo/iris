module.exports = {
  presets: [
    ['babel-preset-react-app', { typescript: true }],
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-styled-components',
    '@babel/plugin-transform-runtime',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-transform-modules-commonjs',
        'require-context-hook',
      ],
    },
  },
};
