<template>
<div id="globalHeader">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0">
                <img style="width: 100px;margin-left: 350px;" src="../assets/logo.png" alt="Element logo" />
            </el-menu-item>
            <el-sub-menu index="1">
                <template #title>商品分类</template>
                <el-menu-item index="4-1">item one</el-menu-item>
                <el-menu-item index="4-2">item two</el-menu-item>
                <el-menu-item index="4-3">item three</el-menu-item>
                <el-sub-menu index="4-4">
                    <template #title>item four</template>
                    <el-menu-item index="4-4-1">item one</el-menu-item>
                    <el-menu-item index="4-4-2">item two</el-menu-item>
                    <el-menu-item index="4-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">荣耀折叠屏</el-menu-item>
            <el-menu-item index="3">荣耀Magic6系列</el-menu-item>

            <!-- 搜索框 -->
            <div class="search_bar">
                <el-input v-model="search_data" placeholder="荣耀新手机" />
            </div>
          <user-info/>
        </el-menu>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import UserInfo from "@/components/userInfo.vue";
const search_data = ref('')
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
#globalHeader {
    min-width: 1200px;
    height: 36px;
    line-height: 36px;
    background-color: #000;
    font-family: honorSansBrand, "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    position: relative;
    z-index: 411;
}

.search_bar {
    margin-left: 400px;
    margin-top: 10px;
    width: 200px;
    border-radius: 50px;

}
</style>
