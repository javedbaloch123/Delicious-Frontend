
<script setup>
    import axios from 'axios';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import ChefCard from './ChefCard.vue';

    const chef = ref([]);
    onMounted(async()=>{
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/chef');
        chef.value = response.data;
      } catch (error) {
        console.log(error);
      } 
    })
</script>

<template>
      <!-- Chefs Section -->
    <section id="chefs" class="chefs section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Chefs</h2>
        <div><span>Our Professional</span> <span class="description-title">Chefs</span></div>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-5">
            
         <ChefCard v-for="chef in chef" :key="chef.id" :chef="chef"/>
        </div>

      </div>

    </section><!-- /Chefs Section -->
</template>