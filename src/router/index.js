import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/frontend/Welcome'
import TracerStudyIndex from '@/components/frontend/tracer_study/Index'
import TracerStudyMasukkanNim from '@/components/frontend/tracer_study/MasukkanNim'
import TracerStudyDetail from '@/components/frontend/tracer_study/mahasiswa/Show'
import TracerStudyCreate from '@/components/frontend/tracer_study/Create'
import TracerStudyEdit from '@/components/frontend/tracer_study/Edit'
import TracerStudyImportExcel from '@/components/frontend/tracer_study/ImportExcel'
import TracerStudyMahasiswa from '@/components/frontend/tracer_study/mahasiswa/Index'
import AuthLogin from '@/components/frontend/auth/Login'
import AuthRegister from '@/components/frontend/auth/Register'
import AuthLogout from '@/components/frontend/auth/Logout'
import GantiPassword from '@/components/frontend/settings/GantiPassword'
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
          name: 'tracer-study.mahasiswa.edit',
          path: 'detail/:nim/edit',
          component: TracerStudyEdit,
          meta: {
            auth: true
          }
        },
        {
          name: 'tracer-study.import-excel',
          path: 'import-excel',
          component: TracerStudyImportExcel
        },
        {
          path: 'mahasiswa',
          name: 'tracer-study.mahasiswa.semua',
          component: TracerStudyMahasiswa
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
    },
    {
      path: '/settings/ganti-password',
      component: GantiPassword,
      meta: {
        auth: true
      }
    }
  ]
})

let authMiddleware = function (to, from, next, user) {
  // cek apakah ini mahasiswa dan butuh ganti password
  let kecuali = [
    '/settings/ganti-password', '/auth/logout'
  ]

  if (user.mahasiswa_login && user.mahasiswa_login.need_to_change_password && !kecuali.find(path => path === to.path)) {
    console.log('Ini mahasiswa butuh ganti password')
    next({
      path: '/settings/ganti-password'
    })
  } else if (to.meta.guest) {
    console.log('Ini page guest. Harus guest.')
    next({
      path: '/'
    })
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => {
  console.log(to)
  if (store.getters.auth) {
    if (store.state.auth.role === 'mahasiswa' && !store.getters.user.mahasiswa_login) {
      console.log('data login belum ada')
      store.dispatch('GET_AUTHENTICATED_USER').then(response => {
        if (response.status !== 200) {
          window.alert('Gagal mendapatkan user.')
        } else {
          authMiddleware(to, from, next, response.body.message)
        }
      })
    } else {
      console.log('data login sudah ada')
      authMiddleware(to, from, next, store.getters.user)
    }
  } else {
    if (to.meta.auth) {
      next({
        path: '/auth/login',
        query: {
          to: to.path
        }
      })
    } else {
      next()
    }
  }
})

export default router
