<template>
  <div>
    <div class="lun_warp">
      <div class="lun_con">
        <img src="@/assets/img/网络新媒体/网络新媒体运营_02.png" alt="" />
      </div>
    </div>
    <page />
    <div class="show">
      <div class="show-header">
        <img src="@/assets/img/航空学院/国际航空服务与管理_22.jpg" alt="" />
      </div>

      <div class="show-text">
        <ul>
          <router-link to="/sichuan" tag="li">
            <div class="school-img">
              <img src="@/assets/img/网络新媒体/网络新媒体运营_05.jpg" alt="" />
            </div>
            <div class="school-text">
              <div class="school-name">大连海事大学</div>
              <p><span>学校所在地：</span>大连</p>
              <p>
                <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
              </p>
              <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
            </div>
          </router-link>
          <li>
            <div class="school-img">
              <img src="@/assets/img/网络新媒体/网络新媒体运营_07.jpg" alt="" />
            </div>
            <div class="school-text">
              <div class="school-name">渤海大学</div>
              <p><span>学校所在地：</span>大连</p>
              <p>
                <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
              </p>
              <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="school-img">
              <img src="@/assets/img/网络新媒体/网络新媒体运营_11.jpg" alt="" />
            </div>
            <div class="school-text">
              <div class="school-name">北京航空大学</div>
              <p><span>学校所在地：</span>大连</p>
              <p>
                <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
              </p>
              <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
            </div>
          </li>
          <li>
            <div class="school-img">
              <img src="@/assets/img/网络新媒体/网络新媒体运营_12.jpg" alt="" />
            </div>
            <div class="school-text">
              <div class="school-name">吉林大学</div>
              <p><span>学校所在地：</span>大连</p>
              <p>
                <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
              </p>
              <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="school-img">
              <img src="@/assets/img/网络新媒体/网络新媒体运营_15.jpg" alt="" />
            </div>
            <div class="school-text">
              <div class="school-name">山东杏林航空</div>
              <p><span>学校所在地：</span>大连</p>
              <p>
                <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
              </p>
              <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
            </div>
          </li>
          <li>
            <div class="school-img">
              <img src="@/assets/img/网络新媒体/网络新媒体运营_17.jpg" alt="" />
            </div>
            <div class="school-text">
              <div class="school-name">南京航空学院</div>
              <p><span>学校所在地：</span>大连</p>
              <p>
                <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
              </p>
              <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="banner">
      <div class="banner_con">
        <div class="title_img">
          <img src="@/assets/img/航空学院/国际航空服务与管理_40.jpg" />
        </div>
        <!-- ---------------------------- -->
        <div class="swiper swiper3">
          <div class="swiper-container" id="swiperThree">
            <div class="swiper-wrapper swiper1-wrapper">
              <div class="swiper-slide" v-for="item in img" :key="item.type">
                <img :src="item.picture" />
              </div>
            </div>
            <img :src="rightimg" @click="right" class="swiper-button-next" />
            <img :src="leftimg" @click="left" class="swiper-button-prev" />
          </div>
        </div>

        <div thumbsSlider class="swiper swiper4">
          <div class="swiper-container" id="swiperFour">
            <div class="swiper-wrapper swiper4-wrapper">
              <div
                class="swiper-slide act"
                v-for="item in img2"
                :key="item.type"
              >
                <img :src="item.pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="age">
      <div class="age-header">
        <img src="@/assets/img/航空学院/国际航空服务与管理_58.jpg" alt="" />
      </div>
      <div class="age-text">
        <ul>
          <router-link to="/hangkong/chuzhongsheng">
            <li>
              <div class="age-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_64.jpg"
                  alt=""
                />
              </div>
              <div class="age-title">
                <p class="junior">初中生15岁+</p>
              </div>
              <div class="age-title-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_03.jpg"
                  alt=""
                />
              </div>
            </li>
          </router-link>
          <router-link to="/hangkong/gaozhongsheng">
            <li>
              <div class="age-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_61.jpg"
                  alt=""
                />
              </div>
              <div class="age-title">
                <p class="senior">高中生18岁+</p>
              </div>
              <div class="age-title-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_05.png"
                  alt=""
                />
              </div>
            </li>
          </router-link>
        </ul>
        <ul>
          <router-link to="/hangkong/sanxiaosheng">
            <li>
              <div class="age-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_69.jpg"
                  alt=""
                />
              </div>
              <div class="age-title">
                <p class="cube">三校生18岁+</p>
              </div>
              <div class="age-title-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_10.jpg"
                  alt=""
                />
              </div>
            </li>
          </router-link>
          <router-link to="/hangkong/yikaosheng">
            <li>
              <div class="age-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_68.jpg"
                  alt=""
                />
              </div>
              <div class="age-title">
                <p class="art">艺考生18岁+</p>
              </div>
              <div class="age-title-img">
                <img
                  src="@/assets/img/航空学院/国际航空服务与管理_12.jpg"
                  alt=""
                />
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
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
                    src="@/assets/img/网络新媒体/网络新媒体运营_38.jpg"
                    alt=""
                  />
                </router-link>
                <div class="ul_text">
                  就业方向：地勤专业值机 、 机场安检 、 VIP客服 、 易登机 、
                  航空票务 、 两舱等
                  '00000000000000000000000000000000000000000000000000'
                </div>
              </div>
              <div class="banner_li_right">
                <router-link to="/youlun">
                  <img
                    src="@/assets/img/网络新媒体/网络新媒体运营_40.jpg"
                    alt=""
                  />
                </router-link>
                <div class="ul_text_two">
                  就业方向：当时国内外的豪华邮轮为主，主要在邮轮上从事服务性的工作。高收入
                  '00000000000000000000000000000000000000000000000000'
                </div>
              </div>
            </li>
            <li>
              <div class="banner_li_left">
                <router-link to="/kongcheng">
                  <img
                    src="@/assets/img/网络新媒体/网络新媒体运营_43.jpg"
                    alt=""
                  />
                </router-link>
                <div class="ul_text">
                  就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机
                  '00000000000000000000000000000000000000000000000000'
                </div>
              </div>
              <div class="banner_li_right">
                <router-link to="/kongcheng">
                  <img
                    src="@/assets/img/网络新媒体/网络新媒体运营_44.jpg"
                    alt=""
                  />
                </router-link>
                <div class="ul_text_two">
                  就业方向：掌握民航管理、民航乘务、民航票务、民航法规、机场商务管理，从事
                  '00000000000000000000000000000000000000000000000000'
                </div>
              </div>
            </li>
            <li>
              <div class="banner_li_left">
                <router-link to="/gaotie">
                  <img
                    src="@/assets/img/网络新媒体/网络新媒体运营_47.jpg"
                    alt=""
                  />
                </router-link>
                <div class="ul_text">
                  就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机
                  '00000000000000000000000000000000000000000000000000'
                </div>
              </div>
              <div class="banner_li_right">
                <router-link to="/kongcheng">
                  <img
                    src="@/assets/img/网络新媒体/网络新媒体运营_48.jpg"
                    alt=""
                  />
                </router-link>
                <div class="ul_text_two">
                  就业方向：国内外各大航空公司、地方航空公司、民营航空公司、外航服务公司、各大
                  '00000000000000000000000000000000000000000000000000'
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="prospects_content">
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
              <!-- <span class="span_Two">{{tlep}}</span> -->
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
      </div>
      <div class="five_top_kite">
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
              <!-- <span class="span_Two">{{tlep}}</span> -->
            </li>
          </ul>
        </div>
        <div
          class="information_con_btm"
          @touchstart="seet1()"
          @touchend="sett1()"
        >
          <img :src="setimg1" alt="" />
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="school">
        <div class="sch-header">
          <img src="@/assets/img/shouye/国际航空服务与管理_99.jpg" alt="" />
        </div>
        <div class="sch-content">
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_40.gif" alt="" />
            <span>北京市航空中学</span>
          </div>
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_37.gif" alt="" />
            <span>吉林大学</span>
          </div>
          <div class="sch-colleage" style="margin: 0.08rem 0">
            <img src="@/assets/img/公共/首页改1_44.gif" alt="" />
            <span>大连海事大学</span>
          </div>
          <div class="sch-colleage" style="margin: 0.08rem 0">
            <img src="@/assets/img/公共/首页改1_46.gif" alt="" />
            <span>渤海大学</span>
          </div>
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_50.gif" alt="" />
            <span>山东杏林航空大学</span>
          </div>
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_52.gif" alt="" />
            <span>南京市航空大学</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import page from "@/components/page/index.vue";

import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    page,
  },
  data() {
    return {
      shang: "0",
      xia: "0",
      img: [
        {
          picture: require("@/assets/img/网络新媒体/网络新媒体运营_24.jpg"),
          type: "0",
        },
        {
          picture: require("@/assets/img/网络新媒体/网络新媒体运营_26.jpg"),
          type: "1",
        },
        {
          picture: require("@/assets/img/网络新媒体/网络新媒体运营_28.jpg"),
          type: "2",
        },
        {
          picture: require("@/assets/img/网络新媒体/网络新媒体运营_30.jpg"),
          type: "3",
        },
        {
          picture: require("@/assets/img/网络新媒体/网络新媒体运营_32.jpg"),
          type: "4",
        },
      ],
      img2: [
        {
          pic: require("@/assets/img/网络新媒体/网络新媒体运营_24.jpg"),
          type: "0",
        },
        {
          pic: require("@/assets/img/网络新媒体/网络新媒体运营_26.jpg"),
          type: "1",
        },
        {
          pic: require("@/assets/img/网络新媒体/网络新媒体运营_28.jpg"),
          type: "2",
        },
        {
          pic: require("@/assets/img/网络新媒体/网络新媒体运营_30.jpg"),
          type: "3",
        },
        {
          pic: require("@/assets/img/网络新媒体/网络新媒体运营_32.jpg"),
          type: "4",
        },
      ],
      leftimg: require("@/assets/img/航空学院/未标题-1_06.png"),
      rightimg: require("@/assets/img/航空学院/题-1_06.png"),
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
      setimg: require("@/assets/img/公共/首页_06.jpg"),
      setimg1: require("@/assets/img/公共/首页_06.jpg"),
    };
  },
  mounted() {
    var thumbsSwiper = new Swiper("#swiperFour", {
      spaceBetween: 1,
      slidesPerView: 5,
      watchSlidesVisibility: true, //防止不可点击
    });
    var gallerySwiper = new Swiper("#swiperThree", {
      spaceBetween: 10,
      loop: true, // 循环模式选项
      autoplay: true, //自动播放
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  },
  methods: {
    left() {
      this.leftimg = require("@/assets/img/航空学院/题-1_03.png");
      this.rightimg = require("@/assets/img/航空学院/题-1_06.png");
    },
    right() {
      this.leftimg = require("@/assets/img/航空学院/未标题-1_06.png");
      this.rightimg = require("@/assets/img/航空学院/未标题-1_03.png");
    },
    seet() {
      this.setimg = require("@/assets/img/公共/首页_03.jpg");
    },
    sett() {
      this.setimg = require("@/assets/img/公共/首页_06.jpg");
    },
    seet1() {
      this.setimg1 = require("@/assets/img/公共/首页_03.jpg");
    },
    sett1() {
      this.setimg1 = require("@/assets/img/公共/首页_06.jpg");
    },
  },
};
</script>
<style lang="scss" scoped>
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
          padding: 0.15rem 0.12rem 0.25rem 0.12rem;
          img {
            width: 3.31rem;
            height: 0.44rem;
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
      padding: 0.15rem 0.12rem 0.25rem 0.12rem;
      img {
        width: 3.31rem;
        height: 0.44rem;
      }
    }
  }
}
.age {
  height: 3.8rem;
  width: 3.55rem;
  background: #f9fafb;
  border-radius: 0.05rem;
  overflow: hidden;
  margin: auto;
  .age-header {
    height: 0.54rem;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .age-text {
    height: 2.7rem;
    padding: 0.1rem 0.42rem 0.1rem 0.42rem;
    box-sizing: border-box;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      li {
        width: 1.1rem;
        .age-img {
          width: 1rem;
          height: 1.1rem;
          margin: auto;
          img {
            width: 100%;
          }
        }
        .age-title {
          p {
            font-family: MicrosoftYaHei-Bold;
            font-size: 0.17rem;
            font-weight: 700;
            line-height: 0.07rem;
            text-align: center;
          }
          .junior {
            color: #33cc99;
          }
          .senior {
            color: #0099ff;
          }
          .cube {
            color: #ff6666;
          }
          .art {
            color: #3399cc;
          }
        }
        .age-title-img {
          width: 1rem;
          margin: 0.1rem auto;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  .banner_con {
    width: 3.58rem;
    height: 3.37rem;
    background: white;
    border-radius: 0.05rem;
    .title_img {
      width: 100%;
      height: 0.54rem;
      margin-bottom: 0.05rem;
      img {
        width: 100%;
        height: 0.54rem;
      }
    }
    .swiper3 {
      width: 100%;
      height: 1.98rem;
      margin-bottom: 0.05rem;
      .swiper-button-next {
        width: 0.27rem;
        height: 0.27rem;
        border-radius: 50%;
        opacity: 0.7;
      }
      .swiper-button-prev {
        width: 0.27rem;
        height: 0.27rem;
        opacity: 0.7;
        border-radius: 50%;
      }
      .swiper1-wrapper {
        width: 100%;
        height: 1.98rem;
        .swiper-slide {
          width: 100%;
          height: 1.98rem;
          img {
            width: 100%;
            height: 1.98rem;
          }
        }
      }
    }
    // .swiper4 {
    //   width: 100%;
    //   height: 0.67rem;
    //   // justify-content: space-between;
    //   .swiper4-wrapper {
    //     width: 100%;
    //     height: 0.67rem;
    //     display: flex;
    //     justify-content: space-between;
    //     .swiper-slide {
    //       width: 0.67rem;
    //       height: 0.67rem;
    //       display: flex;
    //       justify-content: space-between;
    //       img {
    //         width: 0.67rem;
    //         height: 0.67rem;
    //       }
    //     }
    //     .act{
    //       border: .01rem solid red;
    //       box-sizing: border-box;
    //     }
    //   }
    // }
  }
}
.swiper4 {
  width: 100%;
  height: 0.67rem;
  // justify-content: space-between;
  .swiper4-wrapper {
    width: 100%;
    height: 0.67rem;
    display: flex;
    justify-content: space-between;
    .swiper-slide {
      width: 0.67rem;
      height: 0.67rem;
      display: flex;
      justify-content: space-between;
      img {
        width: 0.69rem;
        // width: 100%;
        height: 0.64rem;
      }
    }
  }
}
.swiper4 {
  height: 0.67rem;
  box-sizing: border-box;
  padding: 0.05rem 0;
}

.swiper4 .swiper-slide {
  width: 25%;
  height: 100%;
}

.swiper4 .swiper-slide-thumb-active {
  // opacity: 1;
  box-sizing: border-box;
  border: 0.01rem solid #00c6ec;
}

.swiper-slide img {
  display: block;
  width: 100%;
  // height: 100%;
  object-fit: cover;
}
.show {
  width: 3.55rem;
  background: #fff;
  border-radius: 0.05rem;
  overflow: hidden;
  margin: 0.15rem auto;
  .show-header {
    width: 100%;
    height: 0.44rem;
    img {
      width: 100%;
    }
  }
  .show-text {
    padding: 0.1rem 0.05rem 0rem;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.05rem;
      li {
        width: 1.7rem;
        border-radius: 0.06rem;
        overflow: hidden;
        background: #f4f4f4;
        .school-img {
          width: 100%;
          height: 0.9rem;
          img {
            width: 100%;
          }
        }
        .school-text {
          padding: 0 0.17rem 0.1rem 0.05rem;
          .school-name {
            font-family: PingFang-SC-Heavy;
            font-size: 0.17rem;
            font-weight: normal;
            color: #666;
          }
          p {
            font-family: PingFang-SC-Heavy;
            font-size: 0.1rem;
            color: #999;
            line-height: 0.17rem;
            span {
              font-family: PingFang-SC-Heavy;
              font-size: 0.1rem;
              font-weight: normal;
              color: #666;
            }
          }
        }
      }
    }
  }
}
.lun_warp {
  width: 100%;
  height: 1.5rem;
  .lun_con {
    width: 3.75rem;
    height: 1.5rem;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.school {
  width: 3.54rem;
  min-height: 1rem;
  background: #fff;
  margin: 0.15rem auto 0;
  border-radius: 0.05rem 0.05rem 0 0;
  overflow: hidden;
  padding-bottom: 0.01rem;
  border-bottom-right-radius: 0.04rem;
  border-bottom-left-radius: 0.04rem;
  .sch-header {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
    }
  }
  .sch-content {
    width: 100%;
    min-height: 1rem;
    background: #fff;
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 0.1rem;
    .sch-colleage {
      width: 1.65rem;
      height: 0.55rem;
      border-radius: 0.06rem;
      padding: 0.05rem 0 0.05rem 0.05rem;
      display: flex;
      align-items: center;
      border: 0.01rem solid #ccc;
      border-radius: 0.06rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
      span {
        font-size: 0.14rem;
        flex: 1;
        padding: 0 0 0 0.1rem;
        color: rgb(102, 102, 102);
      }
    }
  }
}
</style>