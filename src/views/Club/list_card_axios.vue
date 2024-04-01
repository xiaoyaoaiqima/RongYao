<template>
  <el-card class="image-card" style="padding: 20px">
    <div style="display: flex; flex-direction: row; align-items: center">
      <img :src="imageUrl" class="image" alt="Card image" style="width: 360px; height: 200px; margin-right: 30px" />
      <div class="text-content" style="width: 50%">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ElCard } from 'element-plus';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const title = ref('');
const description = ref('');
const imageUrl = ref('');y

const datas = [];

onMounted(async () => {
  try {
    const response = await axios.get('/api/datas_club_c2_1');
    this.datas = response.data.datas_club_c2_1;
    // title.value = data.title;
    // description.value = data.description;
    // imageUrl.value = data.imageUrl;
  } catch (error) {
    console.error(error);
  }
});

</script>

<style scoped>
.image-card {
  margin-bottom: 10px;
}
</style>
