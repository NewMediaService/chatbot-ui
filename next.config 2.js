const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      })
    );

    return config;
  },
};
