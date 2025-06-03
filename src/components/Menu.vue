<script setup>
import axios from "axios";
import { onMounted, ref, nextTick } from "vue";
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';
import Isotope from "isotope-layout";
 import MenuCard from "./MenuCard.vue";

const isLoading = ref(true);
const category = ref([]);
const food = ref([]);
const activeFilter = ref('*');
let iso = null;

function handleFilter(filter) {
  activeFilter.value = filter;
  if (iso) {
    iso.arrange({ filter });
  }
}
onMounted(async () => {
  try {
    const categoryResponse = await axios.get("http://127.0.0.1:8000/api/category");
    category.value = categoryResponse.data;

    const foodResponse = await axios.get("http://127.0.0.1:8000/api/food");
    food.value = foodResponse.data;

    await nextTick(); // wait until Vue renders the DOM

    // Initialize Isotope
    iso = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

  }  catch (error) {
    console.log(error);
  }  finally {
    isLoading.value = false;
  }
});
 
 
</script>

<template>
    <Loading v-if="isLoading" :active="true" :is-full-page="true" />
  <!-- Menu Section -->
  <section id="menu" class="menu section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Menu</h2>
      <div>
        <span>Check Our Tasty</span> <span class="description-title">Menu</span>
      </div>
    </div>
    <!-- End Section Title -->

    <div
      class="container isotope-layout"
      data-default-filter="*"
      data-layout="masonry"
      data-sort="original-order"
    >
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul class="menu-filters isotope-filters">
            <li  @click="handleFilter('*')"  :class="{ 'filter-active': activeFilter === '*'}">All</li>
            <li
              :data-filter="`.filter-${cat.name}`"
              v-for="cat in category"
              :key="cat.id"
              @click="handleFilter('.filter-' + cat.name)"
               :class="{ 'filter-active': activeFilter === '.filter-' + cat.name}"
            >
              {{ cat.name }}
            </li>
 
          </ul>
        </div>
      </div>
      <!-- Menu Filters -->

      <div
        class="row isotope-container"
        data-aos="fade-up"
        data-aos-delay="200"
        v-if="food.length > 0"
      >
       <MenuCard v-for="food in food" :key="food.id" :food="food"/>
 
        
 
      </div>
      <!-- Menu Container -->
    </div>
  </section>
  <!-- /Menu Section -->
</template>