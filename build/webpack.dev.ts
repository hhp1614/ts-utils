import * as path from 'path';
import * as webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.base';
// html 插件
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './example',
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../example/index.html'),
      title: 'ts-utils'
    })
  ]
};

export default merge(common, config);
