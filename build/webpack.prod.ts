import * as webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.base';

// 混淆压缩 JS 代码
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
// 打包之前清除文件
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true, // 压缩
          mangle: true, // 混淆
          warnings: false,
          output: {
            ascii_only: true, // 转义非 ascii 编码字符串
            comments: false, // 注释
            beautify: false // 美化代码
          }
        }
      })
    ]
  }
};

export default merge(common, config);
