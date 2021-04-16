module.exports = {
  presets: [
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '>5%',
            'last 2 Chrome versions',
            'last 2 Edge versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
          ],
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
};
