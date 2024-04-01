// src/mock/index.js
import Mock from 'mockjs'
import {avatarUrls} from "@/static";  //导入mockjs
import data from '../datas_club_c2_1.json'
import data2 from '../datas_club_c2_2.json'
import cards from '../cards.json'
import images from '../shop_images.json'
//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
export const userData = Mock.mock("/data/list", "get", {
    // 属性 list 的值是一个数组，随机生成 1 到 10 个元素
    "list|1-10": [
      {
        // 随机生成1-10个★
        "string|1-10": "★",
        // 随机生成1-100之间的任意整数
        "number|1-100": 1,
        // 生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 1 到 10 位。
        "floatNumber|1-100.1-10": 1,
        // 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
        "boolean|1": true,
        // 随机生成一个布尔值，值为 false 的概率是 2 / (2 + 5)，值为 true 的概率是 5 / (2 + 5)。
        'bool|2-5': false,
        // 从属性值 object 中随机选取 2-4 个属性
        "object|2-4": {
          "310000": "上海市",
          "320000": "江苏省",
          "330000": "浙江省",
          "340000": "安徽省"
        },
        // 通过重复属性值 array 生成一个新数组，重复次数为 2
        "array|2": [
          "AMD",
          "CMD",
          "UMD"
        ],
        // 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
        'foo': '哇哈哈哈哈',
        'name': function () {
          return this.foo
        },
        // 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
        'regexp': /\d{5,10}/,
      },
    ],
    code: 200,
    message: 'ok',
  });
Mock.mock('/getData', 'get', {
    code:200, //请求成功状态码
    dataList:[1,2,3,4,5,6,7,8,9,10] //模拟的请
    })

// /api/datas_club_c2_1 cards
Mock.mock('/api/datas_club_c2_1', 'get', {
    code:200, //请求成功状态码
    message:'这里是来自mock的消息，登录成功',
    data:data.datas_club_c2_1
})
// /api/datas_club_c2_2 cards
Mock.mock('/api/datas_club_c2_2', 'get', {
    code:200, //请求成功状态码
    message:'这里是来自mock的消息，登录成功',
    data:data2.datas_club_c2_2
})

Mock.mock('/api/cards', 'get', {
    code:200, //请求成功状态码
    message:'这里是来自mock的消息，登录成功',
    data:cards.cards
})
Mock.mock('/api/shop_images', 'get', {
    code:200, //请求成功状态码
    message:'这里是来自mock的消息，登录成功',
    data:images.images
})


Mock.mock('/login', 'post', {
    code:200, //请求成功状态码
    message:'这里是来自mock的消息，登录成功',
    avatarUrl: avatarUrls[0]
    })
