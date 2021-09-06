<template>
  <div class="getInvolved-container">
    <h1>GET INVOLVED</h1>
    <ul class="ul-main">
      <li v-for="(item, index) of navList" :key="index">
        <div class="realtive">
          <div class="realtive-container">
            <div class="realtive-container_left"></div>
            <div class="realtive-container_right"></div>
            {{ item.title }}
          </div>
        </div>
        <img :src="item.img" alt="">
        <div class="content">
          {{ item.content }}
        </div>
        <h2>{{ item.h2 }}</h2>
        <div class="button" @click="routerLink">
          {{ item.button }}
          <p class="btn-1 btn"></p>
          <p class="btn-2 btn"></p>
          <p class="btn-3 btn"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'getInvolved',
  data () {
    return {
      navList: [
        {
          img: require('../assets/images/get-1.webp'),
          title: 'VOLUNTEERING',
          content: 'Join the woodpecker organization and become a volunteer. You will have more opportunities to participate in donation activities in poor areas, and you will have a closer understanding of the current situation and their lives in poor areas. Through these practical activities, you will gain many unforgettable memories.',
          h2: 'VOLUNTEER APPLICATION',
          button: 'APPLY TODAY'
        },
        {
          img: require('../assets/images/get-2.webp'),
          title: 'EDUCATORS',
          content: 'Join the woodpecker organization and become a charity educator. This requires you to have some knowledge about charitable donation, and you may need to have engaged in relevant charitable work before. If you meet the above conditions, our organization welcomes you to share your knowledge and experience with more people in need.',
          h2: 'EDUCATOR APPLICATION',
          button: 'FIELD TRIPS FEEDBACK'
        }
      ]
    }
  },
  methods: {
    routerLink () {
      this.$router.push('/Contact')
    }
  }
}
</script>

<style lang="scss" scoped>
.getInvolved-container{
  width: 950px;
  height: 734px;
  background-color: rgb(230, 222, 202);
  border-radius: 20px 0 20px 0;
  margin: 0 auto;
  h1{
    padding-top: 33px;
    padding-bottom: 40px;
    text-align: center;
    font-family: 'FrederickatheGreat-Regular';
    font-size: 28px;
    line-height: 28px;
  }
  .ul-main{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    li{
      width: 274px;
      .realtive{
        width: 100%;
        height: 45px;
        position: relative;
        z-index: 10;
        .realtive-container{
          width: 304px;
          height: 45px;
          left: -15px;
          position: absolute;
          text-align: center;
          line-height: 45px;
          font-family: "Palatino Linotype";
          font-size: 16px;
          background-color: rgb(249, 191, 81);
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
        }
      }
      img{
        width: 274px;
        height: 291px;
        position: relative;
        margin-top: -18px;
      }
      .content{
        margin-top: 20px;
        font-family: 'Tahoma';
        font-size: 13px;
        line-height: 16px;
      }
      h2{
        margin-top: 30px;
        color: rgb(237, 97, 36);
        line-height: 22px;
        font-size: 16px;
      }
      .button{
        background-color: rgb(237, 97, 36);
        position: relative;
        height: 30px;
        width: 140px;
        margin: 30px auto 0;
        cursor: pointer;
        font-size: 11px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-family: "Tahoma";
        .btn{
          position: absolute;
          right: -8px;
          width: 0;
          height: 0;
        }
        .btn-1{
          top: 0;
          border: 5px solid transparent;
          border-top: 5px solid rgb(237, 97, 36);
          border-left: 5px solid rgb(237, 97, 36);
        }
        .btn-2{
          top: 6px;
          right: -16px;
          border: 8px solid transparent;
          border-left: 8px solid rgb(237, 97, 36);
        }
        .btn-3{
          bottom: 0;
          border: 5px solid transparent;
          border-left: 5px solid rgb(237, 97, 36);
          border-bottom: 5px solid rgb(237, 97, 36);
        }
      }
      .button:hover{
        background-color: rgb(249, 191, 81);
        .btn-1{
          border-top: 5px solid rgb(249, 191, 81);
          border-left: 5px solid rgb(249, 191, 81);
        }
        .btn-2{
          border-left: 8px solid rgb(249, 191, 81);
        }
        .btn-3{
          border-left: 5px solid rgb(249, 191, 81);
          border-bottom: 5px solid rgb(249, 191, 81);
        }
      }
    }
  }
}
</style>
