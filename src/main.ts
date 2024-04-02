
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//导入mock
import './mock/index'
//axios文件
import axios from './utils/request.js'

import App from './App.vue'
import router from './router'
const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app')
sessionStorage.setItem('ifLogin', String(false));

// 在应用关闭时将sessionStorage中的值置为false
app.config.globalProperties.$beforeUnmount = () => {
    sessionStorage.setItem('ifLogin', String(false));
}

app.config.globalProperties.$axios=axios;  //配置axios的全局引用

