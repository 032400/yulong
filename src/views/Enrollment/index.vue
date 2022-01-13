<template>
  <div class="details">
    <!-- <Headerlun /> -->
    <div class="lun_warp">
      <div class="lun_con">
        <img src="@/assets/img/航空院校招生面试问题/面试问题.png" alt="" />
      </div>
    </div>
    <page />
    <div class="requirement">
      <div class="requ">
        <div class="requ-top">
          <span>航空院校面试招生问题</span>
          
          <div class="circular"></div>
          <p>REQUIREMENTS</p>
        </div>
        <div class="img">
         <img src="@/assets/img/航空院校招生面试问题/航空院校面试招生问题？_03.jpg" alt="" />
        </div>
        <div class="dotted">
          <p>
           航空服务专业的高就业率吸引了大批的考生填报，而现代的考试都开始增加了面试环节，航空服务也不例外。所以在参加航空学校面试还是在参加航空服务招聘都要为面试做好充分的准备。比如，考生该如何做航空学校面试准备呢?考官会问到什么问题?航空学校面试需不需要用到英语?下面，为广大考生在准备航空学校面试时提出几点建议。
          </p>
          <div class="imgs">
            <img src="@/assets/img/公共/航空专业详情页_04.jpg" alt="" />
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_03.png" alt="" />
          </div>
          <div class="right">
            <span class="orange">航空学校面试：</span>
            <span
              >自我介绍要有信心，相信自己又充分的准备，能较好的完成面试。这就不得不提到面试前的准备了。面试前的准备工作做的越充分，那么成功的可能性就越大。</span
            >
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_06.png" alt="" />
          </div>
          <div class="right">
            <span class="blue">航空学校面试：</span>
            <span
              >自我介绍回答提问前，先整理思路，尽量做到有调理，又重点的阐述自己的看法，尽量用简洁的语言，但要以讲清楚为原则!不要一味的追求简洁而，没有把问题讲清楚。</span
            >
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_03_08.png" alt="" />
          </div>
          <div class="right">
            <span class="green">航空学校面试：</span>
            <span
              >自我介绍掌握适当的语言技巧，谈吐时口齿清楚，音量适中，语速适中，用词文明，不说脏话粗话大家都知道啦，尤其是不要出现一些口头禅，交谈时主要考官的注意力，他正集中注意力在听，说明对你谈的一些东西感兴趣，不妨多谈几句，若他心不在焉，则应该尽快停止。当然这也需要考验你的观察能力啦。</span
            >
          </div>
        </div>
      </div>
    </div>

    
    <div class="cdsa">
      <aviation />
    </div>
    
  </div>
</template>

<script>
import Data from "@/views/details/data.vue";
import Headerlun from "@/components/header-lun/header_lun.vue";
import Aviation from "@/views/homes/major/aviation.vue";
import Five from "@/views/homes/Five/index.vue";
import Page from "@/components/page/index.vue";

export default {
  components: { Data, Headerlun, Aviation, Page, Five },
  data() {
    return {
      visible: false,
      size: "default",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        names: "",
        numbers: "",
        regions: undefined,
        dates: undefined,
        educations: undefined,
        id_numbers: undefined,
        descs: "",
      },
       rules: {
        names: [
          {
            required: true,
            message: "请填写姓名",
            trigger: "blur",
          },
          {
            pattern:/^[\u4E00-\u9FA5]{2,4}$/,
            message: "请填写正确的姓名",
            trigger: "blur",
          },
        ],
        numbers: [
          {
            required: true,
            message: "请填写手机号",
            trigger: "blur",
          },
          {
            pattern:/^[1][3,4,5,7,8][0-9]{9}$/,
            message: "请填写正确的手机号",
            trigger: "blur",
          },
        ],
        regions: [
          {
            required: true,
            message: "请选择课程",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "请选择课程",
            trigger: "blur",
          },
        ],
        dates: [
          {
            required: true,
            message: "请选择出生年月",
            trigger: "change",
          },
        ],
        educations: [
          {
            required: true,
            message: "请选择学历",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "请选择学历",
            trigger: "blur",
          },
        ],
        id_numbers: [
          {
            required: true,
            message: "请填写身份证号",
            trigger: "blur",
          },
          {
            pattern:/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/,
            message: "请填写正确的身份证号",
            trigger: "blur",
          },
        ],
        descs: [
          {
            required: true,
            message: "请输入您的疑问",
            trigger: "change",
          },

        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
          // console.log(this.form);
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    submit() {
      // console.log(this.value);
    },
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    confirm() {
      this.$confirm({
        title: "Confirm",
        content: "Bla bla ...",
        okText: "确认",
        cancelText: "取消",
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.lun_warp {
  width: 100%;
  height: 1.5rem;
  .lun_con {
    width: 3.75rem;
    height: 1.5rem;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.title_warp {
  width: 100%;
  padding: 0 0.2rem;
  margin: 0.15rem 0;
  box-sizing: border-box;
  p {
    width: 100%;
    text-align: left;
    span {
      font-size: 0.14rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.07rem;
      letter-spacing: 0px;
      color: #888888;
    }
    .hang {
      margin-left: 0.05rem;
      font-family: PingFang-SC-Medium;
      font-size: 0.14rem;
      font-weight: normal;
      letter-spacing: 0px;
      color: #b0b0b0;
    }
  }
}
.requirement {
  width: 100%;
  // padding: 0.15rem 0.1rem;
  padding: 0 0.1rem 0.15rem 0.1rem;
  box-sizing: border-box;
  .requ {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    .requ-top {
      width: 100%;
      padding: 0.2rem 0;
      font-size: 0.18rem;
      font-weight: 700;
      text-align: center;
      box-sizing: border-box;
      span{
        color: #000;
      }
      .circular {
        width: 0.04rem;
        height: 0.04rem;
        border-radius: 50px;
        background: rgb(102, 102, 102);
        margin: 0.05rem auto;
        position: relative;
      }
      .circular::before {
        content: "";
        position: absolute;
        display: block;
        right: 0.07rem;
        width: 0.5rem;
        top: 0.013rem;
        border-bottom: 1px solid rgb(102, 102, 102);
      }
      .circular::after {
        content: "";
        position: absolute;
        display: block;
        left: 0.07rem;
        width: 0.5rem;
        top: 0.013rem;
        border-bottom: 1px solid rgb(102, 102, 102);
      }
      p {
        font-size: 0.16rem;
        color: rgb(102, 102, 102);
      }
    }
    .img {
      width: 100%;
      height: 1.45rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dotted {
      width: 3.3rem;
      margin: 0.15rem 0.1rem 0.2rem;
      border-radius: 15px;
      border: 1px dashed rgb(153, 153, 153);
      padding: 0.1rem 0.13rem;
      box-sizing: border-box;
      text-indent: 0.25rem;
      position: relative;
      font-size: 0.12rem;
      color: rgb(51, 51, 51);
      .imgs {
        width: 0.13rem;
        height: 0.09rem;
        position: absolute;
        bottom: -0.14rem;
        left: 50%;
        margin-left: -0.065rem;
        img {
          width: 100%;
          height: 100%;
          float: left;
        }
      }
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
          width: 100%;
          height: 0.53rem;
        }
      }
      .right {
        width: 2.53rem;
        float: left;
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
}
.inline {
    
  overflow: hidden;
  width: 3.55rem;
  margin: 0 auto 0.15rem;
  border-radius: 0.05rem;
  box-shadow: 0 0 8px #ccc;
  background: #fff;
  .read-top {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .aviation_text {
    border-radius: 0.04rem;
    // margin: 0 0.1rem;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
    overflow: hidden;
    background-color: #fff;
    ::v-deep .ant-form-item-control {
      display: flex;
      flex-direction: column;
      width: 3.55rem;
      // width: 2.73rem;
      // margin: 0 auto;
    }
    .aviation_text_content {
      display: flex;
      flex-direction: column;
      padding-top: 0.15rem;
      .aviation_text_input {
        display: flex;
        // justify-content: center;
        align-items: center;
        margin-bottom: 0.1rem;
        .span {
          width: 0.8rem;
          line-height: 0.35rem;
          color: #454444;
          margin-left: 0.3rem;
          em {
            color: #e76888;
          }
        }
        .ant-calendar-picker {
          width: 2rem;
        }
        input {
          // width: 2.52rem;
          width: 2rem;
          border-radius: 0;
          height: 0.35rem;
          color: #000;
        }
      }
      .aviation_textarea {
        display: flex;
        span {
          width: 0.75rem;
          height: 0.35rem;
          font-family: PingFang-SC-Medium;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          // color: #333333;
          padding-left: 0.05rem;
          line-height: 0.35rem;
          color: #454444;
          margin-left: 0.3rem;
        }
        .aviation_textarea_text {
          border: 1px solid #cbcbcb;
          width: 2rem;
          textarea {
            width: 1.75rem;
            height: 0.63rem;
            border-radius: 0.01rem;
            padding-left: 0.14rem;
            padding-top: 0.11rem;
            border: none;
            outline: none;
            resize: none;
          }
          textarea::-webkit-input-placeholder {
            /* WebKit browsers*/
            color: #cbcbcb;
          }
        }
      }
      .aviation_text_cascader {
        display: flex;
        // justify-content: center;
        //   align-items: center;
        margin-bottom: 0.1rem;
        .span {
          width: 0.8rem;
          // text-align: center;
          line-height: 0.35rem;
          color: #454444;
          margin-left: 0.3rem;
          em {
            color: #e76888;
          }
        }
        .ant-cascader-picker {
          width: 2rem;
        }
        .from_three {
          position: relative;
          height: 0.35rem;
          .ant-select-selection-selected-value {
            display: inline-block !important;
            padding-left: 0.05rem;
            color: #000 !important;
          }
        }
      }
      .bottom_jick {
        margin: 0.15rem 0 auto;
        .aviation_text_button {
          background: #1d6da5;
          width: 2.73rem;
          height: 0.44rem;
          display: block;
          // margin: 0.1rem 0.5rem 0 0.5rem;
          margin: 0 auto;
          line-height: 0.44rem;
          text-align: center;
          font-size: 0.18rem;
          color: #e8ffff;
        }
        .submit-size {
          height: 0.13rem;
          text-align: center;
          padding-bottom: 0.15rem;
          display: block;
          // padding: 0 0 0.03rem 0;
          padding-top: 0.05rem;
          font-family: PingFang-SC-Medium;
          font-weight: normal;
          font-stretch: normal;
          line-height: 18px;
          letter-spacing: 0px;
          color: #888888;
        }
      }
    }
  }
  ::v-deep .ant-select-selection {
    border-radius: 0 !important;
    z-index: 99;
    font-size: 14px;
    padding-left: 0.05rem;
  }
  ::v-deep .ant-select-selection--single {
    height: 0.35rem;
    i {
      svg {
        width: 10px;
        height: 9px;
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 18px;
        letter-spacing: 0px;
        color: #888888;
      }
    }
  }
  ::v-deep .ant-select-selection__rendered {
    line-height: 0.35rem;
  }
  ::v-deep .ant-calendar-picker-input {
    height: 0.35rem;
  }
  ::v-deep .ant-input {
    height: 0.35rem;
    display: inline-block;
    padding-left: 0.15rem;
    color: #000;
    margin-right: 0.38rem;
    border-radius: 0;
  }
  .ant-form-item {
    margin: 0;
  }
  ::v-deep .ant-col-offset-4 {
    margin: 0 !important;
  }
  ::v-deep .ant-form-explain {
    text-align: center;
    padding-left: 0.25rem;
    padding-bottom: 0.05rem;
  }
}
.cdsa {
  overflow: hidden;
  width: 3.55rem;
  margin: 0 auto 0.15rem;
  border-radius: 0.05rem;
  box-shadow: 0 0 8px #ccc;
  background: #fff;
}
.read {
  width: 3.55rem;
  margin: 0 auto 0.15rem;
  background: #fff;
  padding-bottom: 0.3rem;
  border-radius: 5px;
  overflow: hidden;
  .read-top {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .data {
    width: 100%;
    .data-cont {
      padding-left: 0.15rem;
      margin-top: 0.2rem;
      height: 0.35rem;
      .left {
        width: 0.47rem;
        height: 0.35rem;
        border-right: 1px solid rgb(204, 204, 204);
        font-size: 0.09rem;
        float: left;
        color: rgb(153, 153, 153);
        text-align: center;
        p:first-of-type {
          font-size: 0.2rem;
          height: 0.2rem;
          line-height: 0.2rem;
        }
      }
      .right {
        float: left;
        margin-left: 0.08rem;
        line-height: 0.13rem;
        color: rgb(102, 102, 102);
        font-size: 0.13rem;
        p:first-of-type {
          font-size: 0.15rem;
          line-height: 0.15rem;
          color: rgb(51, 51, 51);
          margin-bottom: 0.07rem;
        }
      }
    }
  }
}
</style>
