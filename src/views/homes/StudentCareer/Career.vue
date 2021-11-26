<template>
  <div class="wrap">
    <div class="main">
      <div class="header">
        <img src="@/assets/img/shouye/首页改1_85.gif" alt="" />
      </div>
      <div class="tabs">
        <span
          v-for="item in student"
          :key="item.type"
          @click="handleClick(item)"
          :class="{ active: item.type == current }"
        >
          {{ item.name }}
        </span>
      </div>
      <div class="list">
        <ul v-if="current == '0'">
          <li v-for="(item, index) in list" :key="index">
            <span class="text">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              {{ item }}
            </span>
            <span class="time">2021.10.15</span>
          </li>
        </ul>
        <ul v-if="current == '1'">
          <li v-for="(item, index) in list" :key="index">
            <span class="text">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              {{ item }}
            </span>
            <span class="time">2021.10.15</span>
          </li>
        </ul>
        <ul v-if="current == '2'">
          <li v-for="(item, index) in list" :key="index">
            <span class="text">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              {{ item }}
            </span>
            <span class="time">2021.10.15</span>
          </li>
        </ul>
        <ul v-if="current == '3'">
          <li v-for="(item, index) in list" :key="index">
            <span class="text">
              <img
                style="width: 0.16rem; padding-bottom: 0.02rem"
                src="@/assets/img/shouye/首页_03.jpg"
                alt=""
              />
              {{ item }}
            </span>
            <span class="time">2021.10.15</span>
          </li>
        </ul>
      </div>
      <div class="information_con_btm">
        <div class="btm_border">
          <span>查看更多资讯</span>
          <img src="@/assets/img/公共/sou.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const student = [
  {
    name: "初中生",
    type: "0",
  },
  {
    name: "高中生",
    type: "1",
  },
  {
    name: "三校生",
    type: "2",
  },
  {
    name: "艺考生",
    type: "3",
  },
];
export default {
  name: "career",
  data() {
    return {
      student,
      current: "0", //默认选中第一个tab
      list: [
        "39岁的小伙子,就发生了发颤,怎么",
        "市北市民留言咨询这些问题,官方",
        "美供应链受阻问题雪上加霜",
        "篮网有能力解决他们的问题度,你",
        "记者实测快速企业智能客服:回复",
        "养老金有哪些渠道可以获得?有说明",
        "怎么样买保险才是最合理的?咱们",
        "全面建成小康社会的重要举措你们慢慢",
        "摩根士丹利重磅报告:中国经济措施",
      ],
    };
  },
  methods: {
    //点击的时候改变current
    handleClick(item) {
      this.current = item.type;
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.14rem;
}
body {
  background: #eaeaea;
}
.wrap {
  display: flex;
  justify-content: center;
  background: #eaeaea;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  .main {
    width: 3.55rem;
    height: 5.36rem;
    background-color: #ffffff;
    box-shadow: 0.01rem 0.02rem 0.02rem 0 rgba(228, 228, 228, 0.51);
    border-radius: 0.05rem;
    overflow: hidden;
    position: relative;
    .header {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 3.55rem;
        height: 0.55rem;
      }
    }
    .tabs {
      width: 3.48rem;
      height: 0.39rem;
      margin: 0 auto;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.05rem;
      border-top-left-radius: 0.15rem;
      border-top-right-radius: 0.15rem;
      overflow: hidden;
      .active {
        background-color: rgb(23, 118, 175);
        color: rgb(211, 224, 235);
      }
      span {
        width: 3.55rem;
        height: 0.39rem;
        text-align: center;
        line-height: 0.39rem;
        background: rgb(194, 194, 194);
        // border-top-left-radius: 0.04rem;
        // border-top-right-radius: 0.04rem;
        color: white;
        z-index: 10;
        // margin-left: 0.02rem;
      }
    }
    .list {
      width: 3.45rem;
      height: 3.78rem;
      border-radius: 0 0 0.06rem 0.06rem;
      border: 0.01rem solid #1776af;
      position: absolute;
      top: 0.79rem;
      left: 0.04rem;
      ul {
        width: 3.36rem;
        height: 3.2rem;
        display: flex;
        flex-direction: column;
        margin-top: 0.42rem;
        li {
          //   width: 3.36rem;
          height: 0.15rem;
          border-bottom: 0.01rem solid #ccc;
          margin-left: 0.04rem;
          margin-top: 0.2rem;
          .text {
            // width: 1.76rem;
            height: 0.15rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            line-height: 0.12rem;
            letter-spacing: 0;
            color: #333333;
            float: left;
          }
          .time {
            width: 0.74rem;
            height: 0.11rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            line-height: 0.12rem;
            letter-spacing: 0;
            color: #999999;
            float: right;
          }
        }
        li:nth-child(1) {
          margin-top: 0rem;
        }
      }
    }
    .information_con_btm {
      width: 3.31rem;
      height: 0.44rem;
      position: absolute;
      bottom: 0.25rem;
      left: 0.12rem;
      // padding: .15rem .12rem .25rem .12rem;
      .btm_border {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: solid 1px #1776af;
        text-align: center;
        line-height: 0.42rem;
        span {
          font-size: 0.16rem;
          color: #1776af;
          font-family: PingFang-SC-Medium;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
        }
        img {
          width: 0.16rem;
          height: 0.16rem;
          margin-left: 0.04rem;
          vertical-align: middle;
          margin-bottom: 0.02rem;
        }
      }
      :hover {
        background: #3f555f;
      }
      :hover > span {
        color: #ffffff;
        font-size: 0.16rem;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
      }
    }
    .footer {
      width: 3.31rem;
      height: 0.44rem;
      position: absolute;
      bottom: 0.25rem;
      left: 0.12rem;
      img {
        width: 3.31rem;
        height: 0.44rem;
      }
    }
  }
}
</style>
