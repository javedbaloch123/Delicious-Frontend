<script setup>
import { defineProps } from "vue";

defineProps({
  food: Object,
});
</script>

<template>
  <div :class="'col-lg-6 menu-item isotope-item filter-'+food.category.name">
    <img :src="`http://127.0.0.1:8000/food_images/`+food.image" class="menu-img" alt="" />
    <div class="menu-content">
      <a href="#">{{ food.name }}</a><span>{{ food.price }}</span>
    </div>
    <div class="menu-ingredients">{{ food.desc }}</div>
  </div>
</template>