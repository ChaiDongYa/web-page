<template>
  <div class="home-container">
    <img alt="homepage" class="homeLogo" src="../assets/images/homepage.webp">
    <div class="home-nav">
      <div class="home-nav_left">
      </div>
      <ul>
        <li v-for="(item, index) of navList" :key="index">
          <img :src="item.img" alt=""  @click="routerLink(item.path)">
          <p class="title">{{ item.title }}</p>
          <p class="name" @click="routerLink(item.path)">{{ item.name }}</p>
        </li>
      </ul>
      <div class="home-nav_right">
      </div>
    </div>
    <div class="home-main">

      <div class="title">
        <p>SUPPORT THE POOR AREAS</p>
      </div>
      <div class="contain">
        <div class="contain-details">
          <p class="alatino mb20">China's poor areas refer to the places where the per capita consumption in some parts of China does not reach the national per capita consumption, which are mainly concentrated in China's central region, western mountainous areas, southwest and northeast regions. Including some mountainous areas in Gansu, Yunnan and Guizhou.</p>
          <p class="alatino">Its characteristics are: bad natural environment; Lack of resources and weak infrastructure; The population is growing too fast and the level of basic social services such as education and health is too low; The level of fiscal revenue is low, and public investment and basic investment are seriously insufficient.</p>
        </div>
        <img src="../assets/images/home-contain1.webp" alt="">
      </div>
      <div class="title">
        <p>SUPPORT THE POOR PEOPLE</p>
      </div>
      <div class="contain">
        <div class="contain-details">
          <p class="mb20">Poverty has become one of the most acute social problems in the world. Political parties, governments and all sectors of society have always attached great importance to poverty, so we should clarify the concept of poverty.</p>
          <p class="mb20">In October 2014, the World Bank released a forecast that the proportion of the world's poor in the global total population is expected to be reduced to less than 10% in 2015, pointing out that after a quarter of a century of unremitting efforts to reduce poverty, the world is closer to the historic goal of ending poverty by 2030.</p>
          <p class="">On February 28, 2017, the statistical bulletin of national economic and social development in 2016 issued by the China Bureau of Statistics said: "calculated according to the rural poverty standard of 2300 yuan per person per year (constant price in 2010), the rural poor population in China in 2016 was 43.35 million, a decrease of 12.4 million over the previous year."</p>
        </div>
        <img class="h293" src="../assets/images/home-contain2.webp" alt="">
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      navList: [
        {
          title: 'ABOUT',
          img: require('../assets/images/home-about.webp'),
          name: '| READ MORE |',
          path: '/AboutUs'
        },
        {
          title: 'PROJECTS',
          img: require('../assets/images/home-pro.webp'),
          name: '| READ MORE |',
          path: '/Projects'
        },
        {
          title: 'DONATE',
          img: require('../assets/images/home-dona.webp'),
          name: '| READ MORE |',
          path: '/Donate'
        },
        {
          title: 'GET INVOLVED',
          img: require('../assets/images/home-get.webp'),
          name: '| READ MORE |',
          path: '/GetInvolved'
        }
      ]
    }
  },
  components: {
  },
  methods: {
    routerLink (link) {
      this.$router.push(link)
    }
  }
}
</script>
<style scoped lang="scss">
.home-container{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .homeLogo{
    width: 950px;
    height: 409px;
  }
  .home-nav{
    width: 980px;
    height: 170px;
    background-color: rgb(249, 191, 81);
    margin: 10px 0;
    position: relative;
    &_left{
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      bottom: -14px;
      border: 7px solid transparent;
      border-top: 7px solid rgb(164, 126, 54);
      border-right: 7px solid rgb(164, 126, 54);
    }
    &_right{
      width: 0;
      height: 0;
      position: absolute;
      right: 0;
      bottom: -14px;
      border: 7px solid transparent;
      border-left: 7px solid rgb(164, 126, 54);
      border-top: 7px solid rgb(164, 126, 54);
    }
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 245px;
        position: relative;
        &::before{
          content: " ";
          width: 1px;
          height: 90%;
          position: absolute;
          right: 0;
          top: 5%;
          color: #fff;
          background-color: #fff;
        }
        img{
          width: 36px;
          height: 36px;
          cursor: pointer;
        }
        .title{
          font-family: "FrederickatheGreat-Regular";
          font-size: 24px;
          line-height: 24px;
          margin: 20px 0;
        }
        .name{
          font-size: 13px;
          color: #fff;
          cursor: pointer;
        }
      }
      li:last-child {
        &::before{
          content: " ";
          width: 1px;
          height: 90%;
          position: absolute;
          right: 0;
          top: 5%;
          color: #fff;
          background-color: transparent;
        }
      }
    }
  }
  .home-main{
    width: 930px;
    height: 910px;
    background-color: rgb(230, 222, 202);
    border-radius: 20px 0 20px 0;
    .title{
      padding: 27px 0 30px 0;
      position: relative;
      height: 113px;
      box-sizing: border-box;
      p{
        position: absolute;
        border-radius: 15px;
        background-color: rgb(255, 140, 98);
        width: 295px;
        height: 46px;
        line-height: 46px;
        left: -10px;
        font-size: 16px;
        text-align: center;
        font-family: "alatino Linotype";
        color: #fff;
      }
    }
    .contain{
      height: 300px;
      width: 100%;
      padding: 0 40px;
      box-sizing: border-box;
      &-details {
        width: 395px;
        float: left;
        p{
          font-size: 13px;
          line-height: 16px;
          color: #000;
          font-family: "Tahoma", tahoma-w01-regular, tahoma-w02-regular;
        }
        p.alatino{
          font-family: "Palatino Linotype", serif;
          font-size: 16px;
          line-height: 20px;
        }
        .mb20{
          margin-bottom: 20px;
        }
      }
      img{
        float: right;
        width: 427px;
        height: 285px;
      }
      .h293{
        height: 293px;
      }
    }
  }
}
</style>
