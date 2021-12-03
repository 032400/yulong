<template>
  <div class="information_warp">
    <div class="information_con">
      <div class="information_con_top">
        <img src="@/assets/img/shouye/首页改1_78.gif" alt="" />
      </div>
      <div class="information_con_cen">
        <ul class="btm_list">
          <li>
            <router-link to="/message">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              39岁的小伙子,就发生了发颤,怎...
            </router-link>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              市北市民留言咨询这些问题,官...
            </a>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              美供应链受阻问题雪上加霜
            </a>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              篮网有能力解决他们的问题度...
            </a>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              记者实测快递企业智能客服:回...
            </a>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              养老金有哪些渠道可以获得?有...
            </a>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              怎么样买保险才是最合理的?咱...
            </a>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              全面建成小康社会的重要举措...
            </a>
            <p>2021.10.15</p>
          </li>
          <li>
            <a href="#">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              摩根士丹利重磅报告:中国经济...
            </a>
            <p>2021.10.15</p>
          </li>
        </ul>
      </div>
      <div class="information_con_btm" @touchstart="seet()" @touchend="sett()">
        <img :src="setimg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setimg: require("@/assets/img/公共/首页_06.jpg"),
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

<style lang="scss" scoped>
.information_warp {
  width: 100%;
  height: auto;
  min-width: 3.56rem;
  background: #eaeaea;
  .information_con {
    width: 3.55rem;
    height: 100%;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 0.05rem;
    .information_con_top {
      width: 100%;
      height: 0.55rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .information_con_cen {
      width: 100%;
      height: 100%;
      .btm_list {
        width: 3.56rem;
        height: 100%;
        li {
          padding: 0.2rem 0.05rem 0 0.07rem;
          border-bottom: 1px solid #ccc;
          overflow: hidden;
          a {
            float: left;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #333333;
            width: 2.41rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          p {
            float: right;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #999999;
            margin-bottom: 0;
          }
        }
      }
    }
    .information_con_btm {
      padding: 0.15rem 0.12rem 0.25rem 0.12rem;
      img {
        width: 3.31rem;
        height: 0.44rem;
      }
    }
  }
}
</style>