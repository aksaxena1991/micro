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
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // <-- add this!
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // ensure JSX is supported
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
        './genericInput': './src/common-components/genericInput', // case-sensitive!
        './genericAutocomplete': './src/common-components/genericAutocomplete', // case-sensitive!
        './genericBreadcrum': './src/common-components/genericBreadcrum', // case-sensitive!
        './genericCheckbox': './src/common-components/genericCheckbox', // case-sensitive!
        './genericCustomError': './src/common-components/genericCustomError', // case-sensitive!
        './genericDataGrid': './src/common-components/genericDataGrid', // case-sensitive!
        './genericDatePicker': './src/common-components/genericDatePicker', // case-sensitive!
        './genericDateTimePicker': './src/common-components/genericDateTimePicker', // case-sensitive!
        './genericDivider': './src/common-components/genericDivider', // case-sensitive!
        './genericDropdown': './src/common-components/genericDropdown', // case-sensitive!
        './genericImagePicker': './src/common-components/genericImagePicker', // case-sensitive!
        './genericLoadingButton': './src/common-components/genericLoadingButton', // case-sensitive!
        './genericRadio': './src/common-components/genericRadio', // case-sensitive!
        './genericRequired': './src/common-components/genericRequired', // case-sensitive!
        './genericSearch': './src/common-components/genericSearch', // case-sensitive!
        './genericSignaturePad': './src/common-components/genericSignaturePad', // case-sensitive!
        './genericSwitch': './src/common-components/genericSwitch', // case-sensitive!
        './genericTextarea': './src/common-components/genericTextarea', // case-sensitive!
        './genericTextEditor': './src/common-components/genericTextEditor', // case-sensitive!
        './templateCard': './src/common-components/templateCard', // case-sensitive!
        './toasty': './src/common-components/toasty', // case-sensitive!
        './account': './src/services/account',
        './store': './src/store/index',
        './store/selectors': './src/store/selectors',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        '@mui/material': { singleton: true, requiredVersion: '^5.0.0' },
        '@emotion/react': { singleton: true, requiredVersion: '^11.0.0' },
        '@emotion/styled': { singleton: true, requiredVersion: '^11.0.0' },
        'randexp': { singleton: true, requiredVersion: '^0.5.3' },
        'axios': { singleton: true, requiredVersion: '^1.8.4' },
        'redux-saga': { singleton: true, requiredVersion: '^1.3.0' },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: '^2.7.0' },
        'redux-persist': { singleton: true, requiredVersion: '^6.0.0' },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};