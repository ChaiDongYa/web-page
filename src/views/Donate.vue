<template>
  <div class="Donate-container">
    <h1>DONATE</h1>
    <p class="introduc">Introduction to donation function:</p>
    <p class="introduc">
      Users can choose to donate materials or money after logging in according
      to their wishes. No matter what kind of transaction method, the website
      will completely store the user's transaction information. After the
      donation is successful, the user's email will receive the notice sent by
      us, which will contain the project list and some donation related project
      reports.
    </p>
    <ul class="ul-main" v-show="!isLogin">
      <li>
        <h2>STEP1</h2>
        <div class="container">
          <p>
            Select donate methods
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>

      <li>
        <h2>STEP2</h2>
        <div class="container">
          <p>
            Login account
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>
      <li>
        <h2>STEP3</h2>
        <div class="container">
          <p>
            Donate money / materials
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>
      <li>
        <h2>STEP4</h2>
        <div class="container">
          <p>
            Email receiving notifications
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>
    </ul>
    <div class="button" v-show="!isLogin" @click="donBtn()">
      DONATE
    </div>
    <ol class="ol-main" v-show="isLogin">
      <li @click="routerLink('/Address')">
        <div class="container">
          <p>
            clothes
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>
      <li @click="routerLink('/Address')">
        <div class="container">
          <p>
            electronic product
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>
      <li @click="routerLink('/Address')">
        <div class="container">
          <p>
            Books / textbooks
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>
      <li>
        <div class="container" @click="payClick()">
          <p>
            money
          </p>
          <div class="container_left"></div>
          <div class="container_right"></div>
        </div>
      </li>
    </ol>
    <el-dialog
      title="Money"
      :visible.sync="dialogVisible"
      width="760px"
      :before-close="handleClose"
    >
      <img src="../assets/images/pay.jpeg" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">Cancel</el-button>
        <el-button type="primary" size="small" @click="dialogSubmit()"
          >Submit</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCookie } from '@/until/index.js'
export default {
  name: 'Donate',
  data () {
    return {
      dialogVisible: false,
      navList: [
        {
          img: require('../assets/images/pro-1.webp'),
          title: 'PROJECT 1',
          content:
            'Recently, director Li Zhaosong of Longyan Bureau led some party members to carry out poverty alleviation visits and condolences in Pingshang village, Luofang Township, Liancheng County.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-2.webp'),
          title: 'PROJECT 2',
          content:
            'Baihe County in the southeast of Shaanxi Province, China is an underdeveloped agricultural county. The overall level of economic and social development in the county is not high. It is difficult for the poor to increase their incomes, and they are in great need of help from outsiders.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-3.webp'),
          title: 'PROJECT 3',
          content:
            'The research team of the Chinese Academy of Social Sciences went deep into Danfeng County in Southeast Shaanxi and investigated the poverty alleviation and development work in Danfeng County.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-4.webp'),
          title: 'PROJECT 4',
          content:
            'The reporter visited a poverty-stricken area in Hebei, China, to investigate the learning situation of the children there, and took this photo while they were in class. It can be seen that the learning environment of local students is not very good, only a few chairs and tables.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-5.webp'),
          title: 'PROJECT 5',
          content:
            "Haohao's grandmother Liu Yumei is over 80 years old. In recent years, the cerebellum has shrunk and the treatment is ineffective. Later, she can hardly take care of herself. Even walking is a problem.",
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-6.webp'),
          title: 'PROJECT 6',
          content:
            'Jinyang county has been listed as a key county supported by the state. Getting rid of poverty and becoming rich has become the long cherished wish of the people of all ethnic groups in the county. At the same time, it has also become the unremitting pursuit of the cadres and people in the county.',
          button: 'learn more'
        }
      ]
    }
  },
  computed: {
    isLogin () {
      return getCookie('isLogin')
    }
  },
  mounted () {
    console.log(this.isLogin)
  },
  methods: {
    routerLink (link) {
      this.$router.push(link)
    },
    donBtn () {
      if (!this.isLogin) {
        this.$router.push(`/Login?returnUrl=${'/Donate'}`)
      }
    },
    payClick () {
      this.dialogVisible = true
    },
    dialogSubmit () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Donate-container {
  width: 950px;
  height: 645px;
  padding: 0 117px;
  box-sizing: border-box;
  background-color: rgb(230, 222, 202);
  border-radius: 20px 0 20px 0;
  margin: 0 auto;
  h1 {
    padding-top: 33px;
    padding-bottom: 40px;
    text-align: center;
    font-family: "FrederickatheGreat-Regular";
    font-size: 28px;
    line-height: 28px;
  }
  .introduc {
    font-size: 15px;
    font-family: "Tahoma";
    line-height: 18px;
  }
  .ul-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 57px;
    li {
      width: 153px;
      display: flex;
      height: 200px;
      align-items: center;
      flex-direction: column;
      h2 {
        // font-family: "SansSerifBldFLFCond";
        font-family: "anton";
        font-weight: bolder;
        font-size: 40px;
        margin-bottom: 30px;
      }
      .container {
        width: 100%;
        height: 101px;
        text-align: center;
        font-family: "Palatino Linotype";
        font-size: 16px;
        background-color: rgb(249, 191, 81);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        p {
          line-height: 22px;
          height: 44px;
          font-size: 15px;
          font-family: "Tahoma";
        }
        &_left {
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          bottom: -14px;
          border: 7px solid transparent;
          border-top: 7px solid rgb(164, 126, 54);
          border-right: 7px solid rgb(164, 126, 54);
        }
        &_right {
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
  }
  .button {
    width: 170px;
    height: 60px;
    line-height: 60px;
    background-color: rgb(27, 91, 63);
    cursor: pointer;
    transition-duration: 0.2s, 0s;
    border-radius: 50px;
    margin: 70px auto 0;
    text-align: center;
    font-size: 14px;
    color: rgb(255, 240, 148);
    &:hover {
      font-style: italic;
      letter-spacing: 2px;
      transform: 1s;
    }
  }
  .ol-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 87px;
    li {
      width: 153px;
      display: flex;
      height: 200px;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      h2 {
        // font-family: "SansSerifBldFLFCond";
        font-family: "anton";
        font-weight: bolder;
        font-size: 40px;
        margin-bottom: 30px;
      }
      .container {
        width: 100%;
        height: 101px;
        text-align: center;
        font-family: "Palatino Linotype";
        font-size: 16px;
        background-color: rgb(249, 191, 81);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        p {
          line-height: 22px;
          height: 44px;
          font-size: 15px;
          font-family: "Tahoma";
        }
        &_left {
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          bottom: -14px;
          border: 7px solid transparent;
          border-top: 7px solid rgb(164, 126, 54);
          border-right: 7px solid rgb(164, 126, 54);
        }
        &_right {
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
    li:hover {
      color: rgb(27, 91, 63);
    }
  }
}
</style>
