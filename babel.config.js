const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.secrets'),
});
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/transform-react-jsx-source',
      'babel-plugin-transform-typescript-metadata',
      ['module-resolver', {
        alias: {
          components: './src/components',
          constants: './src/constants',
          containers: './src/containers',
          contexts: './src/contexts',
          data: './src/data',
          hooks: './src/hooks',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          typography: './src/typography',
          utils: './src/utils',
        },
      }],
      'react-native-reanimated/plugin',
      ['transform-inline-environment-variables', {
        include: [
          'SENTRY_DSN',
        ],
      }],
    ],
  };
};
