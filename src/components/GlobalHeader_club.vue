<template>
<div id="globalHeader">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0">
                <img style="width: 100px;margin-left: 350px;" src="../assets/club.png" alt="Element logo" />
            </el-menu-item>
          <el-menu-item index="1">
            <el-button type="primary" >
              <router-link to="/" class="link" style="text-align: center;">首页</router-link>
            </el-button>
          </el-menu-item>

          <el-menu-item index="2">论坛</el-menu-item>
          <el-menu-item index="3">板块</el-menu-item>
          <el-menu-item index="3">荣耀影像</el-menu-item>

            <!-- 搜索框 -->
            <div class="search_bar">
                <el-input v-model="search_data" placeholder="荣耀新手机" :suffix-icon="Search">
                  <template #prepend>搜索> </template>
                </el-input>
            </div>
          <user-info/>
        </el-menu>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {Search} from "@element-plus/icons-vue";
import UserInfo from "@/components/userInfo.vue";
const search_data = ref('')
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style>
#globalHeader {
    margin: 0 auto;
    width: 80%;
    height: 36px;
    line-height: 36px;
    background-color: #000;
    position: relative;
    z-index: 411;
}

.search_bar {
    margin-left: 300px;
    width: 300px;
  margin-top: 10px;
}
</style>
