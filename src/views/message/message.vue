<template>
  <div>
    <page />
    <div class="message">
      <div class="mseeage-title">
        <h2>《金融时报》公布2021年全球商学院排名，商科最强院校是这些！</h2>
        <p>
          <span>来源：煜龙时空网</span>
          <span>时间：2021-11-30 09:20:38</span>
        </p>
        <p>
          <span>分享：</span>
          <ul>
            <li>
                <img src="@/assets/img/最新资讯/图文页_03.jpg" alt="" />
            </li>
            <li>
                <img src="@/assets/img/最新资讯/图文页_05.jpg" alt="" />
            </li>
            <li>
                <img src="@/assets/img/最新资讯/图文页_07.jpg" alt="" />
            </li>
            <li>
                <img src="@/assets/img/最新资讯/图文页_09.jpg" alt="" />
            </li>
            <li>
                <img src="@/assets/img/最新资讯/图文页_11.jpg" alt="" />
            </li>
          </ul>
        </p>
      </div>
      <div class="message-context">
          <p>近日，《金融时报》Financial Times商学院排名公布了。金融时报的全球商学院排名，与泰晤士和QS专业领域院校排名有一些区别，Financial Times排名偏向于“毕业后薪酬”、“薪酬提升”等标准，对商科学生的学术研究和未来就业有较高的参考价值。</p>
          <p>《金融时报》2021年全球商学院排名，项目领域包含MBA、EMBA、金融硕士、管理硕士课程和在线MBA课程，以及高管教育非学位课程和欧洲顶级商学院排名。MBA、EMBA、金融硕士、管理硕士课程和在线MBA课程，以及高管教育非学位课程和欧洲顶级商学院排名。</p>
            <div class="message-imgone">
                <img src="@/assets/img/最新资讯/图文页_19.jpg" alt="">
            </div>
            <ul>
                <li>
                    <h4>排名方法：</h4>
                    <p>评价指标：职业发展和薪资水平(所占权重50%)</p>
                    <p>排名因素：性别多样性、国籍多样性、国际交流机会、拥有博士学位的老师比例等</p>
                </li>
                <li>
                    <h4>入围资格：</h4>
                    <p>· 商学院应获得AACSB或Equis认证或相关从属关系</p>
                    <p>· 相关专业至少已开设3年</p>
                    <p>· 在排名发布日期前，相关专业的第一届毕业生已毕业至少三年</p>
                    <p>
                        由此可见，《金融时报》全球商学院排名审核是非常严格的，同时也表示"
                        <span>该排名对商科学生留学择校具有很高的参考价值。</span>
                    </p>
                </li>
                <li>
                    <h4>排名分析：</h4>
                    <p>2021《金融时报》全球金融硕士排名分为两类：无需工作经验(Pre-experience)和需要工作经验(Post-experience)。</p>
                </li>
            </ul>
            <h3>无需工作经验(Pre-experience)TOP15榜单:</h3>
            <div class="message-top">
                <img src="@/assets/img/最新资讯/图文页_22.jpg" alt="">
            </div>
            <p>从以上表单可知，TOP5全都被法国的商学院占领，巴黎高等商学院稳居第一，毕业生不仅起薪高，薪资增幅也快，不过申请要求也是不低的!</p>
            <p>英国的商学院也很强势，在TOP10中占据2个席位，成为“英国第一商学院”的是伦敦商学院(第8名)，是伦敦大学的两大研究生院之一。</p>
            <p>紧随其后的是牛津大学的商学院(第10名)、帝国理工学院的商学院(第11名)。英国的商学院在申请要求上较灵活一些，但每年的竞争者很多，申请压力也是不小的，需要提前做好留学申请规划。</p>
            <p>中国的清华大学经济管理学院(第12名)表现也很不错，上海交通大学-上海高级金融学院第17名，北京大学-光华第20名。</p>
            <p>由《金融时报》全球商学院排名可以看出，商科专业<span>出国留学</span>不一定非要去英、美，法国、意大利、西班牙、荷兰等国家商科强校也是不错的选择！</p>
            <div class="message-imgtwo">
                <img src="@/assets/img/最新资讯/图文页_25.jpg" alt="">
            </div>
            <p class="updown">阅读上一篇：2022QS商科硕士及全球MBA排名榜单</p>
            <p class="updown">阅读下一篇：高中毕业是出国留学还是国内读二本？</p>
      </div>
    </div>
    <div class="message-footer">
        <p>报名资讯电话：8948956415</p>
        <p>煜龙时空</p>
    </div>
  </div>
</template>
<script>
import page from "@/components/page/index.vue";
import axios from "axios";
export default {
  components: {
    page,
  },
  data(){
    return{
      listText: [],
    }
  },
   mounted(){
    axios.get("/cw", { params: { mod: "gonews",cid:this.$route.query.id } }).then((res)=>{
      console.log(res)
      this.listText = res.data.hot;
    })
  },
};
</script>
<style lang="scss" scoped>
.message {
  border-radius: 0.05rem;
  background: #fff;
  width: 3.55rem;
  margin: auto;
  //   padding: 0.1rem 0.1rem 0.15rem;
  box-sizing: border-box;
  .mseeage-title {
    padding: 0.1rem 0.1rem 0.15rem;
    border-bottom: solid 0.01rem #b1b1b1;
    h2 {
      text-align: center;
      font-size: 0.17rem;
      font-weight: 600;
      line-height: 0.2rem;
      color: #333333;
    }
    p:nth-child(2) {
      text-align: center;
      font-size: 0.12rem;
      line-height: 0.2rem;
      color: #666666;
      span:nth-child(1) {
        padding-right: 0.2rem;
      }
    }
    p:nth-child(3) {
      text-align: center;
      font-size: 0.12rem;
      line-height: 0.2rem;
      color: #666666;
      width: 2rem;
      margin: auto;
      span {
        float: left;
      }
      ul {
        width: 1.4rem;
        display: flex;
        justify-content: space-between;
        margin: 0;
        li {
          width: 0.2rem;
          height: 0.2rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .message-context {
    padding: 0.1rem 0.1rem 0.15rem;
    p {
      line-height: 0.3rem;
      font-size: 0.12rem;
      text-indent: 0.2rem;
      color: #666666;
    }
    .message-imgone {
      width: 3.35rem;
      height: 1.45rem;
      margin: auto;
      padding-bottom: .1rem;
      img {
        width: 100%;
      }
    }
    ul {
      li {
        h4 {
          color: #cc3333;
          text-indent: 0.2rem;
          font-weight: 600;
        }
        p {
            color: #666666;
          span {
            color: #ff3333;
          }
        }
      }
    }
    h3{
        color: #333333;
        text-align: center;
        font-weight: 600;
    }
    .message-top{
        width: 3.35rem;
        height: 3.62rem;
        margin: auto;
        img{
            width: 100%;
        }
    }
    .message-imgtwo{
        width: 3.35rem;
        height: 1.45rem;
        margin: auto;
        padding-bottom: .1rem;
        img{
            width: 100%;
        }
    }
    .updown{
        text-indent: 0;
    }
  }
}
  .message-footer{
      text-align: center;
      font-size: .12rem;
      color: #888888;
      padding: .15rem 0;
  }
</style>