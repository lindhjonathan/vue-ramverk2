import Vue from 'vue'
import Router from 'vue-router'
import Me from './components/Me.vue'
import Report from './components/Report.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        id: 0,
        path: '/',
        name: 'me',
        component: Me
    },
    {
        id: 1,
        path: '/report/week/1',
        name: 'Redovisning',
        component: Report
    }
  ]
})
