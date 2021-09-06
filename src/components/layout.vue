<template>
  <div id="app">
    <Header />
    <div class="nav">
      <ul class="clearfix">
        <li v-for="(item, index) of navList" @click="routerLink(item.path)" :class="{'active': item.active}" :key="index" class="">{{ item.title }}</li>
      </ul>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  data () {
    return {
      navList: [
        {
          title: 'HOME',
          path: '/',
          active: false
        },
        {
          title: 'ABOUT US',
          path: '/AboutUs',
          active: false
        },
        {
          title: 'PROJECTS',
          path: '/Projects',
          active: false
        },
        {
          title: 'GET INVOLVED',
          path: '/GetInvolved',
          active: false
        },
        {
          title: 'DONATE',
          path: '/Donate',
          active: false
        }
      ]
    }
  },
  components: {
    Footer,
    Header
  },
  methods: {
    routerLink (link) {
      this.$router.push(link)
    }
  },
  watch: {
    $route: {
      handler: function () {
        console.log(this.$route.path)
        this.navList.filter((item) => {
          if (this.$route.path === '/Contact' && item.path === '/AboutUs') {
            item.active = true
            return item
          }
          if (this.$route.path === '/Address' && item.path === '/Donate') {
            item.active = true
            return item
          }
          if (this.$route.path === '/ProjectsDetails' && item.path === '/Projects') {
            item.active = true
            return item
          }
          if (item.path === this.$route.path) {
            item.active = true
            return item
          } else {
            item.active = false
            return item
          }
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-width: 930px;
}
.nav{
  padding-top: 36px;
}
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    width: 129px;
    text-align: center;
    line-height: 44px;
    font-size: 22px;
    font-family: "SansSerifBldFLF";
    cursor: pointer;
    &:hover{
      color: rgb(32, 206, 136);
    }
  }
  li.active{
    color: rgb(32, 206, 136);
  }
}
</style>
