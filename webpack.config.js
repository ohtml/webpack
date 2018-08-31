
let path = require("path");
let webpack = require("webpack");
let HtmlWebpack = require("html-webpack-plugin");
let ExtractWebpack = require("extract-text-webpack-plugin");
let isDev = process.env.NODE_ENV;

let cssExtractWebpack = new ExtractWebpack({
    filename: "./src/app.css",
    disable: true
})
let lessExtractWebpack = new ExtractWebpack({
    filename: "./less.less",
    disable: false,
})
//区别开发环境与生产环境
let host = "";
if (isDev === 'bate') {
    host = "bate.m.jd.com"
} else if (isDev === 'api') {
    host = "api.m.jd.com"
}
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
            }, {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 5,
                        outpubPath: "img/"
                    }
                }]
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            _dev_: "11111",
            serverDomain: JSON.stringify(host),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpack({
            template: "./src/index.html"//模板
        }),
        cssExtractWebpack,
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 3000
    }
}