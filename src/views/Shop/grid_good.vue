<template>

  <!-- 商品格子 -->
  <div class="hotSelling">
    <div>
      <h2>新品热销</h2>
    </div>

    <div class="hotSelling_pic">
      <a target="_blank" href="https://www.hihonor.com/cn/shop/product/10086016957595.html" class="item"><img
          style="width: 700px;height: 700px" alt="M6至臻"
          src="https://hshop.honorfile.com/pimages//pages/picImages/72483381611718338427.jpg"/></a>
      <a target="_blank" href="https://www.hihonor.com/cn/shop/product/10086364050360.html" class="item"><img
          style="width: 350px;height: 350px" alt="90GT"
          src="https://hshop.honorfile.com/pimages//pages/picImages/75995761411716759957.png"/></a>
      <a target="_blank" href="https://www.hihonor.com/cn/shop/product/10086047786144.html" class="item"><img
          style="width: 350px;height: 350px" alt="笔记本集显"
          src="https://hshop.honorfile.com/pimages//pages/picImages/06711610111711611760.png"/></a>
      <a target="_blank" href="https://www.hihonor.com/cn/shop/product/10086803444642.html" class="item"><img
          style="width: 350px;height: 350px" alt="手表4 Pro"
          src="https://hshop.honorfile.com/pimages//pages/picImages/41046497890719464014.png"/></a>
      <a target="_blank" href="https://www.hihonor.com/cn/shop/product/10086589420744.html" class="item"><img
          style="width: 350px;height: 350px" alt="100 "
          src="https://hshop.honorfile.com/pimages//pages/picImages/43691239380713219634.png"/></a>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>
.hotSelling {
  margin-left: 280px;
  margin-right: 280px;
}

.hotSelling_pic {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.hotSelling_pic a:nth-child(1) {
  grid-row: span 2;
  grid-column: span 2;
}

.hotSelling_pic a:nth-child(n+2) {
  grid-row: span 1;
  grid-column: span 1;
}

.hotSelling h2 {
  margin-bottom: 10px;
}


ul li {
  align-items: center;
  text-align: center;

}


a {
  text-decoration: none;
  color: black;
}

.horizontal-list {
  display: flex;
  list-style: none;
  padding: 0;
}

.horizontal-list li {
  margin-right: 10px;
}
</style>
