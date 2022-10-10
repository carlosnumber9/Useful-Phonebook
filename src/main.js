import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp({
  extends: App,
})
  .use(router)
  .mount('#app');
