
<style scoped>
.shopping-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.shopping-list {
  display: flex;
  flex-direction: column;
  gap: 10px; /* 添加元素之间的间隔 */
}

.shopping-list > * {
  border: 1px solid #ccc; /* 给每个元素添加外边框 */
}

</style>
<template>
  <div class="shopping-cart">
    <div class="shopping-list">
      <ShoppingCartItem v-for="item in cartItems" :key="item.id" :item="item" @remove-item="removeItem"
      @add-price="addPrice"></ShoppingCartItem>
    </div>
    <FancyButton>
      <button @click="addItem">新增商品</button>
    </FancyButton>
  </div>
</template>

<script setup>
import ShoppingCartItem from './ShoppingCartItem.vue';
import FancyButton from "@/components/FancyButton.vue";

const cartItems = ref([
  { id: 1, name: '商品1', price: 10 },
  { id: 2, name: '商品2', price: 20 },
  { id: 3, name: '商品3', price: 30 },
  { id: 4, name: '商品4', price: 30 },
  { id: 5, name: '商品5', price: 30 }
]);

const removeItem = (item) => {
  const index = cartItems.value.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    cartItems.value.splice(index, 1);
    console.log(cartItems.value);
  }
};
const addPrice = (item) => {
  const index = cartItems.value.findIndex((cartItem) => cartItem.id === item.id);
  cartItems.value[index].price  = cartItems.value[index].price+ 10;
};
const addItem = () => {
  const newItem = { id: cartItems.value.length + 1, name: '新商品', price: 50 };
  cartItems.value.push(newItem);
  console.log('新增商品:', newItem);
};
</script>

