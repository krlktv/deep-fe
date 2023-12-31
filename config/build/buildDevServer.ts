import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // To process all requests that don't match existing files on the server and direct them to the same app page (for example, to the main page or to the router), which will handle routing on the client side
  };
};
