<template>
  <div class="contact-container">
    <h1>ADDRESS</h1>
    <el-form
      v-loading="loading"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="200px"
      class="demo-ruleForm"
    >
      <el-form-item label="Address" prop="region">
        <el-select
          v-model="ruleForm.region"
          placeholder="Please select the home recycling address"
          style="width: 70%"
        >
          <el-option v-for="(item, index) of ruleFormRegion" :key="index" :label="item.value" :value="item.value"></el-option>
        </el-select>
        <el-button @click="newAddress()">New address</el-button>
      </el-form-item>
      <el-form-item label="Time"  prop="time">
        <el-col :span="24">
          <el-time-select
            style="width: 70%"
            placeholder="Select time"
            v-model="ruleForm.time"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
          >
          </el-time-select>
        </el-col>
      </el-form-item>
      <el-form-item label="remarks">
          <el-input type="textarea" rows="6" style="width: 70%"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" size="small" @click="submitForm('ruleForm')" :disabled="disbledBtn"
          >Confirm appointment</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="Address" :visible.sync="dialogFormVisible" width="700px">
      <el-form :model="form" ref="form" :rules="formRules">
        <el-form-item label="nmae" :label-width="formLabelWidth"  prop="userNmae">
          <el-input v-model="form.userNmae" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="phone" :label-width="formLabelWidth"  prop="phone">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth"  prop="detailedAddress">
          <el-input v-model="form.detailedAddress" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small">Cancel</el-button>
        <el-button type="primary" size="small" @click="dialogSubmit('form')"
          >Submit</el-button
        >
      </div>

    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast, Notify, AddressEdit } from 'vant'

Vue.use(AddressEdit)
Vue.use(Toast).use(Notify)
export default {
  name: 'contact',
  data () {
    return {
      loading: false,
      dialogFormVisible: false,
      disbledBtn: false,
      form: {
        userNmae: '',
        phone: '',
        detailedAddress: ''
      },
      formRules: {
        userNmae: [
          { required: true }
        ],
        phone: [
          { required: true }
        ],
        detailedAddress: [
          { required: true }
        ]
      },
      formLabelWidth: '160px',
      input: {
        name: '',
        email: '',
        phone: '',
        textarea: ''
      },
      ruleFormRegion: [{
        key: 'addres',
        value: 'Zhongshan District, Shanghai'
      }],
      ruleForm: {
        region: '',
        time: ''
      },
      rules: {
        region: [
          { required: true, message: 'Please select the home recycling address', trigger: 'blur' }
        ],
        time: [
          {
            required: true, message: 'Please select a time', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    newAddress () {
      this.dialogFormVisible = true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.ruleForm = {
              region: '',
              time: ''
            }
            Notify({ type: 'success', message: 'Appointment succeeded!' })
            this.disbledBtn = false
            this.loading = false
          }, 1000)
        } else {
          return false
        }
      })
    },
    dialogSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ruleFormRegion.push({
            key: 'addres' + Math.random(),
            value: this.form.detailedAddress
          })
          this.dialogFormVisible = false
          this.form = {
            userNmae: '',
            phone: '',
            detailedAddress: ''
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-container {
  width: 950px;
  height: 683px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: rgb(234, 234, 234);
  margin: 0 auto;
  h1 {
    padding-top: 33px;
    padding-bottom: 40px;
    text-align: center;
    font-family: "FrederickatheGreat-Regular";
    font-size: 28px;
    line-height: 28px;
  }
  .demo-ruleForm {
    width: 80%;
    margin: 0 auto;
    padding-top: 10%;
    box-sizing: border-box;
    background-color: #fff;
    height: 80%;
  }
}
</style>
