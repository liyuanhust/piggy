import Vue from 'vue'
import Router from 'vue-router'
import AddPig from '@/pages/AddPig'
import SlicePig from '@/pages/SlicePig'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddPig',
      component: AddPig
    },{
      path: '/slicepig',
      name: 'SlicePig',
      component: SlicePig
    },{
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
