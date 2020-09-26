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

  outputDir: 'docs',

  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const newArgs = [...args];
        newArgs[0].title = 'Raesylin - Astronomy Picture of the Day';
        return newArgs;
      });
  },
};
