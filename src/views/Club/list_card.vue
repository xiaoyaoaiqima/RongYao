<template>
  <el-card class="image-card"  style="padding: 20px">
    <div style="display: flex;flex-direction: row;align-items: center">
      <a :href="goto">
        <img :src="imageUrl" class="image" alt="Card image" style="width: 360px;height: 200px;margin-right: 30px">
      </a>
      <div class="text-content" style="width: 50%">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
//这里用了props 传值
const props = defineProps({
  title: String,
  description: String,
  imageUrl: String,
  goto:String
});

const title = ref(props.title);
const description = ref(props.description);
const imageUrl = ref(props.imageUrl);
console.log(imageUrl.value)
</script>

<style scoped>
.image-card {
  margin-bottom: 10px;
}

</style>
