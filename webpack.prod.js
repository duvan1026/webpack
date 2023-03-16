const Htmlwebpack = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');

module.exports = {

    mode: 'production',

    output: {
        clean: true, //Me permite limpiar todo cuando compila
        filename: 'main.[contenthash].js' // se implementa hash para eliminar cache
    
    },

    module: {
        rules: [
            {
                test: /\.html$/,// barre el archivo general y encuentra un -html
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,// barre el archivo general y encuentra un -css
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]

            },
            {
                test: /\.(png|jpe?g|gif)$/, // evalua cualquier imagen sin importanr en que lugar se encuentra del proyecto.
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presents: ['@babel/present-env']
                    }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser(),
        ]
    },

    plugins: [
        new Htmlwebpack({
            tittle: 'Mi Webpack App',
            //filename: 'index.html',//renombra el archivo html
            template: './src/index.html'// archivo el cual se basa el aplicativo
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',// usa el mismo nombre
            ignoreOrder: false // Ignora el orden del archivo
        }),

        new CopyPlugin({
            patterns: [
            { from: 'src/assets/', to: 'assets/'}
            ],
        })


    ]

}