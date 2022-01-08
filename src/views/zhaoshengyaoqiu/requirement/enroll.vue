<template>
  <div class="enroll">
    <div class="enr-top">
      <img src="@/assets/img/公共/航空院校报名流程图_03.jpg" alt="" />
    </div>
    <div class="enr-conent">
      <div class="conent-box">
        <div class="box-img">
          <img src="@/assets/img/招生要求/招生要求_35.jpg" alt="" />
        </div>
        <p class="box-text">网络在线咨询</p>
      </div>
      <div class="conent-box">
        <div class="box-img">
          <img src="@/assets/img/招生要求/招生要求_37.jpg" alt="" />
        </div>
        <p class="box-text">电话沟通确认</p>
      </div>
      <div class="conent-box">
        <div class="box-img">
          <img src="@/assets/img/招生要求/招生要求_39.jpg" alt="" />
        </div>
        <p class="box-text">选择专业 补全信息</p>
      </div>
      <div class="conent-box">
        <div class="box-img">
          <img src="@/assets/img/招生要求/招生要求_44.jpg" alt="" />
        </div>
        <p class="box-text">办理入学手续</p>
      </div>
      <div class="conent-box">
        <div class="box-img">
          <img src="@/assets/img/招生要求/招生要求_45.jpg" alt="" />
        </div>
        <p class="box-text">学院基础素质测试</p>
      </div>
      <div class="conent-box">
        <div class="box-img">
          <img src="@/assets/img/招生要求/招生要求_46.jpg" alt="" />
        </div>
        <p class="box-text">现场信息确认</p>
      </div>
    </div>
    <div class="information_con_btm" @touchstart="seet()" @touchend="sett()">
      <img :src="setimg" alt="" />
    </div>
    <img src="@/assets/img/招生要求/招生要求_42.jpg" class="tu1" />
    <img src="@/assets/img/招生要求/招生要求_42.jpg" class="tu2" />
    <img
      src="@/assets/img/招生要求/招生要求_49.jpg"
      style="height: 0.2rem; width: 0.15rem"
      class="tu3"
    />
    <img src="@/assets/img/招生要求/招生要求_56.jpg" class="tu4" />
    <img src="@/assets/img/招生要求/招生要求_56.jpg" class="tu5" />
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      setimg: require("@/assets/img/公共/航空专业详情页_04.jpg"),
    };
  },
  methods: {
    seet() {
      this.setimg = require("@/assets/img/公共/首页_03.jpg");
    },
    sett() {
      this.setimg = require("@/assets/img/公共/首页_06.jpg");
    },
  },
};
</script>

<style lang='scss' scoped>
.enroll {
  width: 3.55rem;
  margin: 0 auto;
  background: #fff;
  position: relative;
  padding-bottom: .01rem;
  .enr-top {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .enr-conent {
    width: 100%;
    height: 1.9rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .conent-box {
      width: 33%;
      height: 0.95rem;
      // background: red;
      .box-img {
        width: 0.5rem;
        height: 0.5rem;
        padding: 0.2rem 0 0 0;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .box-text {
        text-align: center;
        padding: 0.05rem 0 0 0;
        font-size: 0.11rem;
      }
    }
  }
  .information_con_btm {
          margin: .18rem;
          text-align: center;
          img {
            width: .24rem;
            
          }
  }
  img {
    width: 0.2rem;
    height: 0.15rem;
  }
  .tu1 {
    position: absolute;
    left: 1.04rem;
    top: 0.9rem;
  }
  .tu2 {
    position: absolute;
    left: 2.3rem;
    top: 0.9rem;
  }
  .tu3 {
    position: absolute;
    left: 2.9rem;
    top: 1.5rem;
  }
  .tu4 {
    position: absolute;
    left: 2.3rem;
    top: 1.85rem;
  }
  .tu5 {
    position: absolute;
    left: 1.04rem;
    top: 1.85rem;
  }
}
</style>
