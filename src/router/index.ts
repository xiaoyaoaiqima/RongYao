import {createRouter, createWebHistory, useRoute} from 'vue-router'
import { UserStore } from '@/stores/user';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 主页
      path: '/',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue'),
      meta:{
        requireAuth:false,
      }
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
      component: () => import('../views/LoginView.vue'),
      meta:{
        requireAuth:false,
      }
    },
    {
      //俱乐部
      path: '/club',
      name: 'club',
      component: () => import('../views/Club/ClubView.vue'),
      meta:{
        requireAuth:true,
      }
    },
    {
      // 商城
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop/ShopView.vue'),
      meta:{
        requireAuth:true,
      }
    },
    {
      // 关于
      path: '/about',
      name: 'about',
      component: () => import('../views/About/AboutView.vue'),
      meta:{
        requireAuth:true,
      },
      // 使用了params id 参数路由
      children: [
        {
          path: 'My_profile/:id',
          name: 'My_profile',
          component: () => import('../views/About/My_profile.vue'),
          meta:{
            requireAuth:true,
          },
        },
        {
          path: 'My_address',
          name: 'My_address',
          component: () => import('../views/About/My_address.vue'),
          meta:{
            requireAuth:true,
          },
        }
      ]
    }
  ]
})
const ifLogin = Boolean(sessionStorage.getItem('ifLogin'));

// const user = UserStore();
// const ifLogin = user.ifLogin;
// router.beforeEach((to, from, next) => {
//   if(!ifLogin && to.name !=='login'){
//     return  next('/login')
//   }
//   else next()
// })
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断路由是否需要登录控制
    console.log("现在的登录情况是："+ ifLogin)
    if (ifLogin) { // 如果已经登录，则继续访问
      next()
    } else { // 如果未登录，则跳转到登录页面
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将当前路由地址作为参数传递给登录页面，以便登录后跳转回来
      })
    }
  } else { // 如果不需要登录控制，则直接访问
    next()
  }
})
// 路由守卫的逻辑为：进入页面，到首页。在首页如果点击任意路由，且没有登录，跳转到login页面。登录页面登录后，跳转回到首页

export default router
