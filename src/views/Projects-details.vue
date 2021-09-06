<template>
  <div class="projects-container">
    <h1>{{navList[id].title}}</h1>
    <ul class="ul-main">
      <li>
        <img :src="navList[id].img" alt="">
        <div>
          <!-- <p class="title">{{ navList[id].title }}</p> -->
          <p class="content" v-for="(item, index)  of navList[id].content" :key="index">{{ item.con }}</p>
          <!-- <div class="button" @click="routerLink()">
            Learn more
            <p class="btn-1 btn"></p>
            <p class="btn-2 btn"></p>
            <p class="btn-3 btn"></p>
          </div> -->
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
          content: [
            {
              con: 'The condolences group went deep into the homes of three poor households in remote mountain villages, asked them about their family production, living conditions and physical health one by one, encouraged them to maintain an optimistic attitude, actively fight against diseases and difficulties, and discussed more specific assistance measures and convenience service measures with Luofang township cadres and Pingshang village cadres. The condolences group also sent condolences to three poor households and sent the party and government\'s new year blessings.'
            },
            {
              con: 'Longyan Bureau said that it will earnestly implement the work deployment of the party and government at all levels on promoting poverty alleviation, accelerate the "express to the countryside", pay solid attention to the construction of village post stations, and strive to provide more convenient and efficient postal services for the people in mountainous areas.'
            }
          ],
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-2.webp'),
          title: 'PROJECT 2',
          content: [
            {
              con: 'Baihe County, which is located in the southeast of Shaanxi Province, China. It has a total area of 1455 square kilometers, 210,000 mu of commonly used arable land, 11 towns, 113 administrative villages, and 4 communities, with a total population of 210,000, including 187,000 agricultural population, 13,400 poor households, and 35,100 poor population. Baihe is not only a key county for poverty alleviation and development in China, but also a contiguous area for poverty alleviation in the Qinba area of Zhongjia. Among the poverty-stricken counties in China, Baihe County is a typical underdeveloped agricultural county. The overall level of economic and social development in the county is not high, the income of the poor is difficult to increase, and the quality of infrastructure such as rural roads, water, electricity, health, medical care, and communications is poor. Low, the deep-seated contradictions restricting economic development still exist, and the task of poverty alleviation and development is still very arduous. There are 78 impoverished villages in the county. The impoverished population accounts for 18.8% of the rural population, which is 3.8 times the basic level of China and 1.5 times the basic level of the whole province. The extent of poverty has not yet been fundamentally changed. After years of poverty alleviation, although most of the poor have been lifted out of poverty, what is left is some difficult "hard bones". In addition, the natural conditions are poor, the foundation is relatively weak, the cost of poverty alleviation and development is high, and it is still very difficult for the masses to get out of poverty. The new task of poverty alleviation remains arduous. '
            }
          ],
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-3.webp'),
          title: 'PROJECT 3',
          content: [
            {
              con: 'The research team of the Chinese Academy of Social Sciences went deep into Danfeng County in Southeast Shaanxi and investigated the poverty alleviation and development work in Danfeng County. Shaanxi Danfeng\'s poverty alleviation work has the distinctive characteristics of targeted poverty alleviation and meets the relevant policy requirements of the central government. It is a typical case of promoting the practice of targeted poverty alleviation.'
            },
            {
              con: `Danfeng County is located at the south foot of the east section of Qinling Mountains. It is a small county and a key county for poverty alleviation and development in mountainous areas of the country. At present, the total population of the county is 304000 and the agricultural population is 258000, but the cultivated land area is only 230000 mu, and the per capita cultivated land of farmers is less than one mu. When encountering disasters such as drought, flood and hail, rural residents even face the difficulty of not having enough to eat, resulting in prominent poverty. Data show that there are more than 20000 poor households and more than 80000 people in Danfeng County. Last year, the total financial revenue of Danfeng County was 300 million yuan, and the per capita net income of farmers was 5536 yuan. An important feature of poverty in Danfeng County is the large number of rural surplus labor force. According to the data provided by Danfeng County, there are more than 110000 rural labor forces in Danfeng County, and more than 80000 rural surplus labor forces.
The existence of a large number of rural surplus labor force not only causes heavy pressure on resources and environment, but also affects the realization of the government's development goals and the improvement of population quality. In the practice of poverty alleviation, the county takes the transfer of rural surplus labor force as an important channel to get rid of poverty and become rich. According to the current situation of Danfeng County and absorbing local experience and practices, Danfeng County puts forward a series of strategic ideas to promote the transfer of rural surplus labor force, so as to improve people's employment rate and income generation.
`
            }
          ],
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-4.webp'),
          title: 'PROJECT 4',
          content: [
            {
              con: 'his picture shows the learning situation of students in poverty-stricken areas of China. The reporter visited a poverty-stricken area in Hebei, China, to investigate the learning situation of the children there, and took this photo while they were in class. It can be seen that the learning environment of local students is not very good, only a few chairs and tables.'
            },
            {
              con: 'The local students\' class conditions are extremely poor, their textbooks are donated by other regions, and teacher resources are extremely scarce. According to statistics, the education level of local students is much lower than that of first-tier cities. It takes an average of six years of teaching courses, and it takes 9 years to complete in poverty-stricken areas. There are also very few local teacher resources. Most of them are local students who work on the spot after they have completed their studies, and a small number are taught by other regions.'
            },
            {
              con: 'There are more than 300 children in this place, but less than a hundred children can receive education, and most of the others will help the family with farm work. Even so, the probability of children in this place being admitted to university is only 1%, because the educational resources here are really too few. Most of the children here chose to work on farming. And other problems in this place are also very prominent, mainly manifested in the serious lack of facilities, poor sanitary conditions, and inconvenient transportation. According to interviews, local students need to get up at five in the morning and walk for two hours before they can go to the local school. This problem has not yet been resolved.'
            }
          ],
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-5.webp'),
          title: 'PROJECT 5',
          content: [
            {
              con: 'Haohao\'s grandmother Liu Yumei is over 80 years old. In recent years, the cerebellum has shrunk and the treatment is ineffective. Later, she can hardly take care of herself. Even walking is a problem. It was grandpa who took good care of grandma before, but since grandpa died of coronary heart disease last year, no one can take care of grandma anymore and can only live in a nursing home. From then on, Haohao began to live alone.'
            },
            {
              con: '"Our family used to be very happy. Our parents and sisters were together." Haohao pursed his lips and said. However, 10 years ago, Haohao\'s mother found out that there was a tumor in her abdomen. She had two operations before and after, and spent 70000 yuan. She was tortured by the pain and treatment process, and finally failed to save her. At this time, Haohao, who was only 4 years old, had no concept of death. When he grew up and knew about life and death, his impression of his mother had been blurred. My mother died early, and my father worked outside all year round and couldn\'t meet often. As the saying goes, the elder sister is like a mother, and the elder sister Xiaomin has become Haohao\'s most dependent person. They almost have nothing to talk about. My sister was proud of her father Xu Qinshan for her excellent grades since childhood. She was admitted to Shandong Institute of management four years ago. In school, the person my sister cares about most is Haohao except grandma in the nursing home. Because during holidays and weekends, Haohao is always alone at home. My sister is worried about his safety. She secretly works and studies without telling her father. She uses the money she earns to report to Haohao\'s tutorial class. With the company of classmates and teachers, my sister can be a little relieved. Haohao is now in the first day of junior high school with excellent academic results. Haohao\'s dream is not so grand for the future. He even wants to study hard. In the future, he will be a teacher in his hometown and receive his father and grandmother. The family will never be separated again. But now, Haohao, his father, sister and grandmother are far apart, and the hardships of the family can only be borne by themselves.'
            }
          ],
          button: 'learn more'
        },
        {
          img: require('../assets/images/pro-6.webp'),
          title: 'PROJECT 6',
          content: [
            {
              con: 'On September 24, the China Youth Development Foundation, the Youth League Committee of the industrial and Commercial Bank of China, relevant representatives of the government of Jinyang county and school representatives held the donation activity of "loving students\' work benefits you" at Tiantai Primary School of Jinyang County, Sichuan Province, and donated 500000 yuan of loving student funds from the industrial and Commercial Bank of China and the society to the students of Tiantai primary school and Chengguan Primary School of Jinyang county, And grant grants to students assisted by project hope.'
            },
            {
              con: 'We will continue to play a big role and help fight poverty. This time, the China Youth Development Foundation and the industrial and Commercial Bank of China launched the public welfare donation activity of "loving students and benefiting you from work" (the fourth quarter), so as to build a bridge for hope and a platform for love. During the event, ICBC Youth League organizations at all levels and young friends took action one after another and mobilized caring people from all walks of life to participate in public welfare undertakings. The Youth League Committee of the industrial and Commercial Bank of China raised nearly 500000 yuan of love donations within three days of the 99 public welfare day, and brought love donations from all walks of life to Jinyang county within 15 days to provide study and life support for 500 poor students.'
            }
          ],
          button: 'learn more'
        }
      ]
    }
  },
  computed: {
    id () {
      return this.$route.query.id > 5 ? 0 : this.$route.query.id
    }
  },
  methods: {
    routerLink () {
      this.$router.push('/ProjectsDetails')
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-container{
  width: 950px;
  min-height: 684px;
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
      width: 80%;
      margin-top: 20px;
      border-bottom: 3px solid rgb(249, 191, 81);
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      img{
        width: 260px;
        height: 260px;
        border-radius: 50%;
        margin-right: 50px;
      }
      div{
        width: 100%;
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
