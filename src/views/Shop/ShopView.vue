<template>
  <div class="header">
    <GlobalHeader />
  </div>
  <div id="home">
    <carousel :images="images" />
    <list_nav/>
    <grid_good/>

  </div>
</template>

<script setup>

import Carousel from '../../components/Carousel.vue';
import GlobalHeader from "@/components/GlobalHeader_shop.vue";
import list_nav from './list_nav.vue';
import grid_good from './grid_good.vue';
import axios from "axios";
import {onMounted, ref} from "vue";
import image1 from '@/assets/轮播1.png'
import image2 from '@/assets/轮播2.png'
import image3 from '@/assets/轮播3.png'
import image4 from '@/assets/轮播4.png'

const images_de = ['@/assets/轮播1.png', '@/assets/轮播2.png', '@/assets/轮播3.png', '@/assets/轮播4.png'];
const images = [image1, image2, image3, image4];
const shop_images = ref([]);
const fetchData1 = async () => {
  try {
    const response = await axios.get('/api/shop_images');
    shop_images.value = response.data.data;
    console.log(shop_images.value)
  } catch (error) {
    console.error(error);
  }
};
// console.log(shop_images)
onMounted(fetchData1);
</script>
<style scoped>
#home {}

.top {
  background-color: black;
}

#basicLayout {}
</style>
