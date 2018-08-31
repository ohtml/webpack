### 1、 npm init
### 2、 基础包 几个
```
    webpack webpack-cli webpack-dev-server html-webpack-plugin extract-text-webpack-plugin@next css-loader style-loader
     //ps
     html-webpack-plugin //html 抽离html :里面的参数 filename 输出文件名 template 模板
     extract-text-webpack-plugin@next //样式抽离
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
 2、DefinePlugin 可以设置一个全局变量

 
```
### 图片js引用

### 图片loader 
```
    file-loader
    url-loader
```
