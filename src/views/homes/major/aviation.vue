<template>
  <div class="aviation">
    <div class="aviation-header">
      <img src="@/assets/img/shouye/首页改1_33.gif" alt="" />
    </div>
    <div class="aviation-content">
      <ul>
        <li v-for="(item,index) in listText" :key="index">
          <router-link :to="{path:'/sichuan',query:{gid:item.product_id}}">
          <div class="content-img">
            <img :src="url+item.product_logo" alt="" />
          </div>
          <div class="content-text">
            <p>{{ item.product_name }}</p>
          </div>
          
          </router-link>
          
        </li>
        
      </ul>
     
      
      
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      listText:[],
      url: "http://39.105.137.169:9527/",
    };
  },
  mounted(){
    axios.get("/cw", { params: { mod: "list" } }).then((res)=>{
      console.log(res)
      this.listText = res.data.list;
    })
    
  },
  methods: {
    Xiangqing(index){
      console.log(this.listText[index].article_text)
      this.$store.commit('Xiangqing',this.listText[index].article_text)
    },
    seet() {
      this.setimg = "";
    },
    sett() {
      this.setimg ="";
    },
    formatTime(value) {
      const time = "YYYY.MM.DD";
      return moment(value * 1000).format(time);
    },
  },
};
</script>

<style lang="scss" scoped>
.aviation {
  width: 3.55rem;
  height: 2.89rem;
  background: #fff;
  border-radius: 0.05rem;
  overflow: hidden;
  // margin: 0.15rem auto;
  // box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  .aviation-header {
    width: 100%;
    height: 0.55rem;
    // background: #fff;
    img {
      width: 100%;
    }
  }
  .aviation-content {
    padding: 0.1rem 0.03rem 0.08rem 0.03rem;
    box-sizing: border-box;
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 1.71rem;
        height: 0.67rem;
        background: #fff;
        border-radius: 0.06rem;
        overflow: hidden;
        float: left;
        border: 0.01rem solid #ccc;
        border-radius: 0.06rem;
        .content-img {
          height: 0.4rem;
          width: 0.4rem;
          margin: 0.14rem 0.11rem 0.13rem 0.09rem;
          float: left;
          img {
            width: .5rem;
            height: auto;
          }
        }
        .content-text {
          width: 0.84rem;
          height: 0.36rem;
          font-family: PingFang-SC-Medium;
          font-size: 0.16rem;
          color: #666666;
          float: left;
          margin: 0.15rem 0.27rem 0.16rem 0;
          display: flex;
          align-items: center;
        }
      }
    }
    ul:nth-child(-n + 2) {
      margin-bottom: 0.09rem;
    }
  }
}
</style>