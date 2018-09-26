import Vue from 'vue'
import Router from 'vue-router'
import InputPage from '@/components/InputPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InputPage',
      component: InputPage
    }
  ]
})
