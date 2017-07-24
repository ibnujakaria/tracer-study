import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/frontend/Welcome'
import TracerStudyIndex from '@/components/frontend/tracer_study/Index'
import TracerStudyMasukkanNim from '@/components/frontend/tracer_study/MasukkanNim'
import TracerStudyDetail from '@/components/frontend/tracer_study/Detail'

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
      component: TracerStudyIndex,
      children: [
        {
          path: '',
          component: TracerStudyMasukkanNim
        },
        {
          name: 'tracer-study.detail',
          path: ':nim',
          component: TracerStudyDetail
        }
      ]
    }
  ]
})
