var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        module: path.join(srcPath, 'module.js'),
        common: ['react', 'react-router', 'flux']
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js', '.css'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].js',
        library: ['Example', '[name]'],
        pathInfo: true
    },

    module: {
        loaders: [
            {test: /\.js?$/,loader: 'babel?cacheDirectory&stage=0', exclude: /node_modules/},
            {test: /\.jsx?$/, loader: 'babel?stage=0', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /(?!\.html)\.jade$/, loader: 'jade-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],

    debug: true,
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        proxy: {
            '/web/*': {
                target: 'http://139.196.12.160:8010',
                host: '139.196.12.160'
            }
        },
        historyApiFallback: true
    }
};