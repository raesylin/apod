module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/apod/'
    : '/',

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },
};
