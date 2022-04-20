module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        loose: true,
        shippedProposals: true,
        targets: {
          browsers: ['>5%', 'last 2 Chrome versions', 'last 2 Edge versions', 'last 2 Firefox versions', 'last 2 Safari versions'],
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
  ],
};
