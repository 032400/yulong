<template>
  <div class="major" ref="major_header">
    <div class="major-header">
      <img src="@/assets/img/shouye/首页改1_18.gif" alt="" />
    </div>
    <div class="major-content">
      <ul>
        <li v-for="(item, index) in image" :key="index">
          <router-link :to="{ path: item.category_url ,params:'category_id'}" >
            <img :src="url + item.category_icon" alt="" />
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/financial">
            <img src="@/assets/img/shouye/互联网金融与管理.png" alt=""/>
          </router-link>
        </li>
        <li>
          <router-link to="/ai">
            <img src="@/assets/img/shouye/人工智能与机器人.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/Network">
          <img src="@/assets/img/shouye/网络新媒体运营.png" alt="" />
           </router-link>
        </li> -->
        <li>
          <router-link to="/Netenergy">
          <img src="@/assets/img/shouye/新能源汽车.png" alt="" />
           </router-link>
        </li>

        <!-- 添加点击显示图片效果 !-->
        <div ref="lefts" class="left_img">
          <img
            src="@/assets/img/shouye/首页0_03_04.jpg"
            @click="click"
            alt=""
          />
        </div>
        <li>
          <router-link to="/Service">
            <img src="@/assets/img/shouye/地勤.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/gaotie">
            <img src="@/assets/img/shouye/高铁-2.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/kongcheng">
            <img src="@/assets/img/shouye/航空.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/youlun">
            <img src="@/assets/img/shouye/游轮.png" alt="" />
          </router-link>
        </li>
        <div ref="right" class="right_img">
          <img
            src="@/assets/img/shouye/首页0_03_04.jpg"
            @click="clicks()"
            alt=""
          />
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      style: "height:auto",
      styles: "height: 6.82rem;",
      image:[],
      url:'http://39.105.137.169:9527/'
    };
  },
  mounted(){
    axios.get("/cw", { params: { mod: "mayjor" } }).then((res)=>{
      console.log(res);
      this.image = res.data;
    })
  },
  methods: {
    click() {
      this.$refs.lefts.style.display = "none";
      this.$refs.lefts.style.margin = "0";
      this.$refs.major_header.style = this.style;
      // console.log(this.$refs.major_header.style.height);
    },
    clicks() {
      this.$refs.lefts.style.display = "block";
      this.$refs.lefts.style.margin = "0.18rem";
      this.$refs.major_header.style = this.styles;
      // console.log(this.$refs.major_header.style.height);
    },
  },
};
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
      .left_img {
        margin: 0.18rem;
        text-align: center;
        img {
          width: 0.24rem;
        }
      }
      .right_img {
        margin: 0.18rem;
        text-align: center;
        img {
          width: 0.24rem;
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>