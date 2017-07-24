import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/frontend/Welcome'
import TracerStudyIndex from '@/components/frontend/tracer_study/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/tracer-study',
      name: 'TracerStudyIndex',
      component: TracerStudyIndex
    }
  ]
})
