<style scoped>
#login {
  padding: 150px;
  text-align: center;
}

#login_body {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#login_pic {
  width: 50%;
  border-right: 1px dashed #000;
  border-left: 1px dashed #000;
  padding: 0 200px;
}

#login_form {
  width: 50%;
  border-right: 1px dashed #000;
  border-left: 1px dashed #000;
  padding: 0 200px;
}

</style>
<template>
    <div id="login">
        <div>
            <h1 style="margin-bottom: 50px;">荣耀账号登录</h1>
        </div>
        <div id="login_body">
            <div id="login_pic">
                <img src="../assets/二维码.png" alt="">
            </div>
            <div id="login_form">
<!--              表单在这里 el-form-->
                <el-form label-width="auto" :model="form" style="max-width: 600px">
                    <el-form-item label="地区">
<!--                      这里使用了v-model 双向绑定-->
                        <el-select v-model="form.region" placeholder="Activity zone" clearable>
                            <el-option label="上海" value="shanghai" />
                            <el-option label="北京" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="账号">
                        <el-input v-model="form.userAccount" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.userPassword" />
                    </el-form-item>
                  <el-button type="primary" size="large" @click="login">登录</el-button>
<!--                  <FancyButton>-->
<!--                    <el-button type="primary" size="large" @click="login">登录</el-button>-->
<!--                    <AwesomeIcon/>-->
<!--                  </FancyButton>-->

                </el-form>
            </div>
        </div>
    </div>


</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios'


import router from "@/router";
import {UserStore} from "@/stores/user";
import type {LoginForm} from "@/types";
import FancyButton from "@/components/FancyButton.vue";
import AwesomeIcon from "@/Icon/AwesomeIcon.vue";
import {useRoute} from "vue-router";
// const fullPath = $route.params.redirect
const route = useRoute();
const redirectPath= route.query.redirect || '/';
console.log("上一个页面是: "+redirectPath);
const form: LoginForm = reactive({
    region: '',
    userAccount: '',
    userPassword: '',
});
const userStore = UserStore();
const login = () => {
    axios.post('/login', form)
        .then(response => {
            if (response.data.code === 200) {
                // 登录成功，弹窗显示登录成功
              // 将用户登录时候的表单输入userAccount
              // mock模拟的数据存入pinia
              // 使用pinia的action

              console.log("Login: "+sessionStorage.getItem('ifLogin'));
              userStore.getUser(form.userAccount,response.data.avatarUrl,form.region)
              // alert('200: ' + response.data.message + '\n用户头像为'+response.data.avatarUrl)
              // const redirect = this.$route.params.redirect || '/home'
              // this.$router.push(redirect) // 跳转回原来要访问的页面

                // 跳转到首页
              router.push(redirectPath);
            } else {
                // 登录失败，处理错误信息
                console.error(response.data.message)
            }
        })
        .catch(error => {
            // 处理请求错误
            console.error(error)
        })
}
</script>


