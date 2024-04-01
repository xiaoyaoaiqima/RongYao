
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入mock
import './mock/index'
//axios文件
import axios from './utils/request.js'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
sessionStorage.setItem('ifLogin', String(false));

// 在应用关闭时将sessionStorage中的值置为false
app.config.globalProperties.$beforeUnmount = () => {
    sessionStorage.setItem('ifLogin', String(false));
}

app.config.globalProperties.$axios=axios;  //配置axios的全局引用

