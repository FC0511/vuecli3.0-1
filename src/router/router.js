import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: Home,
    props: route => ({
      // /?food=aa
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'app'
    },
    meta: {
      title: 'about'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    // /argu/xxx
    props: true
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    name: 'named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue')
    }
  },
  {
    path: '/main',
    // redirect: '/'
    // redirect: {name: 'home'}
    redirect: to => {
      console.log(to)
      return {
        name: 'home'
      }
    }
  },
  {
    path: '*',
    component: () => import('@/views/error.vue')
  }
]
