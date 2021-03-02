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
    'babel-plugin-styled-components',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
};
