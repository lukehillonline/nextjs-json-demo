module.exports = {
  trailingSlash: true,
  productionBrowserSourceMaps: true,

  webpack: function (config) {
    config.module.rules.push({
      test: /\.content.json$/,
      type: "asset/source",
    });

    return config;
  },
};
