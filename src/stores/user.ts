import {ref, computed} from 'vue'
import {defineStore} from 'pinia'


export const UserStore = defineStore('user', {
    // 为了完整类型推理，推荐使用箭头函数
    state: () => {
        return {
            // 所有这些属性都将自动推断出它们的类型
           userAccount:'',
            avatarUrl:'https://pic.616pic.com/ys_img/00/06/27/5m1AgeRLf3.jpg',
            ifLogin:false,
            region:''
        }
    },
    actions: {
        getUser(userAccount:string,avatarUrl:string,region:string) {
            this.userAccount = userAccount
            this.avatarUrl = avatarUrl
            this.ifLogin = true
            this.region =  region
            sessionStorage.setItem('ifLogin', String(true));
        },
    },
})
