<script setup>
   import { defineProps } from 'vue';

   defineProps({
    chef:Object
   })
</script>


<template>
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="pic"><img :src="'http://127.0.0.1:8000/chefs_images/'+chef.image" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>{{ chef.name }}</h4>
                <span>{{ chef.profession }}</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
</template>