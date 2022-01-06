<template>
  <div class="video_warp">
    <div class="video_con">
      <div class="swiper-container" id="swiper_con">
        <div
          class="swiper-wrapper"
          id="swiper_warp"
          style="background-color: #fdfafa"
        >
          <div
            class="swiper-slide"
            id="slide"
            v-for="item in listimg"
            :key="item.id"
          >
            <router-link  :to="{path:'/videos',query:{cid:item.sp_id}}"
              ><img :src="url+item.sp_logo" alt=""
            /></router-link>
            <router-link :to="{path:'/videos',query:{cid:item.sp_id}}"
              ><img :src="url+item.sp_poster" alt=""
            /></router-link>
          </div>
        </div>
        <img
          class="swiper-button-prev"
          :src="leftimg"
          @click="leftSide"
          alt=""
        />
        <img
          class="swiper-button-next"
          :src="rightimg"
          @click="rightSide"
          alt=""
        />
        <div class="swiper-pagination" style="bottom: 0"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      url: "http://39.105.137.169:9527/",
      listimg: [
        
      ],
      leftimg: require("@/assets/img/公共/首页改1_10.gif"),
      rightimg: require("@/assets/img/公共/未标题-1_03.gif"),
    };
  },
  methods: {
    leftSide() {
      this.leftimg = require("@/assets/img/航空学院/题-1_03.png");
      this.rightimg = require("@/assets/img/公共/未标题-1_03.gif");
    },
    rightSide() {
      this.rightimg = require("@/assets/img/航空学院/未标题-1_03.png");
      this.leftimg = require("@/assets/img/公共/首页改1_10.gif");
    },
  },
  mounted() {
    new Swiper("#swiper_con", {
      loop: true, // 循环模式选项
      autoplay: true, //自动播放
      lazyLoading: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      spaceBetween: 0,
      observer: true, // 启动动态检查器(OB/观众/观看者)
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      loopAdditionalSlides: 5,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    axios.get("/cw", { params: { mod: "shipin",id:this.$route.query.id } }).then((res)=>{
      console.log(res);
      this.listimg=res.data
    });
  },
};
</script>
<style lang="scss" scoped>
.video_warp {
  width: 100%;
  height: auto;
  .video_con {
    padding: 0 0.1rem;
    .swiper-container {
      width: 3.55rem;
      height: 1.29rem;
      #swiper_warp {
        width: 100%;
        height: 1.07rem;
        border-radius: 0.05rem;
        background-color: #fdfafa;
        #slide {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: #fdfafa;
          img {
            width: 1.7rem;
            height: 0.97rem;
            border-radius: 0.05rem;
            position: relative;
          }
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 0.27rem;
      height: 0.27rem;
    }
    .swiper-pagination {
      --swiper-theme-color: #00c6ec;
      .swiper-pagination-bullet {
        width: 0.11rem;
        height: 0.11rem;
      }
    }
  }
}
.video-img {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background-size: 100%;
  cursor: pointer;
  img {
    display: block;
    width: 60px;
    height: 60px;
    position: relative;
    top: 260px;
    left: 48%;
  }
}
</style>



