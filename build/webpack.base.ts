import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/main.ts',
  output: {
    filename: 'utils.js',
    path: path.resolve(__dirname, '../dist'),
    library: `Utils`,
    umdNamedDefine: true,
    libraryTarget: 'umd',
    libraryExport: 'default' // 解决 webpack 打包后出现多一层 default 的问题
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};

export default config;
