import Vue from 'vue'
import Router from 'vue-router'
import Newslist from '@/components/Newslist'
import ShowMediaData from '@/components/ShowMediaData'
import TestGrid from '@/components/TestGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Newslist
    },
    {
      path: '/mediadata',
      component: ShowMediaData
    },
    {
      path: '/grid',
      component: TestGrid
    }
  ]
})
