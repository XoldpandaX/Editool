const CracoLess = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true, // Enable dark mode,
              compact: true, // Enable compact mode
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
