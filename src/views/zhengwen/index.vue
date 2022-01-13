<template>
  <div class="details">
    <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/img/正文/三步了解航空专业01.png" alt="">
        </div>
    </div>
    <page />
    <div class="requirement">
      <div class="requ">
        <div class="requ-top">
          <span>三步</span>
          <span>带你了解航空专业</span>
          <div class="circular"></div>
          <p>REQUIREMENTS</p>
        </div>
        <div class="img">
          <img src="@/assets/img/正文/三步了解航空专业.png" alt="" />
        </div>
        <div class="dotted">
          <p>
            随着航空事业的不断深入，从事航空事业的人也是越来越多，当然航空事业的要求是非常高的，记得当时验飞行员也是百里挑一哦，那么航空专业的要求有哪些?这个问题对于想要上蓝天的人来说是太重要了。
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
            <span class="orange">航空专业是什么：</span>
            <span
              >航空服务专业是主要培养国内外各大航空公司、地方航空公司、民营航空公司、外航服务公司、各大机场，大中型企、事业单位的值机员、安检员、广播员、售票员、行李查询员、贵宾室服务员、空中乘务员、空中保安员等人员的专业。培养掌握必要的航空服务专业基础知识和技能、能从事民航运输服务及航空延伸服务的高级技术应用性专门人才。</span
            >
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_06.png" alt="" />
          </div>
          <div class="right">
            <span class="blue">航空专业有什么要求：</span>
            <span
              >年龄要求：15-22周岁之间的初、高中毕业生，或中专、职高等同等学力者。
                身高要求：男生170-185cm，女生160-175cm。
                体重要求：体重(kg)=「身高(cm)-110」士「身高(cm)-110」x10%。
                视力要求：矫正视力不低于0.4，无色盲、色弱、斜视。听力要求：不低于5米。</span
            >
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_03_08.png" alt="" />
          </div>
          <div class="right">
            <span class="green">学习航空专业可以干什么：</span>
            <span
              >航空服务：分为空中乘务、民航空中安全保卫、民航安全技术管理三大专业；此专业毕业后主要服务于国际国内航空公司和机场等民航单位，从事民航空中乘务、贵宾室服务、安全检查、登机服务、行李查询、民航客运、民航货运等相关工作。
                民航运输：分为民航运输、 航空物流两大专业；此毕业后主要服务于航空公司、机场和民航运输相关企事业单位，从事民航客票销售、旅客运输、载重平衡、行李运输、空港货运等工作。飞机维修：分为飞机机电设备维修 、飞机电子设备维修两大专业；此专业毕业后主要服务于航空公司、机场、民航维修等企业，从事飞机机体、飞机动力装置和飞机电气系统的维护和修理工作，还可以从事相关民航维修管理、质量控制、生产计划等工作或从事一般机电设备的维修和管理。飞机机械和电气设备维护及修理、飞机电子设备维护及修理、飞机发动机部、附件拆装检查及维修、飞机机体结构件损伤检查及结构维修，从事行业等相关工作。</span
            >
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
import Aviation from "@/views/homes/major/aviation.vue";
import Page from "@/components/page/index.vue";

export default {
  components: { Data, Aviation, Page },
  data() {
    return {
      visibles: false,
      size: "default",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        namesr: "",
        numbersr: "",
        regionsr: undefined,
        datesr: undefined,
        educationsr: undefined,
        id_numbersr: undefined,
        descsr: "",
      },
       rules: {
        namesr: [
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
        numbersr: [
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
        regionsr: [
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
        datesr: [
          {
            required: true,
            message: "请选择出生年月",
            trigger: "change",
          },
        ],
        educationsr: [
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
        id_numbersr: [
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
        descsr: [
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
      this.visibles = true;
    },
    hideModal() {
      this.visibles = false;
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
  padding: 0 0.1rem .15rem .1rem;
  box-sizing: border-box;
  .requ {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    .requ-top {
      width: 100%;
      padding: 0.2rem 0.68rem;
      font-size: 0.18rem;
      font-weight: 700;
      text-align: center;
      box-sizing: border-box;
      span:first-of-type {
        color: rgb(51, 102, 204);
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
      height: 0.91rem;
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
  .aviation_text {
      border-radius: 0.04rem;
      // margin: 0 0.1rem;
      margin-top: 0.15rem;
      margin-bottom: 0.15rem;
      overflow: hidden;
      background-color: #fff;
      .aviation_text_header {
            a {
            display: flex;
            border: 0;
            img {
                width: 100%;
                height: .6rem;
            }
            }
        }
      ::v-deep .ant-form-item-control{
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
        .bottom_jick{
            margin: .15rem 0 auto;
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
            padding-top: .05rem;
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
}
</style>
