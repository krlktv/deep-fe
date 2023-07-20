import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    // It's possible to pass global variables to the app using DefinePlugin
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev), // Two underscores at the beginning and at the end of a global variable (__IS_DEV__) to make it easy to distinguish it from ordinary variables in the code
    }),
  ];
};
