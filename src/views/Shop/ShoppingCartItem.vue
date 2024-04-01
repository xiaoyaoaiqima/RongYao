<!-- ShoppingCartItem.vue -->
<template>
  <div class="cart-item">
    <div>{{ item.name }}</div>
    <div>{{ item.price }}</div>
    <button @click="removeItem">删除</button>
    <button @click="addPrice">加价</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeItem() {
      this.$emit('remove-item', this.item);
    },
    addPrice() {
      this.$emit('add-Price', this.item);
    }
  }
};
</script>