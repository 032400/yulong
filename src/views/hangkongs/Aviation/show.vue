<template>
  <div class="show">
    <div class="beijing">
        <span class="daohanname">{{school.product_name}}</span>
      </div>
    <div class="show-text">
      <ul>
        <li v-for="item in school" :key="item.product_id">
         <router-link  :to="{path:'/sichuan',query:{gid:item.product_id}}">
            <div class="school-img">
              <img :src="url + item.product_logo" alt="" />
            </div>
            <div class="school-text">
              <div class="school-name">{{ item.product_name }}</div>
              <p><span>学校所在地：</span>{{ item.product_desc }}</p>
              <p>
                <span>专业设置：</span>{{item.product_mark}}
              </p>
              <p><span>学校优势：</span>{{item.product_weight}}</p>
            </div>
          </router-link>
        </li>

        
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      school: [],
      url: "//39.105.137.169:9527/",
    };
  },
  mounted() {
    axios.get("/cw", { params: { mod: "list",id:this.$route.query.id} }).then((res) => {
      this.school = res.data.list;
    });
  },
};
</script>
<style lang="scss" scoped>

.show {
  width: 3.55rem;
  background: #fff;
  border-radius: 0.05rem;
  overflow: hidden;
  margin: 0.15rem auto;
 .beijing{
  width: 3.55rem;
  height: .54rem;
  background-image: url("../../../assets/img/公共/公共导航.jpg");
  background-size: 3.68rem 0.54rem;
  background-repeat: no-repeat;
  .daohanname{
    width: 1.69rem;
    height: .54rem;
    font-family: PingFang-SC-Bold;
    font-size: .17rem;
    font-weight: normal;
    font-stretch: normal;
    color: #ffffff;
    display: flex;
    align-items: center;
    margin-left: 0.1rem;

  }
}
  .show-text {
    padding: 0rem 0.05rem 0rem;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 0.05rem;
      li {
        width: 1.7rem;
        border-radius: 0.06rem;
        overflow: hidden;
        background: #f4f4f4;
        margin-top: 0.05rem;
        .school-img {
          width: 100%;
          height: 0.9rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .school-text {
          padding: 0 0.17rem 0.1rem 0.05rem;
          .school-name {
            font-family: PingFang-SC-Heavy;
            font-size: 0.17rem;
            font-weight: normal;
            color: #666;
          }
          p {
            font-family: PingFang-SC-Heavy;
            font-size: 0.1rem;
            color: #999;
            line-height: 0.17rem;
            span {
              font-family: PingFang-SC-Heavy;
              font-size: 0.1rem;
              font-weight: normal;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>