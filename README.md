# 大纲
如何寻找对应的，webStorm打开代码，双击shift。输入想找的东西
## 得分点讲解
### 脚手架
vite脚手架
项目本身就用这个生成，有一个vite.config.js
### Vue指令
Vue指令用了 v-if，v-for，v-model，v-input 加起来很多个了
### 表单设计
登录，使用双向绑定 v-model 在 views/LoginView.vue文件
### Vue组件
- 组件数量: component文件夹下，View文件夹下，文件名字不带View的就是组件
- 组件质量 : Carousel.vue复用了很多次，BasicLayout.vue复用很多次
- BasicLayout.vue在app.vue里面使用，相当于后面的每一个路由，都使用了这个文件
- 组件特性 : props传参用了  ，Carousel.vue里面，listCard.vue里面
### 路由设计
有404页面（ErrorView.vue) ，在访问会员页面的时候跳转，
10个路由 在router/index.ts 有详细标注
### 路由参数设计
- 路径传参 params query。
- 使用在AboutView。输入不同的id(/about/My_profile/1),id可以是0,1,2，是经历页面。3往后是空白页面
- 会得到不同的简历信息。从json文件中读取 
### UI组件
这个不用说了，用了无数个
找el开头的组件，都是 绝对的高质量
el-button, el-menu, el-form,el-col, el-row,el-carousel
### JSON数据数量 和 质量
- mock用了，axios用了 
- json用了 商品数据 card列表
- 本地json--导入mock--mock截取--axios请求
三个json 文件 cards, datas_club_c2_1,experience

## 拓展功能
### pinia
使用了pinia 存储登录的用户名和用户头像，
在stores/user.ts

### Typescript
使用ts的类型接口，检查 用户登录接口
所有后缀名用.ts的文件
在LoginView.vue

### 路由守卫
判断，如果没有登录，需要跳转到login
如果在首页，不需要登录

## 全局组件
稍微改一下布局， 弄几个全局的组件，你们评分要求需要复用组件
GlobalHeader，GlobalFooter




## 总体结构
### 顶部栏 

### 导航栏
icon navHeader searchBar

### 轮播图
### 图片 nav
### 商品列表

标题+图片
