import Vue from 'vue'
import Router from 'vue-router'
import AddPig from '@/pages/AddPig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddPig',
      component: AddPig
    }
  ]
})
