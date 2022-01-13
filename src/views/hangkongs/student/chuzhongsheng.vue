<template>
  <div class="Cthere">
    <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/img/初中生/初中生.jpg" alt="">
        </div>
    </div>
     <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页</router-link>
        <router-link to="/hangkong" tag="span">>航空学院</router-link>
        <router-link to="/chuzhongsheng">
            <span   style="color: #999;">>初中生</span>
        </router-link>
      </p >
    </div>
    <div class="Green">
      <div class="Ctit">
        <img src="@/assets/img/初中生/初中生成长计划说明_03.jpg" alt="" />
      </div>
      <div class="Ccen">
        <img src="@/assets/img/初中生/初中生2_03.jpg" alt="" />
      </div>
     <div class="dv">
      <div class="number">
        <div class="left">
          <img src="@/assets/img/公共/航空专业详情页_03.png" alt="" />
        </div>
        <div class="right">
          <span class="orange">自我分析：</span>
          <span>安排各项学习任务，使学习有秩序地进行，有了计划可以把自己的学习管理好。</span>
          <span>
            到一定时候对照计划检查总结一下自己的学习，看看有什么优点和缺点，优点发扬，缺点克服，使学习不断进步。</span
          >
        </div>
      </div>
       <div class="number">
        <div class="left">
          <img src="@/assets/img/公共/航空专业详情页_06.png" alt="" />
        </div>
        <div class="right">
          <span class="blue">发展方向：</span>
          <span>提高计划观念和计划能力，使自己成为能够有条理地安排学习，生活、工作的人。
            这种计划观念和计划能力，学生都应该学习和具备，这对一生都有好处。</span>
        </div>
      </div>
      <div class="number">
        <div class="left">
          <img src="@/assets/img/公共/航空专业详情页_03_08.png" alt="" />
        </div>
        <div class="right">
          <span class="green">发展规划：</span>
          <span>培养良好的学习习惯，良好习惯养成以后，就能自然而然地按照一定的秩序去学习。</span>
          <span>
            有了计划，也有利于锻炼克服困难、不怕失败的精神，无论碰到什么困难挫折也要坚持完成计划，达到规定的学习目标。</span
          >
        </div>
      </div>
       
  </div>
    </div>

    <div class="bott">
      <div class="Ctit">
        <img src="@/assets/img/初中生/初中生2_01_03.png" alt="" />
      </div>
       <div class="Ccen">
        <img src="@/assets/img/初中生/初中生2_06.jpg" alt="" />
      </div>
      <div class="img2">
        <img style="width:1.55rem;height:.3rem" src="@/assets/img/初中生/初中生2_04.jpg" alt="">
        <img style="width:.19rem;height:.13rem;padding-top:.09rem" src="@/assets/img/初中生/初中生2_08.jpg" alt="">
        <img style="width:1.55rem;height:.3rem" src="@/assets/img/初中生/初中生2_05.jpg" alt="">
      </div>
      <div class="lits">
        <div class="left">
          <p>
            <span>解题方向不清楚</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
           <p>
            <span>粗心大意</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
           <p>
            <span>基础薄弱</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
           <p>
            <span>苦学无效</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
           <p>
            <span>动力不足</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
           <p>
            <span>知识生疏</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
           <p>
            <span>缺少拓展思路</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
           <p>
            <span>愁眉苦脸式</span>
            <img src="@/assets/img/初中生/初中生2_03.png" alt="">
          </p>
        </div>
        <div class="right">
          <p>
            <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>免费的衣、食、住、行</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>就业待遇好</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>职业稳定性</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>一年内工作半年</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>欣赏各国风光</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>增长见识</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>提高交际能力</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/初中生2_06.png" alt="">
            <span>产假待遇好</span>
            
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Explain from '@/components/explain/explain.vue'
import page from "@/components/page/index.vue";
export default {
  components: {
    Explain,
    page
  },
};
</script>
<style lang="scss" scoped>
.title_warp{
width:100%;
padding:0 .2rem;
margin: .15rem 0;
box-sizing:border-box;
  p{
    width: 3.75rem;
    margin: 0 auto;
    span {
        margin-left: 0.2rem;
        font-size: .14rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: .07rem;
        letter-spacing: 0px;
        color: #888888;
    }
    .hang {
        margin-left: 0.05rem;
        font-family: PingFang-SC-Medium;
        font-size: .14rem;
        font-weight: normal;
        letter-spacing: 0px;
        color: #b0b0b0;
        }
    }
}
.Cthere {
  width: 3.75rem;
  margin: 0 auto;
}
 .lun_warp{
        width: 100%;
        height: 1.50rem;
        .lun_con{
            width: 3.75rem;
            height: 1.50rem;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

.Green {
  width: 3.56rem;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
  margin-bottom: 0.15rem;
  .dv{
    padding-bottom: .15rem;
}
.number {
  width: 3.14rem;
  margin: 0.15rem 0.1rem;
  padding-bottom: 0.15rem;
  border-bottom: 1px dotted rgb(153, 153, 153);
  overflow: hidden;
  .left {
    float: left;
    width: 0.51rem;
    img {
      width: .68rem;
      height: 0.68rem;
    }
  }
  .right {
    width: 2.53rem;
    float: left;
    padding-left: .1rem;
    font-size: 0.12rem;
    .orange {
      color: rgb(255, 51, 0);
    }
    .blue {
      color: rgb(0, 102, 153);
    }
    .green {
      color: rgb(0, 136, 24);
    }
    .pink {
      color: rgb(126, 0, 146);
    }
  }
}
}
.Ctit img {
  width: 3.56rem;
  background-color: #1c6ca5;
  border-radius: 0.05rem 0.05rem 0 0;
}
.Ccen {
  padding: 0.1rem;
}
.Ccen img {
  width: 3.35rem;
  height: 1.3rem;
}
.Czi {
  width: 3.35rem;
  height: 0.75rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.12rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
  margin: 0.15rem 0.1rem 0.05rem 0.1rem;
}




.bott {
  width: 3.55rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
  margin: 0 auto;
  margin-bottom: .15rem;

}
.img2{
  display: flex;
  justify-content: space-between;
}
.lits{
  display: flex;
  justify-content: space-between;
  padding-bottom:.2rem ;
  .left{
    width: 1.55rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
    p{
      span{
        padding-right: .09rem;
        font-size: .12rem;
        font-family: PingFang-SC-Medium;
        color: #666666;
      }
      img{
        width:.11rem ;
        height: .11rem;
      }
    }
  }
  .right{
     width: 1.55rem;
    p{
      span{
        padding-left: .09rem;
        font-size: .12rem;
        font-family: PingFang-SC-Medium;
        color: #666666;
      }
      img{
        width: .16rem;
        height: .11rem;
      }
    }
  }
}




</style>
