const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['sass-loader'],
        include: path.resolve(__dirname, '../'),
        // include: [path.resolve(__dirname, '../src/sass', 'sass')],
      },
    ],
  },
};
