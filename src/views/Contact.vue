<template>
  <div class="contact-container">
    <h1>CONTACT US</h1>
    <ul class="clearfix">
      <li class="li1">
        <div>
          <p>42 Huaizhongxi Rd Shijiazhuang</p>
          <p>Hebei 050000</p>
        </div>
        <div class="mt16">
          <p>86913602@escdu.com</p>
          <p>Tel: 123-456-7890</p>
          <p>Fax: 123-456-7890</p>
        </div>
      </li>
      <li class="li2">
          <input type="text" required placeholder="Name" v-model="input.name">
          <input type="email" required placeholder="Email" v-model="input.email">
          <input type="text" required placeholder="Phone" v-model="input.phone">
      </li>
      <li class="li3">
        <textarea placeholder="Type your message here..." id="" v-model="input.textarea"></textarea>
      </li>
    </ul>
    <div class="btn-container">
      <div class="button" @click="submit">
        Submit
        <p class="btn-1 btn"></p>
        <p class="btn-2 btn"></p>
        <p class="btn-3 btn"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast, Notify } from 'vant'
Vue.use(Toast).use(Notify)
export default {
  name: 'contact',
  data () {
    return {
      input: {
        name: '',
        email: '',
        phone: '',
        textarea: ''
      }
    }
  },
  methods: {
    routerLink () {
      this.$router.push('/Contact')
    },
    submit () {
      if (!this.input.email) {
        Toast('Email is required')
        return false
      }
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(this.input.email)) {
        Toast('Incorrect email format')
        return false
      }
      Notify({ type: 'success', message: 'Thanks for submitting!' })
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-container{
  width: 950px;
  height: 683px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: rgb(234, 234, 234);
  margin: 0 auto;
  h1{
    padding-top: 33px;
    padding-bottom: 40px;
    text-align: center;
    font-family: 'FrederickatheGreat-Regular';
    font-size: 28px;
    line-height: 28px;
  }
  ul{
    width: 100%;
    display: flex;
    li{
      height: 96px;
    }
    .li1{
      flex: 1;
      width: 200px;
      p{
        font-size: 13px;
        line-height: 16px;
        font-family: "Tahoma";
      }
    }
    .li2{
      width: 322px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      input{
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        padding: 3px 0 3px 24px;
      }
    }
    .li3{
      width: 324px;
      textarea{
        resize: none;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin-left: 5px;
        padding: 10px 3px 3px 24px;
      }
    }
  }
  .btn-container{
    margin-top: 10px;
    width: 100%;
    position: relative;
    height: 25px;
  }
  .button{
    position: absolute;
    right: 0;
    background-color: rgb(237, 97, 36);
    width: 89px;
    height: 25px;
    cursor: pointer;
    font-size: 11px;
    text-align: center;
    line-height: 25px;
    color: #fff;
    .btn{
      position: absolute;
      right: -8px;
      width: 0;
      height: 0;
    }
    .btn-1{
      top: 0;
      border: 4px solid transparent;
      border-top: 4px solid rgb(237, 97, 36);
      border-left: 4px solid rgb(237, 97, 36);
    }
    .btn-2{
      top: 5px;
      right: -16px;
      border: 8px solid transparent;
      border-left: 8px solid rgb(237, 97, 36);
    }
    .btn-3{
      bottom: 0;
      border: 4px solid transparent;
      border-left: 4px solid rgb(237, 97, 36);
      border-bottom: 4px solid rgb(237, 97, 36);
    }
  }
  .button:hover{
    background-color: rgb(249, 191, 81);
    .btn-1{
      border-top: 4px solid rgb(249, 191, 81);
      border-left: 4px solid rgb(249, 191, 81);
    }
    .btn-2{
      border-left: 8px solid rgb(249, 191, 81);
    }
    .btn-3{
      border-left: 4px solid rgb(249, 191, 81);
      border-bottom: 4px solid rgb(249, 191, 81);
    }
  }
}
.mt16{
  margin-top: 16px;
}
</style>
