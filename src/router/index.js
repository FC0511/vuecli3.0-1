import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const HAS_LOGINED = true // 模拟登陆

router.beforeEach((to, form, next) => {
  to.meta && setTitle(to.meta.title) // 有路由配置有meta属性就修改
  if (to.name !== 'login') { // 访问不是登录页
    if (HAS_LOGINED) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    if (HAS_LOGINED) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

/* router.beforeResolve((to, from, next) => {
}); */

router.afterEach((to, from) => {
  // logining = false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router
