<template>
  <div id="carousel">
    <el-carousel height="700px" motion-blur style="margin-left: 50px;margin-right: 50px;">
<!--      这里使用的v-for-->
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <img style="width: 2000px;" :src="item" alt="carousel item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>

// 定义props
const props = defineProps({
  images: Array
});
</script>

<style scoped>
#carousel{
  text-align: center;
}
</style>
