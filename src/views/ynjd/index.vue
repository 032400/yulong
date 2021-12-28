<template>
  <div class="signup_warp">
    <div class="avi_nav">
      <p>
        <span>当前位置：</span>
        <router-link to="/"> <span id="shou">首页 > </span></router-link>
        <span>疑难解答</span>
      </p>
    </div>
    <div class="information_warp">
      <div class="information_con">
        <div class="information_con_top">
          <img src="@/assets/img/公共/疑难解答_03.jpg" alt="" />
        </div>
        <div class="information_con_cen">
        <ul class="btm_list">
          <li v-for="(item,index) in listWen" :key="index.article_clicknum">
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              {{item.article_name}}</a
            >
            
            <p>{{formatTime(item.article_atime)}}</p>
          </li>
         
        </ul>
      </div>
        <div class="information_con_btm" @touchstart="seet()" @touchend="sett()">
        <img :src="setimg" alt="" />
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import Information from "@/views/homes/hottopics/Information.vue";
import moment from 'moment'
import axios from "axios"
export default {
  components: {
    Information,
  },
   data() {
    return {
     listWen:[],
      url: "http://39.105.137.169:9527/",
      setimg: require("@/assets/img/公共/首页_06.jpg"),
    };
  },
  methods: {
    seet() {
      this.setimg = require("@/assets/img/公共/首页_03.jpg");
    },
    sett() {
      this.setimg = require("@/assets/img/公共/首页_06.jpg");
    },
     formatTime(value) {
      const time = "YYYY.MM.DD";
      return moment(value * 1000).format(time);
    },
  },
   mounted(){
    axios.get("/cw", { params: { mod: "news" } }).then((res)=>{
      // console.log(res);
      this.listWen = res.data.wen;
    })
  },

};
</script>
<style lang="scss" scoped>
.signup_warp {
  width: 3.75rem;
  background: #eaeaea;
  .avi_nav {
    width: 3.75rem;
    height: 0.44rem;
    background: #fff;
    margin-bottom: 0.1rem;
    p {
      line-height: 0.44rem;
      margin-left: 0.2rem;
      color: #888;
      font-size: 0.14rem;
      span:nth-child(3) {
        margin: 0 0.03rem;
      }
      #shou {
        color: #888;
      }
    }
  }
}
.information_warp {
  width: 100%;
  height: auto;
  min-width: 3.56rem;
  background: #eaeaea;
  .information_con {
    width: 3.55rem;
    height: 100%;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 0.05rem;
    .information_con_top {
      width: 100%;
      height: 0.55rem;
      // padding-top: 0.02rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .information_con_cen {
      width: 100%;
      height: 100%;
      .btm_list {
        width: 3.56rem;
        height: 100%;
        li {
          padding: 0.2rem 0.05rem 0 0.07rem;
          border-bottom: 1px solid #ccc;
          overflow: hidden;
          a {
            float: left;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #333333;
            width: 2.41rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          p {
            float: right;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #999999;
            margin-bottom: 0;
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
</style>
