const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
   
    mode = 'production'
}
console.log(mode + ' mode')


module.exports = {
   
    mode:mode,
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
            new HtmlWebpackPlugin( {
                template: "./src/index.html"
            }),
            new HtmlWebpackPlugin({
                filename: 'Astate.html',
                template: './src/Astate.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Afilter.html',
                template: './src/Afilter.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Boperation.html',
                template: './src/Boperation.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Bmode.html',
                template: './src/Bmode.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Cauto.html',
                template: './src/Cauto.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Cthing.html',
                template: './src/Cthing.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Cactions.html',
                template: './src/Cactions.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Cstatuses.html',
                template: './src/Cstatuses.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Ccassette.html',
                template: './src/Ccassette.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Coperations.html',
                template: './src/Coperations.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Cinformoperation.html',
                template: './src/Cinformoperation.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Cinformcasset.html',
                template: './src/Cinformcasset.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Ceditthing.html',
                template: './src/Ceditthing.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Danalitics.html',
                template: './src/Danalitics.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Dinformanalitics.html',
                template: './src/Dinformanalitics.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Emarginality.html',
                template: './src/Emarginality.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Ehistorymarginality.html',
                template: './src/Ehistorymarginality.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Mcassette.html',
                template: './src/Mcassette.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Mhopper.html',
                template: './src/Mhopper.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Mcollection.html',
                template: './src/Mcollection.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Mcollectioninform.html',
                template: './src/Mcollectioninform.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Mreinforcement.html',
                template: './src/Mreinforcement.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Mlog.html',
                template: './src/Mlog.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'Mstory.html',
                template: './src/Mstory.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'profile.html',
                template: './src/profile.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'newletter.html',
                template: './src/newletter.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'message.html',
                template: './src/message.html'
            })
           
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jppg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
}