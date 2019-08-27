module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  assetsDir: 'static',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        pathRewrite: { '^/api': '' },
      },
    },
  },

};
