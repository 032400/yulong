/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div class="actt">
    <div class="logo_body">
      <router-link to="/" tag="div" class="logo">
        <img src="@/assets/img/公共/首页改1_03.gif" alt="" />
      </router-link>
      <div class="menu">
        <img @click="btn()" src="@/assets/img/公共/首页改1_05.gif" alt="" />
        <div class="txt" :class="{ act: isloading }" ref="acts">
          <router-link
            tag="p"
            to="/"
            style="
              background-color: #0865a7;
              font-weight: normal;
              font-stretch: normal;
              color: #fff;
              font-size: 0.15rem;
            "
            >首页</router-link
          >
          <router-link to="/hangkong" tag="p">航空院校</router-link>
          <div class="title">
            <div class="header" @click="click">
              <router-link to="" tag="span" class="s" style="padding-left:.04rem">热门专业</router-link>
              <a-icon
                ref="icon"
                slot="suffixIcon"
                type="caret-down"
                :rotate="0"
                :class="{ active: isShow, tive: !isShow }"
                style="width: 0.11rem; height: 0.08rem; color: rgb(0, 0, 0)"
              />
              <!--  -->
            </div>
            <div class="bottom" v-show="isShow" ref="bottom">
              <router-link to="/Service" tag="p">VIP地勤专业</router-link>
              <router-link to="/gaotie" tag="p">高铁乘务专业</router-link>
              <router-link to="/youlun" tag="p">游轮海城专业</router-link>
              <router-link to="/kongcheng" tag="p">空乘专业</router-link>
            </div>
          </div>
          <router-link to="/hangkong/chuzhongsheng" tag="p">初中生</router-link>
          <router-link to="/hangkong/gaozhongsheng" tag="p">高中生</router-link>
          <router-link to="/hangkong/sanxiaosheng" tag="p">三校生</router-link>
          <router-link to="/hangkong/yikaosheng" tag="p">艺考生</router-link>
          <router-link to="/zhaoshengyaoqiu" tag="p">招生要求</router-link>
          <router-link to="/zaixianbaoming" tag="p">在线报名</router-link>
          <router-link to="/ynjd" tag="p">疑难解答</router-link>
        </div>
        <div class="quan" v-if="isloading" @click="btn()"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isloading: false,
      isShow: false,
    };
  },
  methods: {
    click() {
      this.isShow = !this.isShow;
     
    },
    btn() {
      if (this.isloading == true) {
        this.isloading = false;
      } else {
        this.isloading = true;
      }
      this.isShow=false
    },
    scroll() {
      if (this.isloading == true) {
        this.isloading = false;
      }
    },
    handleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    },
  },
  mounted() {
    this.scrollHanle = this.scroll.bind(this);
    window.addEventListener("scroll", this.scrollHanle);
    
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHanle);
  },
  watch: {
    $route: {
      handler() {
        if (this.isloading == true) {
          this.isloading = false;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .active {
  transform: rotate(180deg);
  transform-origin: 65% 90%;
}
::v-deep .tive {
  transform: rotate(0deg);
}
.actt {
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  z-index: 9999;
  color: #000;
}
.logo_body {
  width: 3.75rem;
  height: 0.49rem;
  margin: 0 auto;
  // background: blue;

  background: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      width: 1.03rem;
      height: 0.29rem;
      padding: 0.1rem 0.1rem;
    }
  }
  .menu {
    // position: relative;
    padding: 0.15rem;

    img {
      width: 0.3rem;
      height: 0.3rem;
    }
    .txt {
      width: 1.5rem;
      background: #fff;
      z-index: 2;
      position: absolute;
      right: 0;
      top: 0.38rem;
      height: 0;
      transition: all 0.3s linear;
      z-index: 3;
      overflow: hidden;
      p {
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
       
      }
      .title {
        position: relative;
        .header {
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          p {
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
          }
          :hover {
              color: #0869af;
          }
        }
        .bottom {
          position: relative;
          display: none;
          transition: all 0.3s linear;
          height: 0;
          background: #eaeaea;
          p {
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
          }
          :hover{
            color: #0869af;
          }
        }
      }
      :hover {
        .bottom {
          display: block;
          transition: all 0.3s linear;
          height: 1.5rem;
          p {
            background: #eaeaea;
          }
        }
      }
    }
    .act {
      height: auto;
    }
    .quan {
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