const { override, fixBabelImports, addLessLoader, addWebpackAlias, overrideDevServer } = require('customize-cra');
const path = require("path");
const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
        // 关闭sourceMap
        config.devtool = false;
    }
    // console.log(config)
    return config;
}
const devServerConfig = () => config => {
    console.log(config)
    return {
      ...config,
    };
  };
module.exports = {
    webpack: override(
        addCustomize(),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addLessLoader({
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: { '@primary-color': '#1890ff' },
            }
        }),
        addWebpackAlias({
            '@': path.resolve(__dirname, "./src")
        })
    ),
    devServer: overrideDevServer(devServerConfig())
}