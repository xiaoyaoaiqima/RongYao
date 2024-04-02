<template>
    <div id="globalHeader">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0" style="margin-left: 250px;margin-right: 120px">
                <img style="width: 100px;" src="../assets/logo.png" alt="Element logo" />
            </el-menu-item>
          <el-menu-item index="1">手机</el-menu-item>
          <el-menu-item index="2">笔记本</el-menu-item>
          <el-menu-item index="3">平板</el-menu-item>
          <el-menu-item index="4">穿戴</el-menu-item>
          <el-menu-item index="5">智慧屏</el-menu-item>
          <el-menu-item index="6">更多产品</el-menu-item>
          <el-menu-item index="7">MagicOS</el-menu-item>
          <el-menu-item index="8">青年计划</el-menu-item>
          <el-menu-item index="9" class="menu-item">
            <router-link to="/club" class="link" style="text-align: center;">荣耀俱乐部</router-link>
          </el-menu-item>
          <el-menu-item index="10">服务支持</el-menu-item>
          <el-menu-item index="11">探索荣耀</el-menu-item>
<!--          搜索btn-->
          <el-menu-item index="12" >
            <el-button type="primary" :icon="Search"></el-button></el-menu-item>
          <el-menu-item >
            <el-button type="primary" >
              <router-link to="/shop" class="link" style="text-align: center;">荣耀商城</router-link>
            </el-button>
          </el-menu-item>

          <user-info/>
        </el-menu>
    </div>

</template>

<script lang="ts" setup>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import {UserStore} from "@/stores/user";
import UserInfo from "@/components/userInfo.vue";
const activeIndex = 1
const userStore = UserStore()
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
#globalHeader {
    height: 36px;
    line-height: 36px;
    background-color: #000;
}
</style>
