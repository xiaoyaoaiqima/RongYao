import { createRouter, createWebHistory } from 'vue-router'
import { UserStore } from '@/stores/user';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 主页
      path: '/',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue')
    },
    {
      // 测试页面
      path: '/shopCar',
      name: 'shopCar',
      component: () => import('../views/Shop/ShopCar.vue')
    },
    {
      // 错误 404
      path: '/error',
      name: 'error',
      component: () => import('../views/ErrorView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/ErrorView.vue'),
    },
    {
      // 登录
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      //俱乐部
      path: '/club',
      name: 'club',
      component: () => import('../views/Club/ClubView.vue')
    },
    {
      // 商城
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop/ShopView.vue')
    },
    {
      // 关于
      path: '/about',
      name: 'about',
      component: () => import('../views/About/AboutView.vue'),
      // 使用了params id 参数路由
      children: [
        {
          path: 'My_profile/:id',
          name: 'My_profile',
          component: () => import('../views/About/My_profile.vue')
        },
        {
          path: 'My_address',
          name: 'My_address',
          component: () => import('../views/About/My_address.vue')
        }
      ]
    }
  ]
})
const ifLogin = Boolean(sessionStorage.getItem('ifLogin'));

router.beforeEach((to, from, next) => {
  if(!ifLogin && to.name !=='login'){
    return  next('/login')
  }
  else next()
})

export default router
