<template>
  <div class="all">
    <div class="all-introduction">
      <div class="introduction-header">
        <img src="@/assets/img/四川外国语大学/四川外国语大学简介_03.jpg" alt="" />
      </div>
      <div class="introduction-text">
        <div class="school-img">
          <img src="@/assets/img/四川外国语大学/学校简介(1)_03.jpg" alt="" />
        </div>
        <div class="school-text">
          <div class="school-more">
            <p><span>所在地区：</span>{{list.product_desc}}</p>
            <p><span>办学特性：</span>{{list.product_adj}}</p>
            <p><span>留学国家：</span>{{list.product_country}}</p>
          </div>
          <div class="details">
            <p>
              <span><i><img src="@/assets/img/四川外国语大学/学校简介_03.jpg" alt="" /></i>学校详情：</span >
             <span v-html="list.product_text"></span> 
            </p>
            <p class="two">
              
              <!-- <router-link to=""> -->
              <span class="look-details">查看详情>></span>
              <!-- <router-link/> -->
            </p>
          </div>
          <div class="advantage">
            <div>
              <span
                ><i><img src="@/assets/img/四川外国语大学/学校简介_06.jpg" alt="" /></i
                >学校优势：</span
              >
              <p>可靠的项目资源</p>
              <p>优质稳定的合作公司</p>
              <p>学分豁免，节省资金</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="all-news">
      <div class="introduction-header">
        <img src="@/assets/img/四川外国语大学/新闻动态_03.jpg" alt="" />
      </div>
      <div class="news-text">
        <ul>
          <li>· 四川外国语大学留学预科有哪些专业?</li>
          <li>· 四川外国语大学留学预科班哪个好?</li>
          <li>· 四川外国语大学德国留学预科可以申请哪些名校?</li>
          <li>· 四川外国语大学西班牙留学预科对接院校有哪些?</li>
          <li>· 四川外国语大学意大利留学预科报考条件?</li>
          <li>· 四川外国语大学小语种留学预科班怎么样?</li>
        </ul>
      </div>
      <div class="information_con_btm" @touchstart="seet()" @touchend="sett()">
        <img :src="setimg" alt="" />
      </div>
    </div>
    <index/>
    <div class="all-environment">
      <div class="introduction-header">
        <img src="@/assets/img/四川外国语大学/校园环境_03.jpg" alt="" />
      </div>
      <ul>
        <li>
          <div>
            <img src="@/assets/img/四川外国语大学/学校简介(1)_22.jpg" alt="" />
          </div>
          <p>四川外国语大学</p>
        </li>
        <li>
          <div>
            <img src="@/assets/img/四川外国语大学/学校简介(1)_24.jpg" alt="" />
          </div>
          <p>四川外国语大学出国留学咋咋咋咋咋咋咋咋咋咋咋咋的</p>
        </li>
      </ul>
      <ul>
        <li>
          <div>
            <img src="@/assets/img/四川外国语大学/学校简介(1)_27.jpg" alt="" />
          </div>
          <p>四川外国语大学出国咋咋咋的</p>
        </li>
        <li>
          <div>
            <img src="@/assets/img/四川外国语大学/学校简介(1)_29.jpg" alt="" />
          </div>
          <p>四川外国语大学出国留学</p>
        </li>
      </ul>
     <div class="information_con_btm" @touchstart="seet1()" @touchend="sett1()">
        <img :src="setimg1" alt="" />
      </div>
    </div>
     
    <div class="all-issue">
      <div class="introduction-header">
        <img src="@/assets/img/四川外国语大学/常见问题_03.jpg" alt="" />
      </div>
      <ul>
        <li>
          <p>四川外国语大学伦敦名校FP精英班怎么样?<span>?</span></p>
          <p>
            答:四川外国语大学出国留学项目的伦敦名校FP精英班采用的是,学生完成—年的模科课程后,再转入到国外合作大学
          </p>
        </li>
        <li>
          <p>四川外国语大学伦敦名校FP精英班怎么样?<span>?</span></p>
          <p>
            答:四川外国语大学出国留学项目的伦敦名校FP精英班采用的是,学生完成—年的模科课程后,再转入到国外合作大学
          </p>
        </li>
        <li>
          <p>四川外国语大学伦敦名校FP精英班怎么样?<span>?</span></p>
          <p>
            答:四川外国语大学出国留学项目的伦敦名校FP精英班采用的是,学生完成—年的模科课程后,再转入到国外合作大学
          </p>
        </li>
        <li>
          <p>四川外国语大学伦敦名校FP精英班怎么样?<span>?</span></p>
          <p>
            答:四川外国语大学出国留学项目的伦敦名校FP精英班采用的是,学生完成—年的模科课程后,再转入到国外合作大学
          </p>
        </li>
      </ul>
     <div class="information_con_btm" @touchstart="seet2()" @touchend="sett2()">
        <img :src="setimg2" alt="" />
      </div>
    </div>
    <indexT/>
    <div class="foot">
      <p>报名资讯电话：8948956415</p>
      <p>煜龙时空</p>
    </div>
  </div>
</template>
<script>
import indexT from '@/views/sichuan/index.vue'
import index from '@/views/sichuan/index1.vue'
import axios from 'axios'
export default {
  components:{
    indexT,
    index
  },
   data() {
    return {
      setimg: require("@/assets/img/公共/首页_06.jpg"),
      setimg1: require("@/assets/img/公共/首页_06.jpg"),
      setimg2: require("@/assets/img/公共/首页_06.jpg"),
       list:[],
      url:"http://39.105.137.169:9527/",
      img:''
    };
  },
  methods: {
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
    seet2() {
      this.setimg2 = require("@/assets/img/公共/首页_03.jpg");
    },
    sett2() {
      this.setimg2 = require("@/assets/img/公共/首页_06.jpg");
    },
  },
  mounted(){
   axios.get("/cw", { params: { mod: "center" } }).then((res) => {
      console.log(res);
      this.list = res.data[0]
      this.img = res.data[0].product_album.split(',')
    });
  }
};
</script>
<style lang="scss" scoped>
.all {
  width: 3.55rem;
  margin: auto;
  .all-introduction {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    padding-bottom: .22rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .introduction-text {
      width: 100%;
      .school-img {
        width: 100%;
    padding: .1rem;
    box-sizing: border-box;
        img {
          width: 100%;
        }
      }
      .school-text {
        padding: 0 0.1rem;
        box-sizing: border-box;
        font-size: .12rem;
        .school-more {
          width: 100%;
          p {
            color: #888;
            span {
              color: #333;
            }
          }
        }
        .details {
          padding: 0.1rem 0;
          line-height: 0.18rem;
          p {
            color: #888;
            font-size: .12rem;
            span {
              color: #333;
              i {
                display: block;
                float: left;
                width: 0.14rem;
                height: 0.14rem;
                padding-right: 0.11rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .look-details {
              color: #e10c0c;
            }
          }
          .two {
            text-indent: 0.24rem;
          }
        }
        .advantage {
          div {
            span {
              color: #333;
              float: left;
              display: block;
              padding-top: .14rem;
              font-size: .12rem;
              i {
                display: block;
                float: left;
                width: 0.12rem;
                height: 0.14rem;
                padding-right: 0.11rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }

            p {
              padding: 0.09rem 0.1rem;
              background: #8dcff4;
              color: #fff;
              float: left;
              margin: 0.09rem 0.1rem 0;
              box-shadow: 0px 0.01rem 0.02rem 0px 
                rgba(0, 0, 0, 0.18);
              border-radius: .01rem;
            }
          }
        }
      }
    }
  }
  .all-news {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    margin-top: 0.1rem;
    padding-bottom: .1rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .news-text {
      padding: 0.1rem 0.1rem .13rem;
      color: #888;
      ul {
        margin-bottom: 0;
        li {
          line-height: 0.25rem;
          width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
  .all-environment {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    margin-top: 0.1rem;
    padding-bottom: 0.05rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    ul {
      padding: 0.1rem 0.1rem 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0rem;
      li {
        width: 1.63rem;
        height: 1.64rem;
        background: rgba(234, 233, 231);
        border-radius: .02rem;
        overflow: hidden;
        color: #888;
        div {
          width: 100%;
          height: 1.35rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 0.12rem;
          padding: 0.05rem;
          box-sizing: content-box;
          text-align: center;
        }
      }
    }
    .information_con_btm {
      height: 0.44rem;
      width: 3.32rem;
      margin: 0.1rem auto 0;
     img {
      width: 3.31rem;
      height: 0.44rem;
    }
    }
  }
  .all-issue {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    ul {
      padding: 0 0.1rem;
      font-size: 0.1rem;
      color: #888;
      li {
        p:nth-child(1) {
          padding: 0.08rem 0;
          span {
            border-radius: 50%;
            color: rgba(98, 154, 243);
            float: right;
            display: block;
            height: 0.11rem;
            width: 0.11rem;
            text-align: center;
            line-height: 0.1rem;
            border: 0.01rem solid;
            margin-top: 0.01rem;
          }
        }
        p:nth-child(2) {
          background: #eaeaea;
          padding: 0.08rem;
          line-height: .15rem;
        }
      }
    }
  }

  .information_con_btm {
    height: 0.44rem;
    width: 3.32rem;
    margin: auto;
    img {
      width: 3.31rem;
      height: 0.44rem;
    }
  }
  .foot {
    font-size: 0.1rem;
    color: #888;
    padding: 0.2rem 0 .1rem;
    text-align: center;
    margin: auto;
  }
}
</style>