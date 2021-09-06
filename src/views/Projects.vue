<template>
  <div class="projects-container">
    <h1>PROJECTS</h1>
    <ul class="ul-main">
      <li v-for="(item, index) of navList" :key="index">
        <img :src="item.img" alt="">
        <div>
          <p class="title">{{ item.title }}</p>
          <p class="content">{{ item.content }}</p>
          <div class="button" @click="routerLink(index)">
            Learn more
            <p class="btn-1 btn"></p>
            <p class="btn-2 btn"></p>
            <p class="btn-3 btn"></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      navList: [
        {
          img: require('../assets/images/pro-1.webp'),
          title: 'PROJECT 1',
          //           content: `The condolences group went deep into the homes of three poor households in remote mountain villages, asked them about their family production, living conditions and physical health one by one, encouraged them to maintain an optimistic attitude, actively fight against diseases and difficulties, and discussed more specific assistance measures and convenience service measures with Luofang township cadres and Pingshang village cadres. The condolences group also sent condolences to three poor households and sent the party and government's new year blessings.
          // Longyan Bureau said that it will earnestly implement the work deployment of the party and government at all levels on promoting poverty alleviation, accelerate the "express to the countryside", pay solid attention to the construction of village post stations, and strive to provide more convenient and efficient postal services for the people in mountainous areas.`,
          content: 'Recently, director Li Zhaosong of Longyan Bureau led some party members to carry out poverty alleviation visits and condolences in Pingshang village, Luofang Township, Liancheng County.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-2.webp'),
          title: 'PROJECT 2',
          // content: 'Baihe County, which is located in the southeast of Shaanxi Province, China. It has a total area of 1455 square kilometers, 210,000 mu of commonly used arable land, 11 towns, 113 administrative villages, and 4 communities, with a total population of 210,000, including 187,000 agricultural population, 13,400 poor households, and 35,100 poor population. Baihe is not only a key county for poverty alleviation and development in China, but also a contiguous area for poverty alleviation in the Qinba area of Zhongjia. Among the poverty-stricken counties in China, Baihe County is a typical underdeveloped agricultural county. The overall level of economic and social development in the county is not high, the income of the poor is difficult to increase, and the quality of infrastructure such as rural roads, water, electricity, health, medical care, and communications is poor. Low, the deep-seated contradictions restricting economic development still exist, and the task of poverty alleviation and development is still very arduous. There are 78 impoverished villages in the county. The impoverished population accounts for 18.8% of the rural population, which is 3.8 times the basic level of China and 1.5 times the basic level of the whole province. The extent of poverty has not yet been fundamentally changed. After years of poverty alleviation, although most of the poor have been lifted out of poverty, what is left is some difficult "hard bones". In addition, the natural conditions are poor, the foundation is relatively weak, the cost of poverty alleviation and development is high, and it is still very difficult for the masses to get out of poverty. The new task of poverty alleviation remains arduous. ',
          content: 'Baihe County in the southeast of Shaanxi Province, China is an underdeveloped agricultural county. The overall level of economic and social development in the county is not high. It is difficult for the poor to increase their incomes, and they are in great need of help from outsiders.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-3.webp'),
          title: 'PROJECT 3',
          content: 'The research team of the Chinese Academy of Social Sciences went deep into Danfeng County in Southeast Shaanxi and investigated the poverty alleviation and development work in Danfeng County.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-4.webp'),
          title: 'PROJECT 4',
          content: 'The reporter visited a poverty-stricken area in Hebei, China, to investigate the learning situation of the children there, and took this photo while they were in class. It can be seen that the learning environment of local students is not very good, only a few chairs and tables.',
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-5.webp'),
          title: 'PROJECT 5',
          content: "Haohao's grandmother Liu Yumei is over 80 years old. In recent years, the cerebellum has shrunk and the treatment is ineffective. Later, she can hardly take care of herself. Even walking is a problem.",
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-6.webp'),
          title: 'PROJECT 6',
          content: 'Jinyang county has been listed as a key county supported by the state. Getting rid of poverty and becoming rich has become the long cherished wish of the people of all ethnic groups in the county. At the same time, it has also become the unremitting pursuit of the cadres and people in the county.',
          button: 'learn more'
        }
      ]
    }
  },
  methods: {
    routerLink (index) {
      this.$router.push('/ProjectsDetails?id=' + index)
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-container{
  width: 950px;
  height: 907px;
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
      width: 425px;
      height: 245px;
      margin-bottom: 20px;
      border-bottom: 3px solid rgb(249, 191, 81);
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      img{
        width: 160px;
        height: 160px;
        border-radius: 50%;
      }
      div{
        width: 240px;
        height: 100%;
        position: relative;
        .title{
          font-size: 16px;
          font-family: 'Palatino Linotype';
          margin-bottom: 32px;
        }
        .content{
          font-family: 'Tahoma';
          font-size: 13px;
          margin-bottom: 32px;
          line-height: 16px;
        }
        .button{
          position: absolute;
          bottom: 20px;
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
    }
    li:nth-last-child(1) {
      border-bottom: transparent;
    }
    li:nth-last-child(2) {
      border-bottom: transparent;
    }
  }
}
</style>
