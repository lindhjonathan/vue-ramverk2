import Vue from 'vue'
import Router from 'vue-router'
import Me from './components/Me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'me',
      component: Me
    },
    {
      path: '/report/week/1',
      name: 'report',
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Report.vue')
    }
  ]
})
