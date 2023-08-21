const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // clientLogLevel: 'error',
    static: {
      directory: path.join(__dirname, '../dist'),
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    // alias: {
    //   '@atoms': path.resolve(__dirname, 'src/common/components/atoms'),
    //   '@molecules': path.resolve(__dirname, 'src/common/components/molecules'),
    //   '@organisms': path.resolve(__dirname, 'src/common/components/organisms'),
    //   '@utils': path.resolve(__dirname, 'src/common/utils'),
    //   '@assets': path.resolve(__dirname, 'src/common/assets'),
    //   '@types': path.resolve(__dirname, 'src/common/types'),
    //   '@constants': path.resolve(__dirname, 'src/common/constants'),
		// 	'@commerceTools': path.resolve(__dirname, 'src/commerceTools'),
		// 	'@pages': path.resolve(__dirname, 'src/pages'),
    // },
  },
};
