module.exports = {
  presets: [
    ['babel-preset-react-app', { typescript: true }],
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '>2%',
            'last 1 Edge version',
            'last 2 Safari version',
            'last 1 Firefox version',
            'IE 11',
          ],
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
    'babel-plugin-transform-class-properties',
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
