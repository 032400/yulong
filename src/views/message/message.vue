<template>
  <div>
    <page />
    <div class="message">
      <!-- <div class="mseeage-title">
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
      </div> -->
      <div class="message-context">
          <div v-html="$store.state.listText"></div>
          <!-- <section><section><section><section><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: 0px; max-width: 100%; box-sizing: border-box; clear: both; min-height: 1em; overflow-wrap: break-word !important;">实训基地召开全体教师会议</p></section></section><section><section><section><section><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: 0px; max-width: 100%; box-sizing: border-box; clear: both; min-height: 1em; overflow-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; outline: 0px; max-width: 100%; box-sizing: border-box; overflow-wrap: break-word !important;"></strong>2021年12月14日实训基地在航空楼会议室召开了全体授课教师会议，会议由基地教务主任马静老师主持。</p></section></section></section></section></section></section><p></p><section><section><section><section><section><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: 0px; max-width: 100%; box-sizing: border-box; clear: both; min-height: 1em; overflow-wrap: break-word !important;">马静主任跟教师们确定了部分期末考试本周是否已经考试完成，其他剩余的科目集中20、21、22考试，应对每个班级考级内容进行确定，并表扬朱宁老师教学认真负责，1+X证书考试完成，提醒各位教师提前做好年终总结和做好明年的课程安排。</p></section></section><section><section><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: 0px; max-width: 100%; box-sizing: border-box; clear: both; min-height: 1em; overflow-wrap: break-word !important;"><br/></p></section></section><section><section><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_jpg/PHkpEK5NOaczwlLcTAno0vYxcyicPnMtMd3wEPKXCku2BKhicGBCTPqptxxC0xkICRVcEEfODiayK3Lcicgev68kLg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" alt="图片"/></section></section></section></section></section><p></p><p><br/></p> -->
      </div>
    </div>
    <div class="message-footer">
        <p>报名资讯电话：8948956415</p>
        <p>煜龙时空</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import page from "@/components/page/index.vue";
export default {
  components: {
    page,
  },
  data(){
    return{
      
    }
  },

   mounted(){
    axios.get("/cw", { params: { mod: "gonews",cid:this.$route.query.id } }).then((res)=>{
      // console.log(res)
      this.listText = res.data.hot;
    })
   },
    computed: {
    ...mapGetters(["Xiangqing"]),
    Xiangqing() {
      return this.Xiangqing;
    }
  },
  watch: {
    Xiangqing(newData, oldData) {
     
    }
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