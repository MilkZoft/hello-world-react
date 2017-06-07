// Dependencies
import webpack from 'webpack';
import path from 'path';

// Paths
const PATHS = {
  index: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, '/dist'),
  base: path.join(__dirname, 'src')
};

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    PATHS.index
  ],
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      include: PATHS.base
    },
    {
      test: /(\.css)$/,
      loaders: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }]
  }
};
