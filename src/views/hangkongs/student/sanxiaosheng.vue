<template>
  <div class="sx">
     <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/img/三校生/三校生.png" alt="">
        </div>
    </div>
     <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页</router-link>
        <router-link to="/hangkong" tag="span">>航空学院</router-link>
        <router-link to="/chuzhongsheng">
            <span   style="color: #999;">>三校生</span>
        </router-link>
      </p >
    </div>
    <div class="what">
      <div class="what-img-one">
        <img src="@/assets/img/三校生/什么是三校生_03.jpg" alt="" />
      </div>
      <div class="what-school">
        <div class="what-img-two">
          <img src="@/assets/img/三校生/三校生_03.jpg" alt="" />
        </div>
        <p>
          三校生，表示正在接受中等职业教育学生的统称。中等职业学校包括职高、中专、技校。其定义是在九年义务教育的基础上培养一批具有高素质的高技术人才。其学生毕业后有技能可以胜任工作岗。航空服务技能培训等。
        </p>
      </div>
    </div>
    <!--  -->
    <div class="good">
      <div class="what-img-one">
        <img src="@/assets/img/三校生/选择空乘专业的优势_03.jpg" alt="" />
      </div>
      <div class="good-school">
        <div class="what-img-two">
          <img src="@/assets/img/三校生/三校生_06.jpg" alt="" />
        </div>
        <div class="good-text">
          <ul>
            <li>
              <div class="text-img">
                <img src="@/assets/img/公共/航空专业详情页_03.png" alt="">
              </div>
              <p>
                <span class="text-one">升职潜力大:</span>
                空乘的晋升制度非常简单，每个公司都是按照，全勤，年小时飞行时长，不扣分不犯错，有英语资质，有国际线资格，就可以一直上升。
              </p>
            </li>
            <li>
              <div class="text-img">
                <img src="@/assets/img/公共/航空专业详情页_06.png" alt="">
              </div>
              <p>
                <span class="text-two">工资待遇好:</span>
                空乘的工资一般分为基本工资，小时费，过夜费这几个项目。基本工资随着飞行时长和等级固定增加。温馨的工作氛围，充满人文关怀和幸福感的工作环境。
              </p>
            </li>
            <li>
              <div class="text-img">
                <img src="@/assets/img/公共/航空专业详情页_03_08.png" alt="">
              </div>
              <p>
                <span class="text-three">入职面试快:</span>
                航空公司选招空乘最优选学校，学校选不到才会面向社会招收人员。空乘专业面试的问题都是一些比较基本的问题，比如姓名，身高，学历，为什么选择空乘等，所以完全可以提前准备完善。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import page from "@/components/page/index.vue";
export default {
    components:{
        page
    }
}
</script>
<style lang='scss'  scoped >
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
.sx {
  width: 3.55rem;
  margin: 0 auto 0.1rem;
}
.what {
  width: 3.55rem;
  border-radius: 0.05rem;
  background-color: #fdfcfc;
  overflow: hidden;
  margin: auto;
}
.what-img-one img {
  width: 100%;
}
.what-img-one img {
  width: 100%;
  height: 100%;
}
.what-img-two {
  width: 3.35rem;
  height: 1.2rem;
  overflow: hidden;
  border-radius: 0.05rem;
  margin-bottom: 0.1rem;
}
.what-img-two img {
  width: 100%;
  height: 100%;
}
.what-school {
  padding: 0.1rem 0.1rem 0.2rem;
  box-sizing: border-box;
}
.what-school p {
  font-family: PingFang-SC-Bold;
  font-size: 0.1rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  text-indent: 0.12rem;
  line-height: 0.18rem;
  padding: 0.1rem;
  box-sizing: content-box;
  border: 0.01rem dashed #999999;
  border-radius: 0.15rem;
}

.good {
  background: #fff;
  margin-top: 0.1rem;
  border-radius: 0.05rem;
  overflow: hidden;
  .what-img-one {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .good-school {
    padding: 0.1rem;
    box-sizing: border-box;

    .what-img-two {
      width: 3.35rem;
      height: 1.2rem;
      overflow: hidden;
      border-radius: 0.05rem;
      margin-bottom: 0.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .good-text {
      ul {
        li {
          display: flex;
          justify-content: space-between;
          border-bottom: dashed 0.01rem rgba(216, 216, 216);
          .text-img {
            width: 0.68rem;
            height: 0.6rem;
            img {
              width: 100%;
            }
          }
          p {
            width: 2.68rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.12rem;
            color: #333333;
            span {
              font-weight: 700;
            }
            .text-one {
              color: #ff3300;
            }
            .text-two {
              color: #006699;
            }
            .text-three {
              color: #009900;
            }
          }
        }
        li:nth-child(1) {
          padding: 0 0 0.2rem;
        }
        li:nth-child(2) {
          padding: 0.26rem 0 0.2rem;
        }
        li:nth-child(3) {
          padding: 0.26rem 0 0.2rem;
        }
      }
    }
  }
}
</style>