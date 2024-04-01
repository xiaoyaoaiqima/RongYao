<!-- userInfo.vue -->
<template>
  <div style="display: flex;flex-direction: row;align-items: center;width: 300px;margin-left: 30px">
    <img :src="userStore.avatarUrl" style="width: 50px; height: 50px;border-radius: 20px" />
    <div style="display: flex;flex-direction: column;height: 50px;line-height: 22px">
      <p style="margin: 0 10px;font-size: 14px">region: {{ userStore.region }}</p>
      <p style="margin: 0 10px;font-size: 14px">name: {{ userStore.userAccount }}</p>
    </div>

  </div>
</template>

<script setup>
import {UserStore} from "@/stores/user";
const userStore = UserStore()

// 在这里，你可以添加获取用户信息的逻辑，例如发送请求获取用户信息，并将结果赋值给userStore
</script>