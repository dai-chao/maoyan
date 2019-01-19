//配置你的webpack
//webpack-dev-server   port host proxy 反向代理

const webpack = require('webpack');
module.exports = {
    devServer: {
        // port: 3000
        proxy: {   //配置代理
            '/sexLady':{
                target: 'http://m.maoyan.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/sexLady': '/'
                }
            }

        }
    },
    configureWebpack : {
        plugins:[
            new webpack.ProvidePlugin({
                $:'jquery',
                jQuery : "jquery",
                "windows.jQuery" : "jquery"
            })
        ]
    }
      
}
