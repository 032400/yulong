<template>
  <div class="prospects">
    <div class="prospects_header">
      <div class="prospects_title">
        <img src="@/assets/img/航空学院/国际航空服务与管理_72.jpg" alt="" />
      </div>
      <div class="prospects_banner">
        <ul class="prospects_banner_ul">
          <li v-for="(item,index) in listimg" :key="index">
            <div class="banner_li_left">
              <router-link :to="{path:'/jiuyexiangqing',query:{jid:item.j_id}}" >
                <img style="     width: 1.6rem;
     height: 1.04rem;"
                  :src="url+item.j_logo"
                  alt=""
                />
              </router-link>
              <p style="    margin-top: -0.2rem;
    background: #ccc;
    color: #fff;
    display: flex;
        align-items: center;
            justify-content: center;
    width: 100%;"><span>{{item.j_name}}</span></p>
              <div class="ul_text">
                就业方向：{{item.j_direction}}
               
              </div>
            </div>
            
          </li>
          
        </ul>
      </div>
    </div>
   
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      listimg:[],
      setimg: require("@/assets/img/公共/航空专业详情页_04.jpg"),
      setimg1: require("@/assets/img/公共/航空专业详情页_04.jpg"),
      url: "//39.105.137.169:9527/",
    };
  },
  methods: {
    seet() {
      this.setimg = '';
    },
    sett() {
      this.setimg = '';
    },
    seet1() {
      this.setimg1 = '';
    },
    sett1() {
      this.setimg1 ='';
    },
  },
  mounted() {
    
    axios.get("/cw", { params: { mod: "jiuye",cid:this.$route.query.id} }).then((res)=>{
      console.log(res);
      this.listimg=res.data
    });
  },
};
</script>

<style lang='scss' scoped>
.prospects {
  .prospects_header {
    margin: 0.15rem auto;
    width: 3.54rem;
    .prospects_title {
      overflow: hidden;
      border-top-left-radius: 0.04rem;
      border-top-right-radius: 0.04rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .prospects_banner {
      width: 100%;
      .prospects_banner_ul {
        display: flex;
        // flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 0.1rem;
        background-color: #ffffff;
        border-bottom-right-radius: 0.04rem;
        border-bottom-left-radius: 0.04rem;
        li {
          width: 48%;
          .banner_li_left {
            display: flex;
            flex-direction: column;
            
            margin-right: 0.1rem;
            a {
              width: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .ul_text {
              width: 98%;
              margin: 0.1rem 0;
              text-align: left;
              display: -webkit-box;
              text-overflow: ellipsis;
              overflow: hidden;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              padding-left: 0.06rem;
            }
          }
          .banner_li_right {
            display: flex;
            flex-direction: column;
            width: 48%;
            a {
              width: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .ul_text_two {
              width: 98%;
              margin: 0.1rem 0;
              text-align: left;
              display: -webkit-box;
              text-overflow: ellipsis;
              overflow: hidden;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              padding-left: 0.06rem;
            }
          }
        }
      }
    }
  }
  .prospects_content {
    width: 3.54rem;
    border-radius: 0.04rem;
    overflow: hidden;
    margin: 0.15rem auto;
    .prospects_content_title {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .prospects_content_Two {
      background-color: #fff;
      // background-color: #f9fafb;
      //   background-color: rgba(250, 249, 254);
      border-bottom-right-radius: 0.04rem;
      border-bottom-left-radius: 0.04rem;
      ul {
        padding-bottom: .01rem;
        .content_li {
          width: 100%;
          border-bottom: 1px solid #cccccc;
          display: flex;
          justify-content: space-between;
          padding-top: 0.2rem;
          align-items: center;
          text-align: -webkit-left;
          .span_One {
            width: 2.35rem;
            padding-bottom: 0.02rem;
            height: 0.15rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.15rem;
            letter-spacing: 0px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left: 0.07rem;
            em {
              display: inline-block;
              width: 0.16rem;
              margin: 0 0.05rem;
              img {
                width: 100%;
                margin-bottom: 0.04rem;
              }
            }
          }
          .span_Two {
            // width: .74rem;
            height: 0.11rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.12rem;
            margin-right: 0.05rem;
            letter-spacing: 0rem;
            color: #999999;
          }
        }
        .information_con_btm {
          margin: .18rem;
          text-align: center;
          img {
            width: .24rem;
            
          }
        }
      }
    }
  }
  .five_top_kite {
    margin-top: 0.15rem;
    margin: 0 0.1rem;
    border-radius: 0.05rem;
    box-sizing: border-box;
    margin: 0 auto;
    width: 3.54rem;
    margin-bottom: 0.15rem;
    background-color: #ffffff;
    overflow: hidden;
    .header {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      // margin-top: .15rem;
      .content_ul {
        display: flex;
        flex-wrap: wrap;
        .content_li {
          width: 100%;
          border-bottom: 1px solid #cccccc;
          display: flex;
          justify-content: space-between;
          margin-top: 0.2rem;
          align-items: center;
          text-align: -webkit-left;
          .span_One {
            width: 2.35rem;
            padding-bottom: 0.02rem;
            height: 0.15rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.15rem;
            letter-spacing: 0px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left: 0.07rem;
            em {
              display: inline-block;
              width: 0.16rem;
              margin: 0 0.05rem;
              img {
                width: 100%;
                margin-bottom: 0.04rem;
              }
            }
          }
          .span_Two {
            // width: .74rem;
            height: 0.11rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.12rem;
            margin-right: 0.05rem;
            letter-spacing: 0rem;
            color: #999999;
          }
        }
      }
    }
    .information_con_btm {
          margin: .18rem;
          text-align: center;
          img {
            width: .24rem;
            
          }
    }
  }
}
</style>