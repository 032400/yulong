<template>
  <div>
    <div class="int_con">
      <img :src="url+img[0]" />
    </div>
    <Pages />

    <All />
    <!-- {{list.product_text}} -->

    <div v-html="list.product_text"></div>
  </div>
</template>
<script>
import Pages from "@/components/page/index.vue";
import All from "@/views/sichuan/fours/fourall.vue";
import axios from 'axios'
export default {
  components: {
    Pages,
    All,
  },
  data(){
    return {
      list:[],
      url:"http://39.105.137.169:9527/",
      img:''
    }
  },
  methods:{
    
  },
  mounted(){
   axios.get("/cw", { params: { mod: "center" } }).then((res) => {
      console.log(res);
      this.list = res.data[0]
      this.img = res.data[0].product_album.split(',')
    });
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
</style>