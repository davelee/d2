module.exports = {
  logWebpackOutput: function (stats) {
    console.log(stats.toString({
      colors: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }));
  }
};