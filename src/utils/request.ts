//axiosInstance.js
//导入axios
import axios from 'axios'

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
	baseURL:'http://localhost:8080', //请求后端数据的基本地址，自定义
	timeout: 2000                   //请求超时设置，单位ms
})
export default API

