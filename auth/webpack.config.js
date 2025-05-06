const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require("path")
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 5001,
        historyApiFallback: true,
    },
    output: {
        publicPath: 'auto',
        clean: true,
    },
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@validators': path.resolve(__dirname, 'src/validators'),
        },
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
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
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'], // for SVG as component
            },
            {
                test: /\.svg$/,
                type: 'Assets/*'
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            remotes: {
                shared: "shared@http://localhost:3001/remoteEntry.js",
            },
            exposes: {
                "./app": "./src/app"
            },
            shared: {
                'react': { singleton: true, requiredVersion: '^18.2.0' },
                'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
                'randexp': { singleton: true, requiredVersion: '^0.5.3' },
                'axios': { singleton: true, requiredVersion: '^1.8.4' },
                'redux-saga': { singleton: true, requiredVersion: '^1.3.0' },
                '@reduxjs/toolkit': { singleton: true, requiredVersion: '^2.7.0' },
                'redux-persist': { singleton: true, requiredVersion: '^6.0.0' },
                'react-router-dom': { singleton: true, requiredVersion: '^7.5.1' },
                'formik': { singleton: true, requiredVersion: '^2.4.6' },
                'react-redux': { singleton: true, requiredVersion: '^9.2.0' },
                'react-icons': { singleton: true, requiredVersion: '^5.5.0' },
                'yup': { singleton: true, requiredVersion: '^1.6.1' },

            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}