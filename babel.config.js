module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      //SOURCE: https://github.com/tleunen/babel-plugin-module-resolver
      'module-resolver',
      {
        alias: {
          components: './src/components',
          constants: './src/constants',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          assets: './src/assets',
          store: './src/store',
        },
      },
    ],
  ],
};
