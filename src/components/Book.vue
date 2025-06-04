
<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import swal from "sweetalert";

const slots = ref([]);
const book = ref([]);

const state = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  date: "",
  time: "",
  people: "",
  errors: {},
  isLoading: false,
});

onMounted(async () => {
  try {
    const Slotresponse = await axios.get("http://127.0.0.1:8000/api/slot");
    slots.value = Slotresponse.data;
  } catch (error) {
    console.log(error);
  }
});
const time = ref('');
const fetchTime = async () => {
   
  try {
    state.isLoading = true;
    const data = {
      date: state.date,
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/api/fetch-time",
      data
    );
    console.log(response.data);
    time.value = response.data;
  } catch (error) {
    console.log(error);
  }finally {
    state.isLoading = false;
  }
};

const submitForm = async () => {
  try {
    state.isLoading = true;
    const data = {
      name: state.name,
      people: state.people,
      email: state.email,
      phone: state.phone,
      message: state.message,
      date: state.date,
      time: state.time,
    };

    const bookresponse = await axios.post(
      "http://127.0.0.1:8000/api/book",
      data
    );
    book.value = bookresponse.data;
    state.errors = bookresponse.data.error;
    if (bookresponse.data.status === true) {
      swal({
        title: "Message Sent!",
        text: "We will contact you soon.",
        icon: "success",
        confirmButtonText: "OK",
      });

      state.name = "";
      state.email = "";
      state.phone = "";
      state.date = "";
      state.message = "";
      state.people = "";
      state.time = "";

      // window.location.reload();
    }
    console.log(book.value);
  } catch (error) {
  } finally {
    state.isLoading = false;
  }
};
</script>


<template>
  <Loading v-if="state.isLoading" :active="true" :is-full-page="true" />
  <section id="book-a-table" class="book-a-table section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Book A Table</h2>
      <div>
        <span>Book a</span> <span class="description-title">Table</span>
      </div>
    </div>
    <!-- End Section Title -->

    <div class="container">
      <div class="row g-0" data-aos="fade-up" data-aos-delay="100">
        <div
          class="col-lg-4 reservation-img"
          style="background-image: url(/assets/img/reservation.jpg)"
        ></div>

        <div
          class="col-lg-8 d-flex align-items-center reservation-form-bg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form @submit.prevent="submitForm" class="php-email-form">
            <div class="row gy-4">
              <div class="col-lg-4 col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  v-model="state.name"
                />
                <p v-if="state.errors && state.errors.name" class="text-danger">
                  {{ state.errors.name[0] }}
                </p>
              </div>
              <div class="col-lg-4 col-md-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  v-model="state.email"
                />
                <p
                  v-if="state.errors && state.errors.email"
                  class="text-danger"
                >
                  {{ state.errors.email[0] }}
                </p>
              </div>
              <div class="col-lg-4 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  v-model="state.phone"
                />
                <p
                  v-if="state.errors && state.errors.phone"
                  class="text-danger"
                >
                  {{ state.errors.phone[0] }}
                </p>
              </div>
              <div class="col-lg-4 col-md-6">
                <select
                  class="form-control"
                  name="date"
                  id="date"
                  v-model="state.date"
                  @change="fetchTime"
                >
                  <option value="">
                    Select Date
                  </option>
                  <option
                    v-for="slot in slots.filter((s) => s.is_booked == 'true')"
                    :key="slot.id"
                    :value="slot.date"
                  >
                    {{ slot.date }}
                  </option>
                </select>
                <p v-if="state.errors && state.errors.date" class="text-danger">
                  {{ state.errors.date[0] }}
                </p>
              </div>
              <div class="col-lg-4 col-md-6">
                <select
                  class="form-control"
                  name="time"
                  id="time"
                  v-model="state.time"
                >
                  <option value="">Select time</option>
                 <option value="" v-if="time != ''" selected>
                    {{ time }}
                  </option>
                </select>
                <p v-if="state.errors && state.errors.time" class="text-danger">
                  {{ state.errors.time[0] }}
                </p>
              </div>
              <div class="col-lg-4 col-md-6">
                <input
                  type="number"
                  class="form-control"
                  name="people"
                  id="people"
                  placeholder="# of people"
                  v-model="state.people"
                />
                <p
                  v-if="state.errors && state.errors.people"
                  class="text-danger"
                >
                  {{ state.errors.people[0] }}
                </p>
              </div>
            </div>

            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                v-model="state.message"
                id="message"
              ></textarea>
              <p
                v-if="state.errors && state.errors.message"
                class="text-danger"
              >
                {{ state.errors.message[0] }}
              </p>
            </div>

            <div class="col-md-12 text-center mt-3">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <!-- End Reservation Form -->
      </div>
    </div>
  </section>
</template>