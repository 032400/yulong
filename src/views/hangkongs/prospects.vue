<template>
  <div class="prospects">
    <div class="prospects_header">
      <div class="prospects_title">
        <img src="@/assets/img/航空学院/国际航空服务与管理_72.jpg" alt="" />
      </div>
      <div class="prospects_banner">
        <ul class="prospects_banner_ul">
          <li>
            <div class="banner_li_left">
              <router-link to="/Service">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_74.jpg"
                  alt=""
                />
              </router-link>
              <div class="ul_text">
                就业方向：地勤专业值机 、 机场安检 、 VIP客服 、 易登机 、
                航空票务 、 两舱等
               
              </div>
            </div>
            <div class="banner_li_right">
              <router-link to="/youlun">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_76.jpg"
                  alt=""
                />
              </router-link>
              <div class="ul_text_two">
                就业方向：当时国内外的豪华邮轮为主，主要在邮轮上从事服务性的工作。高收入
                
              </div>
            </div>
          </li>
          <li>
            <div class="banner_li_left">
              <router-link to="/kongcheng">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_79.jpg"
                  alt=""
                />
              </router-link>
              <div class="ul_text">
                就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机
                
              </div>
            </div>
            <div class="banner_li_right">
              <router-link to="/kongcheng">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_80.jpg"
                  alt=""
                />
              </router-link>
              <div class="ul_text_two">
                就业方向：掌握民航管理、民航乘务、民航票务、民航法规、机场商务管理，从事
                
              </div>
            </div>
          </li>
          <li>
            <div class="banner_li_left">
              <router-link to="/kongcheng">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_83.jpg"
                  alt=""
                />
              </router-link>
              <div class="ul_text">
                就业方向：从事于国内，国际航班的客机服务工作，空姐、地勤等工作就是空乘专业毕业以后可能从事的工作。
               
              </div>
            </div>
            <div class="banner_li_right">
              <router-link to="/gaotie">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_84.jpg"
                  alt=""
                />
              </router-link>
              <div class="ul_text_two">
                就业方向：动车、高铁车厢乘务员、动车、高铁餐吧乘务员、售票员、检票员、客运员、安检员等。
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="prospects_content">
      <div class="prospects_content_title">
        <img src="@/assets/img/航空学院/国际航空服务与管理_87.jpg" alt="" />
      </div>
      <div class="prospects_content_Two">
        <ul>
          <li class="content_li" v-for="(item, index) in lists" :key="index">
            <span class="span_One"
              ><em> <img src="@/assets/img/shouye/首页_03.jpg" alt="" /></em
              >{{ item }}</span
            >
          </li>
          <div
            class="information_con_btm"
            @touchstart="seet()"
            @touchend="sett()"
          >
            <img :src="setimg" alt="" />
          </div>
        </ul>
      </div>
    </div> -->
    <!-- <div class="five_top_kite">
      <div class="header">
        <img src="@/assets/img/航空学院/国际航空服务与管理_93.jpg" alt="" />
      </div>
      <div class="content">
        <ul class="content_ul">
          <li class="content_li" v-for="(item, index) in list" :key="index">
            <span class="span_One"
              ><em> <img src="@/assets/img/shouye/首页_03.jpg" alt="" /></em
              >{{ item }}</span
            >
          </li>
        </ul>
      </div>
      <div class="information_con_btm" @touchstart="seet1()" @touchend="sett1()">
        <img :src="setimg1" alt="" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          minimg: "@/assets/img/航空学院/国际航空服务与管理_74.jpg",
          text: "就业方向：地勤专业值机 、 机场安检 、 VIP客服 、 易登机 、 航空票务 、 两舱等",
        },
        {
          minimg: "@/assets/img/航空学院/国际航空服务与管理_76.jpg",
          text: "就业方向：当时国内外的豪华邮轮为主，主要在邮轮上从事服务性的工作。高收入",
        },
        {
          minimg: "@/assets/img/航空学院/国际航空服务与管理_79.jpg",
          text: "就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机",
        },
        {
          minimg: "@/assets/img/航空学院/国际航空服务与管理_80.jpg",
          text: "就业方向：掌握民航管理、民航乘务、民航票务、民航法规、机场商务管理，从事",
        },
        {
          minimg: "@/assets/img/航空学院/国际航空服务与管理_83.jpg",
          text: "就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机",
        },
        {
          minimg: "@/assets/img/航空学院/国际航空服务与管理_84.jpg",
          text: "就业方向：国内外各大航空公司、地方航空公司、民营航空公司、外航服务公司、各大",
        },
      ],
      list: [
        "39岁的小伙子,就发生了发颤,怎么",
        "市北市民留言咨询这些问题,官方",
        "美供应链受阻问题雪上加霜",
        "篮网有能力解决他们的问题度,你",
        "记者实测快速企业智能客服:回复",
        "养老金有哪些渠道可以获得?有说明",
        "怎么样买保险才是最合理的?咱们",
        "全面建成小康社会的重要举措你们慢慢",
        "摩根士丹利重磅报告:中国经济措施",
      ],
      lists: [
        "摩根士丹利重磅报告:中国经济措施",
        "市北市民留言咨询这些问题,官方",
        "美供应链受阻问题雪上加霜",
        "篮网有能力解决他们的问题度,你",
        "记者实测快速企业智能客服:回复",
        "养老金有哪些渠道可以获得?有说明",
        "怎么样买保险才是最合理的?咱们",
        "全面建成小康社会的重要举措你们慢慢",
        "39岁的小伙子,就发生了发颤,怎么",
      ],
      setimg: require("@/assets/img/公共/航空专业详情页_04.jpg"),
      setimg1: require("@/assets/img/公共/航空专业详情页_04.jpg"),
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
        flex-direction: column;
        padding-top: 0.1rem;
        background-color: #ffffff;
        border-bottom-right-radius: 0.04rem;
        border-bottom-left-radius: 0.04rem;
        li {
          justify-content: space-between;
          display: flex;
          .banner_li_left {
            display: flex;
            flex-direction: column;
            width: 48%;
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