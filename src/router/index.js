import Vue from 'vue'
import Router from 'vue-router'
import InputPage from '@/components/InputPage'
import CardPage from '@/components/CardPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'input',
      component: InputPage
    },
    {
      path: '/card',
      name: 'card',
      component: CardPage
    }
  ]
})
