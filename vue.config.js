//commenJS规则 node中提出规则
module.exports = {
    //vue配置文件
    //服务器端口设置
    devServer:{
     port:9527,
     open:true,
     proxy:{
      '/cw':{
       target:'http://39.105.137.169:1535/',
       pathRewrite:{
         '^/cw':'http://39.105.137.169:1535/'
       }
      },
      '/caipu':{
       target:'https://api.jisuapi.com',
       pathRewrite:{
         '^/caipu':'https://api.jisuapi.com'
       }
      }
     }
    },
    //去掉空格报错
    lintOnSave: false
   } 