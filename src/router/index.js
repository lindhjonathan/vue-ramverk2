import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Report from '@/components/Report'
import VueShowdown from 'vue-showdown'

Vue.use(Router)
Vue.use(VueShowdown)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/report/week/1',
        name: 'Redovisning',
        component: Report
    }
  ]
})
