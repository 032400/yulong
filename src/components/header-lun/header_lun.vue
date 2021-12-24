<template>
  <div class="swiper">
    <div class="swiper-container" id="swiperOne">
      <!-- <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in img" :key="index">
          <router-link :to="item.name">
            <img :src="item.pic" />
          </router-link>
        </div>
      </div> -->

      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <router-link :to="{ path: item.ad_url,query:{id:item.category_id} }">
            <img :src="url + item.ad_logo" />
          </router-link>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" style="color: #00f0ff"></div>
      <img
        class="swiper-button-prev"
        id="one"
        :src="leftimg"
        @click="left"
        alt=""
      />
      <img
        class="swiper-button-next"
        id="two"
        :src="rightimg"
        @click="right"
        alt=""
      />
    </div>
  </div>
</template>
<script>
//引入swiper
import axios from "axios";
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      img: [
        { pic: require("@/assets/img/shouye/首页.png"), name: "/hangkong" },
        { pic: require("@/assets/img/shouye/首页轮播1.png"), name: "/gaotie" },
        { pic: require("@/assets/img/shouye/首页轮播2.png"), name: "/youlun" },
      ],
      imgs: [],
      url: "http://39.105.137.169:9527/",
      leftimg: require("@/assets/img/公共/首页改1_10.gif"),
      rightimg: require("@/assets/img/公共/未标题-1_03.gif"),
    };
  },
  mounted() {
    var mySwiper = new Swiper("#swiperOne", {
      loop: true, // 循环模式选项
      lazyLoading: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      spaceBetween: 0,
      observer: true, // 启动动态检查器(OB/观众/观看者)
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      loopAdditionalSlides: 4,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    axios.get("/cw", { params: { mod: "bran" } }).then((res) => {
      // console.log(1111,res)
      this.imgs = res.data;
    });
  },
  methods: {
    left() {
      this.leftimg = require("@/assets/img/公共/左.png");
      this.rightimg = require("@/assets/img/公共/未标题-1_03.gif");
    },
    right() {
      this.leftimg = require("@/assets/img/公共/首页改1_10.gif");
      this.rightimg = require("@/assets/img/公共/首页改1_13.gif");
    },
  },
};
</script>
<style  lang="scss" scoped>
.swiper {
  position: relative;
  width: 3.75rem;
  margin: 0 auto;
  height: 1.5rem;
}
.swiper-slide img {
  width: 3.75rem;
  height: 1.5rem;
  vertical-align: left;
}
#one {
  position: absolute;
  width: 0.32rem;
  height: 0.31rem;
  top: 55%;
  left: 0.2rem;
  z-index: 999;
  opacity: 0.7;
}

#two {
  position: absolute;
  width: 0.32rem;
  height: 0.31rem;
  right: 0.2rem;
  left: 3.2rem;
  opacity: 0.7;
  top: 55%;
  z-index: 999;
}
.swiper-pagination {
  --swiper-theme-color: #00f0ff;
}
</style>