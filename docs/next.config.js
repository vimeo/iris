const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  basePath: DEV ? '' : '/iris/beta',
  assetPrefix: DEV ? '' : '/iris/beta',
};
