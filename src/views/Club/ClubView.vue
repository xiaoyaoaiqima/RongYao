<template>
  <div class="about">
    <div class="header">
      <GlobalHeader_club/>
    </div>
    <Carousel :images="images" style="height: 350px;width: 60%; margin: 0 auto;"/>
    <ClubLayout/>
  </div>

</template>

<script setup>
import GlobalHeader_club from "@/components/GlobalHeader_club.vue";
import Carousel from '../../components/Carousel.vue';
import ClubLayout from './ClubLayout.vue';
import image1 from '@/assets/club1.jpg';
import image2 from '@/assets/club2.jpg';


const images = [image1, image2];

</script>
