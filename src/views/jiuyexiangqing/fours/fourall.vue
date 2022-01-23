<template>
  <div class="all">
    <div class="all-introduction">
      
     
      <div class="beijing">
        <span class="daohanname">{{list.j_name}}</span>
      </div>
      <div v-html="list.j_conter">

      </div>
    </div>
    
    
    <div class="foot">
      <p>报名资讯电话：8948956415</p>
      <p>煜龙时空</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  
   data() {
    return {
     
       list:[],
      url:"http://39.105.137.169:9527/",
     
      
    };
  },
  

  mounted(){
   axios.get("/cw", { params: { mod: "jiuyexq",jid:this.$route.query.jid} }).then((res) => {
      console.log(res);

      this.list = res.data[0]
    });
   
  }
};
</script>
<style lang="scss" scoped>
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
.all {
  width: 3.55rem;
  margin: auto;
  .all-introduction {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    padding-bottom: .22rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .introduction-text {
      width: 100%;
      .school-img {
        width: 100%;
    padding: .1rem;
    box-sizing: border-box;
        img {
          width: 100%;
        }
      }
      .school-text {
        padding: 0 0.1rem;
        box-sizing: border-box;
        font-size: .12rem;
        .school-more {
          width: 100%;
          p {
            color: #888;
            span {
              color: #333;
            }
          }
        }
        .details {
          padding: 0.1rem 0;
          line-height: 0.18rem;
          p {
            color: #888;
            font-size: .12rem;
            span {
              color: #333;
              i {
                display: block;
                float: left;
                width: 0.14rem;
                height: 0.14rem;
                padding-right: 0.11rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .look-details {
              color: #e10c0c;
            }
          }
          .two {
            text-indent: 0.24rem;
          }
        }
        .advantage {
          div {
            span {
              color: #333;
              float: left;
              display: block;
              padding-top: .14rem;
              font-size: .12rem;
              i {
                display: block;
                float: left;
                width: 0.12rem;
                height: 0.14rem;
                padding-right: 0.11rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }

            p {
              padding: 0.09rem 0.1rem;
              background: #8dcff4;
              color: #fff;
              float: left;
              margin: 0.09rem 0.1rem 0;
              box-shadow: 0px 0.01rem 0.02rem 0px 
                rgba(0, 0, 0, 0.18);
              border-radius: .01rem;
            }
          }
        }
      }
    }
  }
  .all-news {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    margin-top: 0.1rem;
    padding-bottom: .1rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .news-text {
      padding: 0.1rem 0.1rem .13rem;
      color: #888;
      ul {
        margin-bottom: 0;
        li {
          line-height: 0.25rem;
          width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      
    .information_con_btm {
          // margin: .18rem;
          text-align: center;
          img {
            width: .24rem;
            
          }
    }
    }
  }
  .all-environment {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    margin-top: 0.1rem;
    padding-bottom: 0.05rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    ul {
      padding: 0.1rem 0.1rem 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 0rem;
      li {
        width: 1.63rem;
        height: 1.64rem;
        background: rgba(234, 233, 231);
        border-radius: .02rem;
        overflow: hidden;
        color: #888;
        margin-top: .1rem;
        div {
          width: 100%;
          height: 1.35rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 0.12rem;
          padding: 0.05rem;
          box-sizing: content-box;
          text-align: center;
        }
      }
    }
    .information_con_btm {
          margin: .1rem;
          text-align: center;
          img {
            width: .24rem;
            
          }
    }
  }
  .all-issue {
    width: 3.55rem;
    background: #fff;
    border-radius: 0.05rem;
    overflow: hidden;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
    .introduction-header {
      width: 100%;
      img {
        width: 100%;
      }
    }
    ul {
      padding: 0 0.1rem;
      font-size: 0.1rem;
      color: #888;
      li {
        p:nth-child(1) {
          padding: 0.08rem 0;
          span {
            border-radius: 50%;
            color: rgba(98, 154, 243);
            float: right;
            display: block;
            height: 0.11rem;
            width: 0.11rem;
            text-align: center;
            line-height: 0.1rem;
            border: 0.01rem solid;
            margin-top: 0.01rem;
          }
        }
        p:nth-child(2) {
          background: #eaeaea;
          padding: 0.08rem;
          line-height: .15rem;
        }
      }
    }
  }

  .information_con_btm {
          // margin: .18rem;
          text-align: center;
          img {
            width: .24rem;
            
          }
  }
  .foot {
    font-size: 0.1rem;
    color: #888;
    padding: 0.2rem 0 .1rem;
    text-align: center;
    margin: auto;
  }
}
</style>