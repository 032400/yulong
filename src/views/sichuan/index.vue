<template>
  <div class="aviation_text">
    <div class="aviation_text_header">
      <a href="">
        <img src="@/assets/img/四川外国语大学/有问必答_03.jpg" alt="" />
      </a>
    </div>
    <div class="aviation_text_content">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="name" label="" prop="name">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>学生姓名</span>
            <a-input
              v-model="form.name"
              placeholder="请填写姓名"
              @blur="
                () => {
                  $refs.name.onFieldBlur();
                }
              "
            ></a-input>
          </div>
        </a-form-model-item>
        <a-form-model-item ref="region" label="" prop="region">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>手机号码</span>
            <a-input
              v-model="form.region"
              placeholder="请填写手机号码"
              @blur="
                () => {
                  $refs.region.onFieldBlur();
                }
              "
            ></a-input>
          </div>
        </a-form-model-item>
        <a-form-model-item ref="date1" label="" required prop="date1">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>出生年月</span>
            <a-date-picker
              v-model="form.date1"
              type="date"
              style="height: 0.35rem; color: #000 !important"
              :size="size"
              placeholder="请选择出生年月"
              @blur="
                () => {
                  $refs.date1.onFieldBlur();
                }
              "
            />
          </div>
        </a-form-model-item>

        <a-form-model-item ref="education" label="" style="margin: 0" prop="education">
          <div class="aviation_text_cascader">
            <span class="span"><em>*</em>所选课程</span>
            <div class="from_three">
              <a-select
                v-model="form.education"
                placeholder="请选择课程"
                style="
                  width: 2rem;
                  font-size: 0.15rem;
                  height: 0.35rem;
                  color: #ccc;
                  overflow: hidden;
                "
                 @blur="
                    () => {
                      $refs.education.onFieldBlur();
                    }
                  "
              >
                <a-icon
                  slot="suffixIcon"
                  type="caret-down"
                  style="width: 0.11rem; height: 0.08rem; color: #000"
                />
                <a-select-option value="新媒体">
                  <span style="color: #000">新媒体</span>
                </a-select-option>
                <a-select-option value="新能源">
                  <span style="color: #000">新能源</span>
                </a-select-option>
                <a-select-option value="高铁">
                  <span style="color: #000">高铁</span>
                </a-select-option>
                <a-select-option value="空乘">
                  <span style="color: #000">空乘</span>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </a-form-model-item>

        <a-form-model-item label="" style="margin: 0" ref="id_number" prop="id_number">
          <div class="aviation_text_cascader">
            <span class="span"><em>*</em>当前学历</span>
            <div class="from_three">
              <a-select
                v-model="form.id_number"
                placeholder="请选择学历"
                 @blur="
                    () => {
                      $refs.id_number.onFieldBlur();
                    }
                  "
                style="
                  width: 2rem;
                  font-size: 0.15rem;
                  height: 0.35rem;
                  color: #ccc;
                  overflow: hidden;
                "
              >
                <a-icon
                  slot="suffixIcon"
                  type="caret-down"
                  style="width: 0.11rem; height: 0.08rem; color: #000"
                />
                <a-select-option value="初中">
                  <span style="color: #000">初中</span>
                </a-select-option>
                <a-select-option value="高中">
                  <span style="color: #000">高中</span>
                </a-select-option>
                <a-select-option value="大专">
                  <span style="color: #000">大专</span>
                </a-select-option>
                <a-select-option value="本科">
                  <span style="color: #000">本科</span>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </a-form-model-item>

        <a-form-model-item label="" prop="id_numbers" ref="id_numbers">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>身份证号</span>
            <a-input
              v-model="form.id_numbers"
              placeholder="请填写身份证号"
              @blur="
                    () => {
                      $refs.id_numbers.onFieldBlur();
                    }
                  "
            ></a-input>
          </div>
        </a-form-model-item>

        <a-form-model-item label="" prop="desc" ref="desc">
          <div class="aviation_textarea">
            <span>您的疑问</span>
            <div class="aviation_textarea_text">
              <textarea
                v-model="form.desc"
                name=""
                id=""
                cols="30"
                rows="10"
                style="color: #000"
                placeholder="请填写您的疑问"
                @blur="
                    () => {
                      $refs.desc.onFieldBlur();
                    }
                  "
              >
              </textarea>
            </div>
          </div>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <!-- <a-button type="primary" @click="onSubmit"> -->
          <div class="bottom_jick">
            <div class="aviation_text_button" @click="onSubmit">
              <span>立即提交</span>
            </div>
            <div class="submit-size">
              <div>
                <span @click="showModal">《隐私保障》</span>
              </div>
              <a-modal
                v-model="visible"
                title="隐私保障"
                ok-text="确认"
                cancel-text="取消"
                @ok="hideModal"
              >
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
              </a-modal>
              <br />
              <br />
            </div>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      size: "default",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        number: "",
        region: undefined,
        date1: undefined,
        education: undefined,
        id_number: undefined,
        desc: "",
      },
      rules: {
        name: [
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
        region: [
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
        date1: [
          {
            required: true,
            message: "请选择出生年月",
            trigger: "change",
          },
        ],
        education: [
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
        id_number: [
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
        desc: [
          {
            required: true,
            message: "请填写您的疑问",
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
          console.log(this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    submit() {
      console.log(this.value);
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
.aviation_text {
  border-radius: 0.04rem;
  // margin: 0 0.1rem;
  margin-top: .15rem;
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
        margin-top: .15rem;
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
        // padding: 0 0 0.03rem 0;
        // padding-top: .05rem;
        padding-bottom: .15rem;
        height: 0.13rem;
        text-align: center;
        // margin-bottom: 0.05rem;
        padding-top: .05rem;
        display: block;
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
</style>