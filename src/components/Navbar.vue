<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
     <header id="header" class="header fixed-top">
     
    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-end justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-phone d-flex align-items-center d-none d-lg-block"><span>+1 5589 55488 55</span></i>
          <i class="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
        </div>
         
        <a href="#book-a-table" class="cta-btn">Book a table</a>
      </div>
    </div><!-- End Top Bar -->

    <div class="branding d-flex align-items-cente">

      <div class="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <RouterLink to="/"><h1 class="sitename">Delicious</h1></RouterLink>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
           <ul>
  <li><RouterLink :to="{ path: '/', hash: '#hero' }">Home</RouterLink></li>
  <li><RouterLink :to="{ path: '/About', hash: '#about' }">About</RouterLink></li>
  <li><RouterLink :to="{ path: '/Menu', hash: '#menu' }">Menu</RouterLink></li>
  <li><RouterLink :to="{ path: '/Specials', hash: '#specials' }">Specials</RouterLink></li>
  <li><RouterLink :to="{ path: '/Events', hash: '#events' }">Events</RouterLink></li>
  <li><RouterLink :to="{ path: '/Chefs', hash: '#chefs' }">Chefs</RouterLink></li>
  <li><RouterLink :to="{ path: '/Gallery', hash: '#gallery' }">Gallery</RouterLink></li>
  <li><RouterLink :to="{ path: '/Contact', hash: '#contact' }">Contact</RouterLink></li>
</ul>

          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header>

</template>