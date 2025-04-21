const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
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
            name: 'auth',
            filename: 'remoteEntry.js',
            remotes: {
                shared: "shared@http://localhost:3001/remoteEntry.js",
            },
            exposes: {
                "./app": "./src/app"
            },
            shared: {
                react: { singleton: true, requiredVersion: '^18.0.0' },
                'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
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
}