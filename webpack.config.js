let path = require("path");
let webpack = require("webpack");
let clenWebapckPlugin = require("clean-webpack-plugin");
let HtmlWebpack = require("html-webpack-plugin");
let ExtractText = require("extract-text-webpack-plugin");
let isEnv = process.env.NODE_ENV;
let isDev = process.env.NODE_ENV === "bate";
let cssExtractText = new ExtractText({
    filename: "css/[name].css",
    disable: isDev,
})
module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "js/index.js",
        path: path.join(__filename, "dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssExtractText.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.less$/,
                use: cssExtractText.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader", "less-loader"
                    ]
                })
            },
            {
                test:/\.(gif|jpg|jpeg|png|bmp|eot|woff|woff2|ttf|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:4096,
                            outputPath:'img',
                            publicPath:'/img'
                        }
                    }
                ]
            },
            {
                test: /\.html/,
                use: "html-withimg-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            _isDev_: JSON.stringify(isEnv)
        }),
        cssExtractText,
        new webpack.HotModuleReplacementPlugin(),
        //new clenWebapckPlugin(['dist']),
        new HtmlWebpack({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase: "./dist",
        port: "5000",
        hot: true,
    }
}