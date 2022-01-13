<template>
  <div class="major">
    <div class="major-body">
      <div class="major-img1">
        <img src="@/assets/img/公共/专业优势_03.jpg" alt="" />
      </div>
      <div class="major-img2">
        <img src="@/assets/img/高铁专业/高铁专业_06.gif" alt="" />
      </div>
      <ul class="size-list" v-for="(item,index) in highList" :key="index">
        <li class="list-img">
            <img :src="item.imgs" alt="">
        </li>
        <li class="list-size"><span v-bind:style="item.color">{{item.title}}</span>{{item.text}}</li>
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
          title: "高铁乘务岗位多:",
          text: "中国的上海，天津，北京，广州，深圳等各大城市相继开通高铁，并且其它的城市也在建设当中。正是因为地铁的便利和快捷，高铁成为许多人出选择工具，它也成为城市交通体系的关键部分，为这个专业提供了丰富的就业岗位资源。",
        },
        {
          imgs:require("@/assets/img/公共/航空专业详情页_06.png"),
          color:"color: #ff3300",
          title: "行业潜力大:",
          text: "预计在2020年的时候，中国铁路营业里程将会达到十二万公里以上，与超过五百万人口的城市相连，具有巨大的潜力。",
        },
        {
          imgs:require("@/assets/img/公共/航空专业详情页_03_08.png"),
          color:"color: #ff3300",
          title: "薪资待遇好:",
          text: "据有关数据显示，到2020年的时候，最少要增加五万多位乘务员，现在的乘务员薪水在三千到七千之间，如果你能晋升到中层的领导级别，可以拿到20万的年薪。如果你升职到高层领导级别，就能拿到35万的年薪。",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.major {
  width: 100%;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  display: flex;
  justify-content: center;
  .major-body {
    width: 3.55rem;
    background: white;
    border-radius: 0.05rem;
    .major-img1 {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .major-img2 {
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
     .size-list{
        width: 3.14rem;
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