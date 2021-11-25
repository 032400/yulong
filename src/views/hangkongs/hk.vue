<template>
  <div>
    <div class="lun_warp">
      <div class="lun_con">
        <img src="@/assets/img/航空学院/航空专业.jpg" alt="" />
      </div>
    </div>
    <page />
    <Video />
    <Show />
    <swiperBanner />
    <Age />
    <Prospects />
    <div class="foot">
      <div class="school">
        <div class="sch-header">
          <img src="@/assets/img/shouye/国际航空服务与管理_99.jpg" alt="" />
        </div>
        <div class="sch-content">
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_40.gif" alt="" />
            <span>北京市航空中学</span>
          </div>
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_37.gif" alt="" />
            <span>吉林大学</span>
          </div>
          <div class="sch-colleage" style="margin: 0.08rem 0">
            <img src="@/assets/img/公共/首页改1_44.gif" alt="" />
            <span>大连海事大学</span>
          </div>
          <div class="sch-colleage" style="margin: 0.08rem 0">
            <img src="@/assets/img/公共/首页改1_46.gif" alt="" />
            <span>渤海大学</span>
          </div>
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_50.gif" alt="" />
            <span>山东杏林航空大学</span>
          </div>
          <div class="sch-colleage">
            <img src="@/assets/img/公共/首页改1_52.gif" alt="" />
            <span>南京市航空大学</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Show from "@/views/hangkongs/Aviation/show.vue";
import Age from "@/views/hangkongs/Aviation/age.vue";
import page from "@/components/page/index.vue";

import Video from "@/views/hangkongs/video_lun.vue";

import swiperBanner from "@/views/hangkongs/Aviation/swiperbanner.vue";

import Prospects from "@/views/hangkongs/prospects.vue";

export default {
  components: {
    Show,
    Age,
    Video,
    swiperBanner,
    Prospects,
    page,
  },
};
</script>
<style lang="scss" scoped>
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