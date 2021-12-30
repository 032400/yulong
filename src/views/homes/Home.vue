<template>
  <div>
    <HeaderLun />
    <page />
    <major />
    <div style="margin: 0.15rem auto; width: 3.55rem">
      <aviation />
    </div>
    <HotTopics />
    <Information />
    <!-- <Career /> -->
    <changjianwenti />
    <Five />
    <foot />
    <div class="bei">
      <p>
        <img src="@/assets/img/公共/未标题-1_03.png" alt="">
        京公网安备 154545178722号</p>
      <a href="https://beian.miit.gov.cn" >京ICP备2021039448号-1</a>
     
    </div>
  </div>
</template>
<script>
import HeaderLun from "@/components/header-lun/header_lun.vue";

import page from "@/components/page/index.vue";
import major from "@/views/homes/major/major.vue";
import aviation from "@/views/homes/major/aviation.vue";

import HotTopics from "@/views/homes/hottopics/HotTopics.vue";
import Information from "@/views/homes/hottopics/Information.vue";
import changjianwenti from "@/views/homes/hottopics/changjianwenti.vue";
// import Career from "@/views/homes/StudentCareer/Career.vue";
import Five from "@/views/homes/Five/index.vue";

import foot from "@/views/homes/foot/index.vue";

export default {
  components: {
    HeaderLun,
    changjianwenti,
    page,
    major,
    aviation,
    HotTopics,
    Information,
    // Career,
    Five,
    foot,
  },
};
</script>

<style lang='scss' scoped>
a{
  text-decoration: none;
  color:#333;
}
.bei{
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#333;
  font-size: .12rem;
  background: #fff;
}
</style>
