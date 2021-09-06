<template>
  <div class="header-container">
    <img src="../assets/images/logo.webp" alt="">
    <h1 @click="routerLink()">Woodpeckers</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    routerLink () {
      if (this.$route.path === '/') {
        return
      }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container{
  padding-top: 58px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img{
    width: 65px;
    height: 60px;
  }
  h1{
    margin-top: 8px;
    font-family: "FrederickatheGreat-Regular";
    font-size: 45px;
    cursor: pointer;
  }
}
</style>
