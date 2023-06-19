import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader', // Creates `style` nodes from JS strings
      'css-loader', // Translates CSS into CommonJS
      'sass-loader', // Compiles Sass to CSS
    ],
  };

  // If don't use a TypeScript, then need to add a babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
