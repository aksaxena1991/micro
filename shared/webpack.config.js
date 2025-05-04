const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require("path");

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
    alias: {
      '@components': path.resolve(__dirname, 'src/common-components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@languages': path.resolve(__dirname, 'src/languages'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false, // disable the behavior
        },
        include: /node_modules\/(@mui|@babel)/,
      },
      {
        test: /\.(js|jsx)$/, // handles JS & JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: 'raw-loader',
      },
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/, // use svgr for React components
      //   use: ['@svgr/webpack'],
      // },
      // {
      //   test: /\.svg$/i,
      //   type: 'asset/resource',
      //   issuer: /\.(css|scss|sass|less)$/, // handle SVGs in stylesheets
      // },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/, // used when imported in JS/TS for React component
            use: ['@svgr/webpack'],
          },
          {
            type: 'asset/resource', // fallback for everything else
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
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
        './companyDropdownComponent': './src/page-wrappers/companyDropdownComponent',
        './genericAutocomplete': './src/common-components/genericAutocomplete',
        './genericBreadcrum': './src/common-components/genericBreadcrum',
        './genericCheckbox': './src/common-components/genericCheckbox',
        './genericCustomError': './src/common-components/genericCustomError',
        './genericDataGrid': './src/common-components/genericDataGrid',
        './genericDatePicker': './src/common-components/genericDatePicker',
        './genericDateTimePicker': './src/common-components/genericDateTimePicker',
        './genericDivider': './src/common-components/genericDivider',
        './genericDropdown': './src/common-components/genericDropdown',
        './genericImagePicker': './src/common-components/genericImagePicker',
        './genericLoadingButton': './src/common-components/genericLoadingButton',
        './genericRadio': './src/common-components/genericRadio',
        './genericRequired': './src/common-components/genericRequired',
        './genericSearch': './src/common-components/genericSearch',
        './genericSignaturePad': './src/common-components/genericSignaturePad',
        './genericSwitch': './src/common-components/genericSwitch',
        './genericTextarea': './src/common-components/genericTextarea',
        './genericTextEditor': './src/common-components/genericTextEditor',
        './templateCard': './src/common-components/templateCard',
        './toasty': './src/common-components/toasty',
        './account': './src/services/account',
        './store': './src/store/index',
        './store/selectors': './src/store/selectors',
        // './cashless-payment.svg': './src/asset/icons/cashless-payment.svg',
        // './contactless.svg': './src/asset/icons/contactless.svg',
        // './credit-debit-card.svg': './src/asset/icons/credit-debit-card.svg',
        // './cvv.svg': './src/asset/icons/cvv.svg',
        // './mobile-banking.svg': './src/asset/icons/mobile-banking.svg',
        // './numbers.svg': './src/asset/icons/numbers.svg',
        // './transfer.svg': './src/asset/icons/transfer.svg',
        './epackbookLogoBlue.svg': './src/asset/logos/epackbookLogoBlue.svg',
        './loginImg.svg': './src/asset/images/loginImg.svg',
      },
      shared: {
        '@emotion/react': { singleton: true, requiredVersion: '^11.11.0' },
        '@emotion/styled': { singleton: true, requiredVersion: '^11.11.0' },
        '@mui/icons-material': { singleton: true, requiredVersion: '^5.11.16' },
        '@mui/material': { singleton: true, requiredVersion: '^5.14.0' },
        '@mui/x-data-grid': { singleton: true, requiredVersion: '^8.1.0' },
        '@mui/x-date-pickers': { singleton: true, requiredVersion: '^8.1.0' },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: '^2.7.0' },
        'axios': { singleton: true, requiredVersion: '^1.8.4' },
        'dayjs': { singleton: true, requiredVersion: '^1.11.13' },
        'randexp': { singleton: true, requiredVersion: '^0.5.3' },
        'react': { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        'react-quill': { singleton: true, requiredVersion: '^2.0.0' },
        'react-signature-canvas': { singleton: true, requiredVersion: '^1.1.0-alpha.2' },
        'redux-persist': { singleton: true, requiredVersion: '^6.0.0' },
        'redux-saga': { singleton: true, requiredVersion: '^1.3.0' },
        'style-loader': { singleton: true, requiredVersion: '^4.0.0' },
        'underscore': { singleton: true, requiredVersion: '^1.13.7' },
        '@mui/joy': { singleton: true, requiredVersion: '^5.0.0-beta.52' },
        '@mui/lab': { singleton: true, requiredVersion: '^5.0.0-alpha.125' },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};