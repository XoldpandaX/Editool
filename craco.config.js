const path = require('path');
const CracoLess = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true, // Enable dark mode,
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
