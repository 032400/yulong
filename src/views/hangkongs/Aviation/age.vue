<template>
  <div class="age">
    <div class="age-header">
      <img src="@/assets/img/航空学院/国际航空服务与管理_58.jpg" alt="" />
    </div>
    <div class="age-text">
      <ul>
        <router-link to="/hangkong/chuzhongsheng">
        <li>
          <div class="age-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_64.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="junior">初中生15岁+</p>
          </div>
          <div class="age-title-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_09.jpg" alt="" />
          </div>
        </li>
        </router-link>
        <router-link to="/hangkong/gaozhongsheng">
        <li>
          <div class="age-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_61.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="senior">高中生18岁+</p>
          </div>
          <div class="age-title-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_10.jpg" alt="" />
          </div>
        </li>
        </router-link>
      </ul>
      <ul>
        <router-link to="/hangkong/sanxiaosheng">
        <li>
          <div class="age-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_69.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="cube">三校生18岁+</p>
          </div>
          <div class="age-title-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_18.jpg" alt="" />
          </div>
        </li>
        </router-link>
        <router-link to="/hangkong/yikaosheng">
        <li>
          <div class="age-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_68.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="art">艺考生18岁+</p>
          </div>
          <div class="age-title-img">
            <img src="@/assets/img/航空学院/国际航空服务与管理_20.jpg" alt="" />
          </div>
        </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.age {
  height: 3.8rem;
  width: 3.55rem;
  background: #f9fafb;
  border-radius: 0.05rem;
  overflow: hidden;
  margin: auto;
  .age-header {
    height: 0.54rem;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .age-text {
    height: 2.7rem;
    padding: 0.1rem 0.42rem 0.1rem 0.42rem;
    box-sizing: border-box;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      li {
        width: 1.1rem;
        .age-img {
          width: 1rem;
          height: 1.1rem;
          margin: auto;
          img {
            width: 100%;
          }
        }
        .age-title {
          p {
            font-family: MicrosoftYaHei-Bold;
            font-size: 0.17rem;
            font-weight: 700;
            line-height: 0.07rem;
            text-align: center;
          }
          .junior {
            color: #33cc99;
          }
          .senior {
            color: #0099ff;
          }
          .cube {
            color: #ff6666;
          }
          .art {
            color: #3399cc;
          }
        }
        .age-title-img {
          width: 1rem;
          margin: .1rem auto;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>