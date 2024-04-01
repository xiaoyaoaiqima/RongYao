<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import BasicLayout from './layouts/BasicLayout.vue'
import {UserStore} from "@/stores/user";
import router from "@/router";
import {onMounted} from "vue";

const route = useRoute()
const userStore = UserStore();
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
