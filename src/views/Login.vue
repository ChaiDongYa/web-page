<template>
  <div class="login-container">
    <div class="form-structor">
      <div class="signup" :class="{'slide-up'  : !islogin }">
        <h2 class="form-title" id="signup" @click="signupBtn()"><span>or</span>register</h2>
        <div class="form-holder">
          <input type="text" class="input" placeholder="userNmae" v-model="register.userNmae" />
          <input type="email" class="input" placeholder="Email" v-model="register.email" />
          <input type="password" class="input" placeholder="Password" v-model="register.password" />
        </div>
        <button class="submit-btn" @click="submitRegister">register</button>
      </div>
      <div class="login" :class="{'slide-up'  : islogin }">
        <div class="center">
          <h2 class="form-title" id="login"  @click="loginBtn()"><span>or</span>login</h2>
          <div class="form-holder">
            <input type="email" class="input" placeholder="Email" v-model="login.email" />
            <input type="password" class="input" placeholder="Password" v-model="login.password" />
          </div>
          <button class="submit-btn" @click="submitLogin">login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast, Notify } from 'vant'
import { setCookie } from '@/until/index.js'
Vue.use(Toast).use(Notify)
export default {
  name: 'Login',
  data () {
    return {
      islogin: false,
      register: {
        userNmae: '',
        email: '',
        password: ''
      },
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginBtn () {
      this.islogin = false
    },
    signupBtn () {
      this.islogin = true
    },
    submitRegister () {
      console.log(this.register, this.register.userNmae, this.register.email)
      if (!this.register.userNmae) {
        Toast('userNmae is required')
        return false
      }
      if (!this.register.email) {
        Toast('Email is required')
        return false
      }
      if (!this.register.password) {
        Toast('Password is required')
        return false
      }
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(this.register.email)) {
        Toast('Incorrect email format')
        return false
      }
      Notify({ type: 'success', message: 'Thanks for submitting!' })
      this.islogin = false
    },
    submitLogin () {
      if (!this.login.email) {
        Toast('Email is required')
        return false
      }
      if (!this.login.password) {
        Toast('Password is required')
        return false
      }
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(this.login.email)) {
        Toast('Incorrect email format')
        return false
      }
      setCookie('isLogin', 'true', 1)
      this.$router.push(this.$route.query.returnUrl)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f2029;
}
</style>
