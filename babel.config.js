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
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-styled-components',
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
