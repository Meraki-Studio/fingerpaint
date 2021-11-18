/* eslint-disable no-undef */
import { EnvironmentPlugin } from 'webpack';
import { resolve as _resolve } from 'path';
import HtmlPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const env = Object.entries({
    ...require('dotenv').config(),
    ...process.env,
}).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});

// eslint-disable-next-line
export const entry = './src/index.js';
export const output = {
    filename: 'bundle.[hash].js',
    path: _resolve(__dirname, './dist'),
    publicPath: '/',
};
export const devServer = {
    port: 7891,
    historyApiFallback: true,
};
export const plugins = [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new EnvironmentPlugin(env),
    new CopyPlugin({
        patterns: [{ from: 'public' }],
    }),
];
export const resolve = {
    extensions: ['.js', '.jsx'],
};
export const module = {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        importLoaders: 1,
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        postcssOptions: {
                            plugins: [
                                require('postcss-import')(),
                                require('autoprefixer')(),
                                require('postcss-nested')(),
                            ],
                        },
                    },
                },
            ],
        },
        {
            test: /\.(jpeg|jpg|png|svg)$/,
            use: {
                loader: 'url-loader',
                options: { limit: 1000 },
            },
        },
    ],
};
