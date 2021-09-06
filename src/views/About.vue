<template>
  <div class="about-container">
    <h1>ABOUT US</h1>
    <p class="title mb20">
      Woodpecker charity donation organization is a Chinese non-profit charity organization organized by volunteers from all over the world, which was officially established in July 2021. We have combined "fund-raising" with "material donation" to create a service model that is convenient for all donors to provide help. We advocate "donating to poor areas as soon as possible" and encourage people to donate idle goods and funds to woodpecker organizations. After receiving online donations, the organization will invest these donations to poor areas and poor people as soon as possible; We hope that through our "charity intermediary organization", we can better contact donors and the poor and strengthen their communication.
    </p>
    <p class="title mb20">
      In addition, we hope that more people will join our organization in the future, whether you are students, educators or other groups. We all hope that everyone will lend a helping hand to help the people in these poor areas get rid of their current difficulties.
    </p>
    <img src="../assets/images/about.webp" alt="">
    <div class="relative">
      <div class="relative-content">
        <div class="relative-content_left"></div>
        OUR BRANCHES
        <div class="relative-content_right"></div>
      </div>
    </div>
    <div class="address">
      <p>Shijiazhuang, Hebei</p>
      <p>Chengde, Hebei</p>
      <p>Guangzhou, Guangdong</p>
      <p>Jinan, Shandong</p>
      <p>Nanjing, Jiangsu</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style lang="scss" scoped>
.about-container{
  width: 950px;
  height: 933px;
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
  .title{
    font-family: 'Tahoma';
    font-size: 15px;
    width: 695px;
    margin: 0 auto;
    line-height: 21px;
  }
  .mb20{
    margin-bottom: 20px;
  }
  img{
    display: block;
    width: 508px;
    height: 338px;
    margin: 0 auto 40px;
  }
  .relative{
    width: 100%;
    height: 40px;
    position: relative;
    &-content{
      width: 980px;
      height: 40px;
      position: absolute;
      left: -15px;
      top: 0;
      background-color: rgb(249, 191, 81);
      font-family: 'Palatino Linotype';
      font-size: 16px;
      text-align: center;
      line-height: 40px;
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
  .address{
    margin-top: 30px;
    p{
      text-align: center;
      font-family: 'Tahoma';
      font-size: 13px;
      line-height: 16px;
    }
  }
}
</style>
