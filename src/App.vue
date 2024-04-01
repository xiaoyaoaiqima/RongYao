<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import BasicLayout from './layouts/BasicLayout.vue'
import {UserStore} from "@/stores/user";
import router from "@/router";
import {onMounted} from "vue";

const route = useRoute()
const userStore = UserStore();

// 路由守卫
// 如果在主页 不需要重定向，如果去其他地方 跳转到login
const ifLogin = Boolean(sessionStorage.getItem('ifLogin'));
router.beforeEach((to, from, next) => {
  console.log("目前登录状态" + ifLogin + "去往方向" + to.path);
  if (to.path === '/'){
    console.log("首页无需登录")
    return next();
  }
  if (!ifLogin && to.path !== '/login') {
    return next('/login');
  }
  else {
    console.log(to.path)
    return next();
  }
});


const doInit = () => {
  console.log(
      "  _________                .____    .__        \n" +
      " /   _____/____    _____   |    |   |__| ____  \n" +
      " \\_____  \\\\__  \\  /     \\  |    |   |  |/    \\ \n" +
      " /        \\/ __ \\|  Y Y  \\ |    |___|  |   |  \\\n" +
      "/_______  (____  /__|_|  / |_______ \\__|___|  /\n" +
      "        \\/     \\/      \\/          \\/       \\/ "
  );
};
onMounted(() => {
  doInit();
});
</script>

<template>
  <template v-if="!route.path.includes('login')">
    <BasicLayout />
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
</template>

<style scoped></style>
