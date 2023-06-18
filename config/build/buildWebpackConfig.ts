import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildloaders';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined, // Add source map for development mode and remove otherwise
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
