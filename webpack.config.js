'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoader = new ExtractTextPlugin({
    filename: 'styles/[name].[hash].css',
    allChunks: true,
});

const walk = (dir, filelist = []) => {
    fs.readdirSync(dir)
        .map(file => fs.statSync(path.join(dir, file)).isDirectory() ?
            walk(path.join(dir, file), filelist) :
            filelist.push(path.join(dir, file)));
    return filelist;
}

const pack = module.exports = {
    entry: walk(
        path.join(__dirname, 'assets/styles'),
        [path.join(__dirname, 'src/index.tsx')]
    ),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].[hash].js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.tsx']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
            {
                test: /\.s?[c|a]ss$/,
                use: cssLoader.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                }),
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000
    },

    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, 'build')),
        cssLoader,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'assets/index.html'),
            favicon: path.join(__dirname, 'assets/favicon.ico'),
            showErrors: true,
            hash: true
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    pack.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8
            },
            exclude: /\/node_modules/
        })
    )
}