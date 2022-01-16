<template>
  <div>
    <div class="int_con">
      <!-- <img :src="url+img[1]" /> -->
    </div>
    <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页</router-link>
        <router-link  to="" tag="span">
            <span style="color: #999;">>{{name}}</span>
        </router-link>
      </p >
    </div>

    <All />
    

    
  </div>
</template>
<script>
// import Pages from "@/components/page/index.vue";
import All from "@/views/sichuan/fours/fourall.vue";
import axios from 'axios'
export default {
  components: {
    // Pages,
    All,
  },
  data(){
    return {
      
      url:"http://39.105.137.169:9527/",
      img:'',
      name:''
    }
  },
  methods:{
    
  },
  mounted(){
  //  axios.get("/cw", { params: { mod: "center",gid:this.$route.query.gid } }).then((res) => {
  //     this.img = res.data[0].product_album.split(',')
  //     this.name = res.data[0].product_name
  //   });
  }
};
</script>
<style lang="scss" scoped>
.int_con {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  img {
    width: 3.75rem;
    height: 1.5rem;
  }
}
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
</style>