//commenJS规则 node中提出规则
module.exports = {
    //vue配置文件
    //服务器端口设置
    devServer:{
     port:8080,
     open:true,
     proxy:{
      '/cw':{
       target:'http://www.shxw114.com:1535/',
       pathRewrite:{
         '^/cw':'http://www.shxw114.com:1535/'
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