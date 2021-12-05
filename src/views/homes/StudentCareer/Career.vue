<template>
  <div class="wrap">
    <div class="main">
      <div class="header">
        <img src="@/assets/img/shouye/首页改1_85.gif" alt />
      </div>
      <div class="tabs">
        <span
          v-for="item in text"
          :key="item.class_id"
          @click="handleClick(item)"
          :class="{ active: current == item.class_id }"
        >{{ item.class_name }}</span>
      </div>
      <div class="list">
        <ul v-for="item in text" :key="item.class_id" v-if="current == item.class_id">
          <li v-for="(title , index) in ll" :key="index">
            <span class="text">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt
              />
              {{ title.article_name }}
            </span>
            <span class="time">{{formatTime(title.article_atime)}}</span>
          </li>
        </ul>
        <!-- v-if="current == list.jiuye.class_id" -->
        <ul v-if="!ll.length">
          <li v-for="(item, index) in list.first_show" :key="index">
            <span class="text">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              {{ item.article_name }}
            </span>
            <span class="time">{{formatTime(item.article_atime)}}</span>
          </li>
        </ul>
      </div>
      <div class="information_con_btm" @touchstart="seet()" @touchend="sett()">
        <img :src="setimg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import moment from 'moment'

export default {
  name: "career",
  data() {
    return {
      current: "", //默认选中第一个tab
      list: [
       
      ],
      setimg: require("@/assets/img/公共/首页_06.jpg"),
      text:[],
      url: "http://39.105.137.169:9527/",
      ll:[]
    };
  },
   methods: {
    //点击的时候改变current
    handleClick(item) {
      this.current = item.class_id;
      this.hander()

    },
    seet() {
      this.setimg = require("@/assets/img/公共/首页_03.jpg");
    },
    sett() {
      this.setimg = require("@/assets/img/公共/首页_06.jpg");
    },
    hander(){
       axios.get("/cw", { params: { mod: "gonews",cid:this.current} }).then((res)=>{
      console.log(res);
      this.ll=res.data

      })
    },
    formatTime(value) {
      const time = "YYYY.MM.DD";
      return moment(value * 1000).format(time);
    },
  },
 mounted(){
    axios.get("/cw", { params: { mod: "news" } }).then((res)=>{
      console.log(res.data);
      this.list = res.data
      this.text = res.data.jiuye;
    })
    

  },
 
  created() {},
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.14rem;
}
body {
  background: #eaeaea;
}
.wrap {
  display: flex;
  justify-content: center;
  background: #eaeaea;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  .main {
    width: 3.55rem;
    height: 5.36rem;
    background-color: #ffffff;
    box-shadow: 0.01rem 0.02rem 0.02rem 0 rgba(228, 228, 228, 0.51);
    border-radius: 0.05rem;
    overflow: hidden;
    position: relative;
    .header {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 3.55rem;
        height: 0.55rem;
      }
    }
    .tabs {
      width: 3.48rem;
      height: 0.39rem;
      margin: 0 auto;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.05rem;
      border-top-left-radius: 0.15rem;
      border-top-right-radius: 0.15rem;
      overflow: hidden;
      .active {
        background-color: rgb(23, 118, 175);
        color: rgb(211, 224, 235);
      }
      span {
        width: 3.55rem;
        height: 0.39rem;
        text-align: center;
        line-height: 0.39rem;
        background: rgb(194, 194, 194);
        // border-top-left-radius: 0.04rem;
        // border-top-right-radius: 0.04rem;
        color: white;
        z-index: 10;
        // margin-left: 0.02rem;
      }
    }
    .list {
      width: 3.45rem;
      height: 3.78rem;
      border-radius: 0 0 0.06rem 0.06rem;
      border: 0.01rem solid #1776af;
      position: absolute;
      top: 0.79rem;
      left: 0.04rem;
      ul {
        width: 3.36rem;
        height: 3.2rem;
        display: flex;
        flex-direction: column;
        margin-top: 0.42rem;
        li {
          // width: 3.36rem;
          height: 0.15rem;
          border-bottom: 0.01rem solid #ccc;
          margin-left: 0.04rem;
          margin-top: 0.2rem;

          .text {
            width: 2.3rem;
            height: 0.15rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            line-height: 0.12rem;
            letter-spacing: 0;
            color: #333333;
            float: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .time {
            width: 0.74rem;
            height: 0.11rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            line-height: 0.12rem;
            letter-spacing: 0;
            color: #999999;
            float: right;
          }
        }
        li:nth-child(1) {
          margin-top: 0rem;
        }
      }
    }
    .information_con_btm {
      width: 3.31rem;
      height: 0.44rem;
      position: absolute;
      bottom: 0.25rem;
      left: 0.12rem;
      // padding: .15rem .12rem .25rem .12rem;
      img {
        width: 3.31rem;
        height: 0.44rem;
      }
    }
    .footer {
      width: 3.31rem;
      height: 0.44rem;
      position: absolute;
      bottom: 0.25rem;
      left: 0.12rem;
      img {
        width: 3.31rem;
        height: 0.44rem;
      }
    }
  }
}
</style>
