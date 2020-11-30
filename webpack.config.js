const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue?$/,
                exclude: /(node_modules)/,
                use: 'vue-loader'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            // allow access to process.env from within the vue app
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                VUE_APP_REDIRECT_URL: JSON.stringify(process.env.VUE_APP_REDIRECT_URL)
            }
        })
    ],
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: process.env.API_URL
        })
    }
}