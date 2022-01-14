<template>
  <div class="high">
    <div class="high-body">
      <div class="high-img1">
        <img src="@/assets/img/公共/专业介绍_03.jpg" alt="" />
      </div>
      <div class="high-img2">
        <img src="@/assets/img/高铁专业/高铁专业_03.gif" alt="" />
      </div>
      <div class="size-duce">
            随着我国国内经济的飞速发展，动车、高铁、地铁在全国各大中城市纷纷开通运营，对相关专业服务人才需求极大。按人车比150:1的比例计算在未来3到10年间，全国各大中城市将需求此类专业服务人才近20万人，目前国内只有个别学校开设相关服务专业，远远满足不了社会需求。我校顺应时代潮流，在多方论证的基础上积极开设动车乘务岗前培训班，为社会输送合格人才。所以本专业学生就业待遇丰厚，前景广阔，供不应求。
        </div>
        <div class="size-icon">
            <img src="@/assets/img/公共/航空专业详情页_04.jpg" alt="">
        </div>
        <ul class="size-list" v-for="(item,index) in highList" :key="index">
            <li class="list-img">
                <img :src="item.imgs" alt="">
            </li>
            <li class="list-size"><span v-bind:style="item.color"></span>{{item.text}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highList: [
        {
          imgs:require("@/assets/img/公共/航空专业详情页_03.png"),
          color:"color: #ff3300",
          
          text: "高铁乘务专业全称是高速铁路客运乘务专业，是国家教育部面向铁路行业开设的高等职业教育专业。其专业学制为三年。就业主要集中在铁路旅客列车客运乘务及其相关方向。",
        },
        {
          imgs:require("@/assets/img/公共/航空专业详情页_06.png"),
          color:"color: #ff3300",
        
          text: "高铁乘务专业是目前的一大热门专业，再加之中国目前的铁路系统技术和运营里程都是全世界规模最大的国家之一，因此我国的高铁行业发展将会持续走高，高铁乘务专业的毕业生在就业前景和发展前景上是很光明的。目前我国的很多高铁院校都是与企业实行资源互补，校企合作的发展方向和趋势，高铁乘务专业的学生在毕业之前学校一般会提供实习机会，在高铁企业实习期间，表现突出的学生会有优先就业的机会。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.high {
  width: 100%;
//   margin-bottom: 0.15rem;
  display: flex;
  justify-content: center;
  .high-body {
    width: 3.55rem;
    // height: 4.87rem;
    background: white;
    border-radius: 0.05rem;
    .high-img1 {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .high-img2 {
      width: 3.35rem;
      height: 1.2rem;
      margin: 0 auto;
      overflow: hidden;
      border-radius: .05rem;
      margin-top: .1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .size-duce{
          width: 3.3rem;
          box-sizing: border-box;
          // height: .89rem;
          border-radius: .15rem;
          border: dashed  .01rem #999999;
          margin: .1rem .1rem .1rem .1rem;
          padding: .1rem .13rem;
          color: #333333;
          font-size: .12rem;
          font-weight: normal;
          line-height: .18rem;
      }
      .size-icon{
          width: .13rem;
        height: .09rem;
          margin: 0 auto;
          img{
              width: 100%;
              height: 100%;
          }
      }
      .size-list{
        width: 3.14rem;
        // background: red;
        margin: .06rem .1rem .15rem .1rem;
        padding: 0.15rem 0 0.15rem 0;
        display: flex;
        flex-direction: row;
        border-bottom: dashed  .01rem #999999;
        text-align: justify;
        .list-img{
            width: .53rem;
          height: .53rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .list-size{
            width: 2.53rem;
            // height: .48rem;
            font-size: .12rem;
            // font-weight: bold;
            line-height: .18rem;
            color: #333333;
            margin-left: .1rem;
        }
    }
  }
}
</style>