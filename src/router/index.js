import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/frontend/Welcome'
import TracerStudyIndex from '@/components/frontend/tracer_study/Index'
import TracerStudyMasukkanNim from '@/components/frontend/tracer_study/MasukkanNim'
import TracerStudyDetail from '@/components/frontend/tracer_study/mahasiswa/Show'
import TracerStudyCreate from '@/components/frontend/tracer_study/Create'
import TracerStudyImportExcel from '@/components/frontend/tracer_study/ImportExcel'
import AuthLogin from '@/components/frontend/auth/Login'
import AuthRegister from '@/components/frontend/auth/Register'
import AuthLogout from '@/components/frontend/auth/Logout'
import store from '../store/index.js'

Vue.use(Router)

let router = new Router({
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
          path: 'create',
          component: TracerStudyCreate,
          meta: {
            auth: true
          }
        },
        {
          name: 'tracer-study.detail',
          path: 'detail/:nim',
          component: TracerStudyDetail
        },
        {
          name: 'tracer-study.import-excel',
          path: 'import-excel',
          component: TracerStudyImportExcel
        }
      ]
    },
    {
      path: '/auth/login',
      component: AuthLogin,
      meta: {
        guest: true
      }
    },
    {
      path: '/auth/register',
      component: AuthRegister,
      meta: {
        guest: true
      }
    },
    {
      path: '/auth/logout',
      component: AuthLogout,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.auth && !store.getters.auth) {
    next({
      path: '/auth/login',
      query: {
        to: to.path
      }
    })
  } else if (to.meta.guest && store.getters.auth) {
    next({
      path: '/'
    })
  } else {
    next()
  }
})

export default router
