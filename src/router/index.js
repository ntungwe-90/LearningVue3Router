import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import Errorpage from '../views/Errorpage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props:true
  
  },
  // CATCH 404
  {
    path: '/:catchAlle(.*)',
    name:'Errorpage',
    component:Errorpage,
  
  },

  // redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
