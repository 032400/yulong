<template>
  <div class="foot">
    <div class="school">
      <div class="sch-header">
        <img src="@/assets/img/shouye/国际航空服务与管理_99.jpg" alt="" />
      </div>
      <div class="sch-content">
        <div class="sch-colleage" v-for="item in hezuo" :key="item.je_id">
          <img :src="url+item.je_imgs" alt="" />
          <span>{{ item.je_names }}</span>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      hezuo:[],
      url: "http://39.105.137.169:9527/",
    };
  },
   mounted(){
    axios.get("/cw", { params: { mod: "hezuo" } }).then((res)=>{
      console.log(res);
      this.hezuo = res.data;

    })
  },
 
};
</script>
<style lang='scss' scoped>

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
    flex-wrap: wrap;
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
        padding: 0 0 0 .1rem;
        color: rgb(102, 102, 102);
      }
    }
  }

}

</style>
