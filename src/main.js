import '@/assets/css/main.css';
import '@/assets/js/main.js';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(router);

router.afterEach((to) => {
  const defaultTitle = 'Delicious';
  document.title = to.meta.title || defaultTitle;
});

 
app.mount('#app');
 
