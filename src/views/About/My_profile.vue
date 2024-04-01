<template>
  <div>
    <h1>My Profile</h1>
    <p>My ID: {{ id }}</p>
    <div v-if="experienceData">
      <p>Time: {{ experienceData.time }}</p>
      <p>Location: {{ experienceData.location }}</p>
      <p>Event: {{ experienceData.event }}</p>
      <p>People: {{ experienceData.people.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup>
import experience from '../../experience.json'
import { computed} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute();
const id = route.params.id;
const Experience = experience.experiences;
const experienceData = computed(() => {
  if (id && Experience[id]) {
    return Experience[id];
  }
  return null;
});
</script>
