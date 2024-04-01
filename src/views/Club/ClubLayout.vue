<template>
  <div style="margin-right: 500px;margin-left: 550px;margin-top: 200px" >
    <el-row :gutter="50">
      <el-col :span="18">
        <div class="c1">
<!--          顶部栏-->
          <div class="top" style="display: flex; align-items: center;">
            <h2 style="margin-right: auto;">为您推荐</h2>
            <div class="button">
              <el-button text>全部</el-button>
              <el-button text>话题</el-button>
              <el-button text>小视频</el-button>
              <el-button text>PK</el-button>
            </div>
          </div>
<!--          列表栏-->
          <div class="card-list" style="margin-top: 10px;" >
            <list_card
                v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :description="card.description"
                :imageUrl="card.imageUrl"
            />
            <p>下面使用axios拿到的数据</p>
            <list_card
                v-for="(card, index) in datas_axios1"
                :key="index"
                :title="card.title"
                :description="card.description"
                :imageUrl="card.imageUrl"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 20px;margin-top: 20px">
          <div style="background-color:ghostwhite;align-items: center;justify-content: center;display: flex;flex-direction: column">
            <FancyButton >
              <p style="color: #FFFFFF;display: inline-block">
                签到领积分
              </p>
              <AwesomeIcon/>
            </FancyButton>
            <p>今日领取人数 6972</p>
          </div>
        </div>
<!--        props注入-->
        <div style="margin-bottom: 20px;padding-bottom: 10px">
          <div style="background-color:ghostwhite;align-items: center;justify-content: center;display: flex;flex-direction: column">
            <p style="font-size: 22px;font-weight: 900;">
              热门板块 - TOP 5
            </p>
            <div style="display: flex; align-items: center; flex-direction: row;" v-for="data in datas_club_c2_1" :key="data.id">
              <img :src="data.imageUrl" style="width: 60px; height: 60px;">
              <div style="display: flex; flex-direction: column; margin-left: 10px;">
                <p style="font-size: 20px; font-weight: 500; margin-bottom: 0px;">{{ data.title }}</p>
                <p style="font-size: 16px; font-weight: 300;">{{ data.description }}</p>
              </div>
            </div>
            <el-divider style="width: 80%"/>
            <el-button text style="padding-bottom: 30px">查看所有板块></el-button>
          </div>
        </div>
<!--        axios mock拦截-->
        <div style="margin-bottom: 20px;padding-bottom: 10px">
          <div style="background-color:ghostwhite;align-items: center;justify-content: center;display: flex;flex-direction: column">
            <p style="font-size: 22px;font-weight: 900;">
              热门板块 - TOP 5
            </p>
            <div style="display: flex; align-items: center; flex-direction: row;" v-for="data in datas_axios" :key="data.id">
              <img :src="data.imageUrl" style="width: 60px; height: 60px;">
              <div style="display: flex; flex-direction: column; margin-left: 10px;">
                <p style="font-size: 20px; font-weight: 500; margin-bottom: 0px;">{{ data.title }}</p>
                <p style="font-size: 16px; font-weight: 300;">{{ data.description }}</p>
              </div>
            </div>
            <el-divider style="width: 80%"/>
            <el-button text style="padding-bottom: 30px">查看所有板块></el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script setup lang="ts">
import list_card from '@/views/Club/list_card.vue';
import {onMounted, ref} from 'vue';
import {cards, datas_club_c2_1} from "@/static";
import axios from "axios";
import FancyButton from "@/components/FancyButton.vue";
import AwesomeIcon from "@/Icon/AwesomeIcon.vue";

const datas_axios = ref([
  {
    id: 1,
    imageUrl: 'https://res1-cn.c.hihonor.com/data/attachment/common/5b/common_3965_icon.png?1707288749',
    title: '荣耀Magi',
    description: '昨日总发帖: 6855'
  },
]);

const datas_axios1 = ref([
  {
    id: 1,
    imageUrl: 'https://res1-cn.c.hihonor.com/data/attachment/common/5b/common_3965_icon.png?1707288749',
    title: '荣耀Magi',
    description: '昨日总发帖: 6855'
  },
]);

const fetchData1 = async () => {
  try {
    const response = await axios.get('/api/cards');
    datas_axios1.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchData2 = async () => {
  try {
    const response = await axios.get('/api/datas_club_c2_1');
    datas_axios.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData2);
onMounted(fetchData1);
</script>
