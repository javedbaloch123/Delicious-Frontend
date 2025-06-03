
<script setup>
   import axios from 'axios';
      import { reactive } from 'vue';
      import swal from 'sweetalert';
      import Loading from 'vue-loading-overlay';
      import 'vue-loading-overlay/dist/css/index.css';
    
         
      const state = reactive({
        name:'',
        email:'',
        subject:'',
        message:'',
        errors: {},
        isLoading: false
      })
 

    const submitForm = async() =>{
      try {
        state.isLoading = true;
        const data ={
        name:state.name, 
        email:state.email, 
        subject:state.subject, 
        message:state.message, 
      }
        const response = await axios.post('http://127.0.0.1:8000/api/contact',data);
        state.errors = response.data.error;
        if(response.data.status == true){
             swal({
              title: 'Message Sent!',
              text: 'We will contact you soon.',
              icon: 'success',
              confirmButtonText: 'OK'
            });

        state.name = '';
        state.email='';
        state.subject='';
        state.message='';
       
        }
         
      } catch (error) {
        
      } finally{
         state.isLoading = false;
      }
    }
  

</script>


<template>
      <!-- Contact Section -->
    <Loading v-if="state.isLoading" :active="true" :is-full-page="true" />
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <div><span>Check Our</span> <span class="description-title">Contact</span></div>
      </div><!-- End Section Title -->

      <div class="mb-5">
        <iframe style="width: 100%; height: 400px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div><!-- End Google Maps -->

      <div class="container" data-aos="fade">

        <div class="row gy-5 gx-lg-5">

          <div class="col-lg-4">

            <div class="info">
              <h3>Get in touch</h3>
              <p>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>

              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div><!-- End Info Item -->

            </div>

          </div>

          <div class="col-lg-8">
            <form class="php-email-form" id="form" name="form" @submit.prevent="submitForm">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" v-model="state.name" class="form-control" id="name" placeholder="Your Name" >
                   <p v-if="state.errors && state.errors.name" class="text-danger">{{ state.errors.name[0] }}</p>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" v-model="state.email" name="email" id="email" placeholder="Your Email" >
                     <p v-if="state.errors && state.errors.email" class="text-danger">{{ state.errors.email[0] }}</p>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" v-model="state.subject" name="subject" id="subject" placeholder="Subject" >
                 <p v-if="state.errors && state.errors.subject" class="text-danger">{{ state.errors.subject[0] }}</p>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" v-model="state.message" placeholder="Message" ></textarea> 
                   <p v-if="state.errors && state.errors.message" class="text-danger">{{ state.errors.message[0] }}</p>
              </div>
              
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->
</template>