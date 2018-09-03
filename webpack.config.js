
let path = require("path");
let webpack = require("webpack");
let HtmlWebpack = require("html-webpack-plugin");
let ExtractWebpack = require("extract-text-webpack-plugin");
let isDev = process.env.NODE_ENV;

let cssExtractWebpack = new ExtractWebpack({
    filename: "./src/app.css",
    disable: true,
})
let lessExtractWebpack = new ExtractWebpack({
    filename: "./src/app.less",
    disable: true,
})
//区别开发环境与生产环境
let host = isDev ? "bate.m.jd.com" :"api.m.jd.com";
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: cssExtractWebpack.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, 
            {
                test:/\.less$/,use:lessExtractWebpack.extract({
                    fallback:"style-loader",
                    use:[
                        "css-loader","less-loader"
                    ]
                })

            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 5,
                        outpubPath: "img/"
                    }
                }]
            },
            {
                test:/\.html/,
                use:"html-withimg-loader"
            },
            {
                test:/\/jsx?/,
                use:[
                    {
                        laoder:"babel-loader",
                        options:{
                            presets:["env","state-0"]
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            serverDomain: JSON.stringify(host),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpack({
            template: "./src/index.html"//模板
        }),
        cssExtractWebpack,
        lessExtractWebpack,
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 3000
    }
}