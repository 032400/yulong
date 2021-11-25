<template>
  <div class="major" ref="major_header">
    <div class="major-header">
      <img src="@/assets/img/shouye/首页改1_18.gif" alt="" />
    </div>
    <div class="major-content">
      <ul>
        <li>
          <router-link to="/hangkong">
            <img src="@/assets/img/shouye/国际航空服务与管理.png" alt="" />
            </router-link>
        </li>
        <li>
          <img src="@/assets/img/shouye/互联网金融与管理.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shouye/人工智能与机器人.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shouye/网络新媒体运营.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shouye/新能源汽车.png" alt="" />
        </li>
        
       
        
        
        <!-- 添加点击显示图片效果 !-->
         <div ref="lefts" class="left_img">
          <img  src="@/assets/img/shouye/首页0_03_04.jpg" @click="click" alt="" />
        </div>
        <li>
          <router-link to="/Service">
            <img src="@/assets/img/shouye/地勤.png"  alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/gaotie">
            <img src="@/assets/img/shouye/高铁-2.png"  alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/kongcheng">
            <img src="@/assets/img/shouye/航空.png"  alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/youlun">
            <img src="@/assets/img/shouye/游轮.png"  alt="" />
          </router-link>
        </li>
        <div ref="right" class="right_img">
          <img  src="@/assets/img/shouye/首页0_03_04.jpg" @click="clicks()" alt="" />
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      style:'height:auto',
      styles:'height: 6.82rem;'
    }
  },
  methods:{
    click(){
      this.$refs.lefts.style.display='none'
      this.$refs.lefts.style.margin='0'
      this.$refs.major_header.style = this.style
      // console.log(this.$refs.major_header.style.height);
    },
    clicks(){
        this.$refs.lefts.style.display='block'
        this.$refs.lefts.style.margin='0.18rem'
        this.$refs.major_header.style = this.styles
      // console.log(this.$refs.major_header.style.height);
    }
  }
}
</script>
<style lang="scss" scoped>
.major {
  width: 3.55rem;
  // height: 6.4rem;
  height: 6.82rem;
  background: #fff;
  border-radius: 0.1rem;
  overflow: hidden;
  margin: auto;
  box-shadow: 1px 2px 2px 1px rgba(228, 228, 228, 0.76);
  .major-header {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
    }
  }
  .major-content {
    ul {
      li {
        height: 1.05rem;
        width: 3.35rem;
        margin: auto;
        border-radius: 0.1rem;
        overflow: hidden;
        margin-top: 0.1rem;
        img {
          width: 100%;
        }
      }
      .left_img{
          margin: .18rem;
          text-align: center;
          img{
            width: .24rem;
          }
      }
      .right_img{
        margin: .18rem;
          text-align: center;
          img{
            width: .24rem;
            transform: rotate(180deg);
          }
      }
    }
  }
}
</style>