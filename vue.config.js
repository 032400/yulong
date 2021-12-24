//commenJS规则 node中提出规则
module.exports = {
    //vue配置文件
    //服务器端口设置
    devServer:{
     
     open:true,
     proxy:{
      '/cw':{
				target:'http://shxw114.com:1535',
				ws: false,
				pathRewrite:{
					"^/cw":'',
					
				}
			}
     }
    },
    //去掉空格报错
    lintOnSave: false
   } 