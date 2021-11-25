<template>
  <div class="signup_warp">
    <div class="avi_nav">
      <p>
        <span>当前位置：</span>
        <router-link to="/"> <span id="shou">首页 > </span></router-link>
        <span>疑难解答</span>
      </p>
    </div>
    <div class="information_warp">
      <div class="information_con">
        <div class="information_con_top">
          <img src="@/assets/img/公共/疑难解答_03.jpg" alt="" />
        </div>
        <div class="information_con_cen">
          <ul class="btm_list">
            
            <li class="content_li" v-for="(item, index) in list" :key="index">
              <span class="span_One"
                ><em> <img src="@/assets/img/shouye/首页_03.jpg" alt="" /></em
                >{{ item }}</span
              >
              <p>2021.10.15</p>
            </li>
          
           
          </ul>
        </div>
        <div class="information_con_btm" @click="set()">
          <div class="btm_border">
            <span>查看更多资讯</span>
            <img :src="setimg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Information from "@/views/homes/hottopics/Information.vue";

export default {
  components: {
    Information,
  },
   data() {
    return {
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
      setimg:require("@/assets/img/公共/sou.png"),
    };
  },
  methods: {
    set(){
      this.setimg=require("@/assets/img/公共/放大镜白色.png");
    }
  }

};
</script>
<style lang="scss" scoped>
.signup_warp {
  width: 3.75rem;
  background: #eaeaea;
  .avi_nav {
    width: 3.75rem;
    height: 0.44rem;
    background: #fff;
    margin-bottom: 0.1rem;
    p {
      line-height: 0.44rem;
      margin-left: 0.2rem;
      color: #888;
      font-size: 0.14rem;
      span:nth-child(3) {
        margin: 0 0.03rem;
      }
      #shou {
        color: #888;
      }
    }
  }
}
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
      // padding-top: 0.02rem;
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
        
        .content_li {
          width: 100%;
          border-bottom: 1px solid #cccccc;
          display: flex;
          justify-content: space-between;
          margin-top: 0.2rem;
          align-items: center;
          text-align: -webkit-left;
          .span_One {
            width: 2.35rem;
            padding-bottom: 0.02rem;
            height: 0.15rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.15rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.15rem;
            letter-spacing: 0px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left: 0.07rem;
            em {
              display: inline-block;
              width: 0.16rem;
              margin: 0 0.05rem;
              img {
                width: 100%;
                margin-bottom: 0.04rem;
              }
            }
          }
          .span_Two {
            // width: .74rem;
            height: 0.11rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.14rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.12rem;
            margin-right: 0.05rem;
            letter-spacing: 0rem;
            color: #999999;
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
            padding-right: .1rem;
          }
        }
      }
    }
    .information_con_btm {
      padding: 0.15rem 0.12rem 0.25rem 0.12rem;
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
  }
}
</style>
