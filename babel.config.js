const { BABEL_ENV, NODE_ENV } = process.env;
const modules =
  BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false;

module.exports = {
  presets: [
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Edge versions',
            'last 2 Firefox versions',
            'last 1 Safari versions',
          ],
        },
        loose: true,
        modules,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    modules === 'commonjs' && 'add-module-exports',
  ].filter(Boolean),
};
