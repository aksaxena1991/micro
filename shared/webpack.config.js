const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: 'raw-loader',
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './fr.json': './src/languages/fr.json',
        './genericInput': './src/common-components/genericInput',
        './account': './src/services/account',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        '@mui/material': { singleton: true, requiredVersion: '^5.0.0' },
        '@emotion/react': { singleton: true, requiredVersion: '^11.0.0' },
        '@emotion/styled': { singleton: true, requiredVersion: '^11.0.0' },
        'randexp': { singleton: true, requiredVersion: '^0.5.3' },
        'axios': { singleton: true, requiredVersion: '^1.8.4' },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};