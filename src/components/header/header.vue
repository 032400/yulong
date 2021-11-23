<template>
  <div class="wrap ">
    <div class="inp">
      <span class="spn">欢迎来到紧缺应用技术技能型人才职业教育报考平台</span>
      <header2 style="top:.3rem" />
    </div>
    
    </div>
  
</template>

<script>
import header2 from '@/components/header/header2.vue'
export default {
  components:{
    header2
  },
 data(){
     return {
         isloading:false,
     }
 },
 methods:{
     btn(){
        if(this.isloading==true){
          this.isloading=false
        }else{
          this.isloading=true
        }
     },
     scroll(){
        if(this.isloading==true){
          this.isloading=false
        }
     }
 },
 mounted(){
     this.scrollHanle = this.scroll.bind(this)  
     window.addEventListener('scroll',this.scrollHanle)
  },
  destroyed() {
    window.removeEventListener("scroll",this.scrollHanle)
  },
 watch:{
   $route:{
     handler(){
        if(this.isloading==true){
          this.isloading=false
        }
     },
     immediate:true
   }
 },
};
</script>

<style lang="scss" scoped>

.wrap{
    position: fixed;
    left: 50%;
    top: 0;
    transform: translate(-50%,0);
    z-index: 9999;
}
.inp {
  width: 3.75rem;
  margin: 0 auto;
  height: 0.3rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  .spn {
    height: 0.12rem;
    
    font-family: PingFang-SC-Medium;
    font-size: 0.12rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0rem;
    color: #777777;
    padding-left: 0.13rem;
  }
}

.logo_body {
  width: 3.75rem;
  height: 0.49rem;
  margin: 0 auto;

  background: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    box-sizing: border-box;
    img {
      width: 1.03rem;
      height: 0.29rem;
      padding: 0.1rem 0.1rem;
    }
  }
  .menu {
    position: relative;
    padding: 0.15rem;

    img {
      width: 0.3rem;
      height: 0.22rem;
    }
    .txt{
        width: 1.5rem;
        background:#fff;
        z-index: 2;
        position: absolute;
        right: 0;
        top: .38rem;
        height: 0;
        transition: all 0.3s linear;
        z-index: 3;
        overflow: hidden;
        p{
          height: .40rem;
          text-align: center;
          line-height: .4rem;
        }
    }
    .act{
      height: 4.4rem;
    }
    .quan{
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: 2;
    }
  }
}


</style>