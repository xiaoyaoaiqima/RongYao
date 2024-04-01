<template>
    <div id="basicLayout">
        <div class="top">
            <ShortCut />
        </div>
        <div>
            <router-view></router-view>
        </div>
      <div id="footer">
        <GlobalFooter/>
      </div>
    </div>
</template>

<script setup>
import ShortCut from '../components/ShortCut.vue';
import GlobalFooter from '../components/GlobalFooter.vue';
import { RouterView } from 'vue-router'


</script>
<style scoped>
.top {
    background-color: black;
}

#basicLayout {}
</style>
