<template>
  <div>
    <div class="lun_warp">
      <div class="lun_con">
        <img :src="urlimg" alt="" />
      </div>
    </div>
    <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页</router-link>
        <span style="color: #999;">>{{$store.state.name}}</span>
      
      </p >
    </div>
    <Video />
    <Show />
    <swiperBanner />
    <Age />
    <Prospects />
    <Foot />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Show from "@/views/hangkongs/Aviation/show.vue";
import Age from "@/views/hangkongs/Aviation/age.vue";
import Foot from "@/views/homes/foot/index.vue"
import Video from "@/views/hangkongs/video_lun.vue";

import swiperBanner from "@/views/hangkongs/Aviation/swiperbanner.vue";

import Prospects from "@/views/hangkongs/prospects.vue";

import axios from "axios";
export default {
  data(){
    return{
      urlimg: "",
      name:""
    }
  },
  components: {
    Show,
    Age,
    Video,
    swiperBanner,
    Prospects,
    Foot
  },
  mounted(){
    axios.get("/cw", { params: { mod: "list" ,id:this.$route.query.id }}).then((res) => {
      this.urlimg = "//39.105.137.169:9527/"+res.data.nav
    });
    
  },
  computed: {
    ...mapGetters(["Name"]),
    Name() {
      return this.Name;
    }
  },
  watch: {
    Name(newData, oldData) {
     
    }
  },

};
</script>
<style lang="scss" scoped>
.title_warp{
width:100%;
padding:0 .2rem;
margin: .15rem 0;
box-sizing:border-box;
  p{
    width: 3.75rem;
    margin: 0 auto;
    span {
        margin-left: 0.2rem;
        font-size: .14rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: .07rem;
        letter-spacing: 0px;
        color: #888888;
    }
    .hang {
        margin-left: 0.05rem;
        font-family: PingFang-SC-Medium;
        font-size: .14rem;
        font-weight: normal;
        letter-spacing: 0px;
        color: #b0b0b0;
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
    padding-bottom: .1rem;
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