<template>
  <div class="index">
    <div class="video-header">
      <!-- <pages/> -->
      <div class="title_warp">
        <p>
          <router-link to="/" tag="span">当前位置：首页</router-link>
          <router-link to="/hangkong" tag="span">
            <span>>航空学院</span>
          </router-link>
          <router-link to="/videos" tag="span">
            <span>>视频</span>
          </router-link>
        </p>
      </div>
    </div>
    <div class="videos">
      <div class="vides">
        <img src="@/assets/img/航空学院/video/1.jpg" alt="" />
        <!-- <video src="@/assets/images2/ship/mda-jmi4aniy24gvebwr.mp4" controls></video> -->
      </div>
      <div class="video-text">
        <p class="text-title">空姐站姿视频训练</p>
        <p class="text-tilti">
          空乘专业仪态包括站立、，在短短的十几分钟面试时间里，并不需要专门展示自己的站姿。的确，我们不要求考生像军人站军姿那样要求自己，但是，如果平时过于懒散，在面试时的举―动稍不注意就会给考官留下不好的印象，让自己的竟争对手有机会胜过自己。所以，应聘者还需严格要求自己。
        </p>
        <ul>
          <li>
            <p class="text-title">1. 女士</p>
            <p>
              两脚展开约30度，左脚在前,将左脚跟靠于右脚内侧后三分之一处，呈“丁字步”两手自然并拢，大拇指交叉，右手放在左手上，轻贴在腹前;身体直立，挺胸收腹，身体重心可放在两脚上，也可放在一脚上，通过重心移动减轻疲劳。
            </p>
          </li>
          <li>
            <p class="text-title">2. 男士</p>
            <p>
              两脚平行分开，两脚之间距离不超过肩宽，两两手手指自然并拢，右手搭在左手上，轻贴在腹部，双目平视，面带微笑；或两脚跟相靠，脚脚尖展开呈现45度，两手叠放在背后，双目平视，面带微微笑。
            </p>
          </li>
          <li>
            <p class="text-title">3. 空乘专业站姿训练方法</p>
            <p class="little">(1) 背靠背站立</p>
            <p>两人一组，要求两人后脚跟、小腿、臀、双肩、脑后枕部相互紧贴。</p>
            <p class="little">(2) 顶书训练</p>
            <p>在头顶上平放一本书，保持书的平衡，以检测是否做到头正、颈直。</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import pages from "../page/index.vue";
export default {
  components: {
    // pages,
  },
};
</script>

<style lang="scss" scoped>
.video-header {
  background: #fff;
  height: 0.33rem;
  line-height: 0.33rem;
  color: #888;
}
.videos {
  width: 3.55rem;
  margin: 0.1rem auto 0.1rem;
  border-radius: 0.05rem;
  overflow: hidden;
  video {
    width: 100%;
    height: auto;
  }
  .vides {
    width: 100%;
    height: 2.5rem;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .video-text {
    padding: 0.15rem 0.1rem 0.15rem;
    box-sizing: content-box;
    background: #fff;
    .text-title {
      font-family: PingFang-SC-Medium;
      font-size: 0.17rem;
      font-weight: bold;
      font-stretch: normal;
      line-height: 0.3rem;
      color: #333333;
    }
    .text-tilti {
      font-family: PingFang-SC-Medium;
      font-size: 0.12rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.18rem;
      letter-spacing: 0px;
      color: #333333;
      text-indent: 0.25rem;
    }
    ul {
      li {
        .text-title {
          line-height: 0.4rem;
        }
        .little {
          font-family: PingFang-SC-Medium;
          font-size: 0.12rem;
          font-weight: normal;
          letter-spacing: 0px;
          color: #707070;
          line-height: 0.3rem;
          text-indent: 0.2rem;
        }
      }
    }
  }
}
</style>