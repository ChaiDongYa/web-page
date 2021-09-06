<template>
  <div class="footer-container">
    <div class="footer-container_item">
      <p class="w125">Call us:</p>
      <p class="w125">123-456-7890</p>
    </div>
    <div class="footer-container_line">
    </div>
    <div class="footer-container_item ml30">
      <p class="w380">Find us: </p>
      <p class="w380">42 Huaizhongxi Rd Shijiazhuang Hebei 050000</p>
    </div>
    <div class="footer-container_line">
    </div>
    <div class="footer-container_item ml30 mr30">
      <p class="w182">© 2021 by Woodpeckers</p>
      <p class="w182">Charity </p>
    </div>
    <div class="footer-container_line">
    </div>
    <div class="footer-container_item">
      <div class="img-container ml30">
        <a href="http://www.twitter.com/wix" target="_blank">
          <img class="" src="../assets/images/Twitter.webp" alt="Twitter">
        </a>
        <a href="https://www.youtube.com/user/Wix" target="_blank">
          <img class="ml5" src="../assets/images/youtube.webp" alt="youtube">
        </a>
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fwix" target="_blank">
          <img class="h20" src="../assets/images/facebook.png" alt="facebook">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-container{
  width: 100%;
  height: 144px;
  margin-top: 20px;
  background-color: #000;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  box-sizing: border-box;
  &_item{
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 16px;
      font-family: "Palatino Linotype", serif;
      color: #fff;
      font-weight: 400;
      line-height: 22px;
    }
    .img-container{
      width: 85px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img{
        width: 25px;
        height: 25px;
      }
      .h20{
        height: 20px;
      }
    }

  }
  &_line{
    width: 1px;
    height: 45px;
    background-color: #fff;
  }
}
.w125 {
  width: 125px;
}
.w380{
  width: 380px;
}
.ml30{
  margin-left: 30px;
}
.mr30{
  margin-right: 30px;
}
.w182{
  width: 182px;
}
.ml5{
  margin-left: 5px;
}

</style>
