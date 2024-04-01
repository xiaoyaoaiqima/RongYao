<template>
    <div id="shortCut">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect" style="background-color: black; padding: 2px;  height: 36px;">
            <!-- 左 -->
            <el-menu-item index="1" class="menu-item" style="margin-left: 350px; color: aliceblue;
    margin-bottom: 30px;}">
                <router-link to="/about" class="link" style="text-align: center;">关于荣耀</router-link>
            </el-menu-item>
            <el-menu-item index="2" class="menu-item" style="color: aliceblue;">新闻</el-menu-item>
            <el-menu-item index="3" class="menu-item" style="color: aliceblue;">
                <router-link to="/" class="link">荣耀官网</router-link></el-menu-item>
            <el-menu-item index="4" class="menu-item" style="color: aliceblue;">
              <router-link to="/error" class="link">会员</router-link></el-menu-item>
            <el-menu-item index="5" class="menu-item" style="color: aliceblue;">企业购</el-menu-item>
            <el-menu-item index="6" class="menu-item" style="color: aliceblue;">
                <router-link to="/club" class="link">荣耀俱乐部</router-link></el-menu-item>
            <div class="flex_grow">
            </div>
            <!-- 登录注册 -->
            <el-menu-item index="7" class="menu-item" style="color: aliceblue;">

            </el-menu-item>
            <el-menu-item index="8" class="menu-item" style="color: aliceblue;">
                <router-link to="/" class="link">注册 | </router-link>
                <router-link to="/login" class="link"> 登录</router-link>
            </el-menu-item>
            <el-menu-item index="6" class="menu-item" style="color: aliceblue;"> 我的订单</el-menu-item>
            <el-menu-item index="4" class="menu-item" style="color: aliceblue;">购物车（0）</el-menu-item>
            <el-menu-item index="4" class="menu-item" style="color: aliceblue; margin-right: 400px">手机端</el-menu-item>

        </el-menu>
    </div>

</template>

<script lang="ts" setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const search_data = ref('')
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
</script>

<style>
.menu-item {
    color: aliceblue;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px
}

.link {
    text-decoration: none;
}

.flex_grow {
    flex: 1
}

#shortCut {
    min-width: 1200px;
    height: 36px;
    line-height: 36px;
    background-color: #000;
    font-family: honorSansBrand, "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    position: relative;
    z-index: 411;
}
</style>
