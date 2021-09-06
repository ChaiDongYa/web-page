import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          name: 'HOME'
        },
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        meta: {
          name: 'ABOUTUS'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/Contact',
        name: 'Contact',
        meta: {
          name: 'CONTACT'
        },
        component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
      },
      {
        path: '/Projects',
        name: 'Projects',
        meta: {
          name: 'PROJECTS'
        },
        component: () => import(/* webpackChunkName: "Projects" */ '../views/Projects.vue')
      },
      {
        path: '/ProjectsDetails',
        name: 'Projects-details',
        meta: {
          name: 'PROJECTS'
        },
        component: () => import(/* webpackChunkName: "Projects" */ '../views/Projects-details.vue')
      },
      {
        path: '/GetInvolved',
        name: 'GetInvolved',
        meta: {
          name: 'GETINVOLVED'
        },
        component: () => import(/* webpackChunkName: "GetInvolved" */ '../views/GetInvolved.vue')
      },
      {
        path: '/Donate',
        name: 'Donate',
        meta: {
          name: 'DONATE'
        },
        component: () => import(/* webpackChunkName: "Donate" */ '../views/Donate.vue')
      },
      {
        path: '/Address',
        name: 'Address',
        meta: {
          name: 'ADDRESS'
        },
        component: () => import(/* webpackChunkName: "Donate" */ '../views/Address.vue')
      }
    ]

  },
  {
    path: '/Login',
    name: 'Login',
    meta: {
      name: 'Login'
    },
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.name
  next()
})

export default router
