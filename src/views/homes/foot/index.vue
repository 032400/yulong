<template>
  <div class="foot">
    <div class="school">
      <div class="sch-header">
        <img src="@/assets/img/shouye/国际航空服务与管理_99.jpg" alt="" />
      </div>
      <div class="swiper-container" id="swiper_con">
      <div class="sch-content swiper-wrapper" 
          id="swiper_warp">
        <div class="sch-colleage swiper-slide" 
            id="slide" v-for="item in hezuo" :key="item.je_id">
            <div></div>
          <img :src="url+item.je_imgs" alt="" />
          <span>{{ item.je_names }}</span>
          
        </div><br/>
        
      </div>
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
      hezuo:[
        
      ],
      url: "http://39.105.137.169:9527/",
    };
  },
   mounted(){
    axios.get("/cw", { params: { mod: "hezuo" } }).then((res)=>{
      console.log(res);
      this.hezuo = res.data;

    })
    new Swiper("#swiper_con", {
       slidesPerView: 2,
        spaceBetween: 5,
      loop: true, // 循环模式选项
      autoplay: true, //自动播放
      lazyLoading: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      // spaceBetween: 0,
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
  },
 methods:{
  
 
 }
};
</script>

<style lang='scss' scoped>
#slide{
  width: 1.65rem !important;
}
.sch-colleage:nth-child(1){
  margin-left: 3.6rem !important;
}
.school {
  width: 3.54rem;
  min-height: 1rem;
  background: #fff;
  margin: 0.15rem auto 0.1rem;
  border-radius: .05rem .05rem 0 0;
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
    padding-bottom: .1rem;
    width: 100%;
    min-height: 1rem;
    background: #fff;
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-around;
    .sch-colleage {
      width: 1.65rem;
      height: 0.55rem;
      border-radius: 0.06rem;
      padding: 0.05rem 0 0.05rem 0.05rem;
      display: flex;
      flex-wrap: wrap;
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
        padding: 0 0 0 .1rem;
        color: rgb(102, 102, 102);
      }
    }
  }

}

</style>
