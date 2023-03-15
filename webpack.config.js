const Htmlwebpack = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");

module.exports = {

    mode: 'development',

    output: {
        clean: true, //Me permite limpiar todo cuando compila
    
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

            }
        ]
    },

    optimization: {},

    plugins: [
        new Htmlwebpack({
            tittle: 'Mi Webpack App',
            //filename: 'index.html',//renombra el archivo html
            template: './src/index.html'// archivo el cual se basa el aplicativo
        }),

        new MiniCssExtract({
            filename: '[name].css',// usa el mismo nombre
            ignoreOrder: false // Ignora el orden del archivo
        })


    ]

}