### 1、 npm init
### 2、 基础包 几个
```
    webpack webpack-cli webpack-dev-server html-webpack-plugin extract-text-webpack-plugin@next css-loader style-loader
     //ps
     html-webpack-plugin //html 抽离html :里面的参数 filename 输出文件名 template 模板
     extract-text-webpack-plugin@next //样式抽离
```
### entry
.可以是字符串、可以数组，可以是对像
```
    
```

#### 热更新
```
    if(module.hot){
        module.hot.accept();
    }
```
### 环境变量
```
 cross-env 

 //配置用法
 //cross-env  NODE-ENV==development / production
 //1、在package 启动时 cross-env NODE-ENV=development 作用是传参 
 cross-env NODE_ENV=development webpack-dev-server

 // 获取时用上面传的参  process.env.NODE_ENV  
 2、DefinePlugin 可以设置一个全局变量
 
```
####  安less
```
npm install less less-loader
```

### 图片js引用

### 图片loader 
>三个都要
```
    file-loader
    url-loader
    html-widthimg-laoder 

```
.代码如下
```
   {
              test:/\.(png|jpg|gif)$/,
              use:[
                  {
                      loader:"url-loader",
                      options:{
                          limit:5
                      }
                  }
              ]
            },
            {
                test:/\.html/,
                use:"html-withimg-loader"
            }
```
### css  的自动加 前缀。
> 然后添加 postcss.config.js
```
    npm install postcss-loader  autoprefixer -D
```
> postcss.config.js 中的代码
```
    module.exports={
        plugin:[require("autoprefixer")]
    }
```


### 注入一个全局名字
```
    definPlugin({
        _dev_:true,
    })
```
## 总结：
```
     webpack 下自带的模块
     definPlugin
     hot.. //热更新
```
### 多页面
```
module.exports ={
    entry:{
        pageA:'./src/pageA',
        pageB:'./src/pageB'
    },
    output:{
        path:path.resolve('dist'),
        filename:'[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'pageA.html',
            chunks:['pageA']
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'pageB.html',
            chunks:['pageB']
        })
    ]
}
```
## 单词
```
  definPlugin  //定义
  process
  limit

```