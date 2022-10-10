import { createRouter, createWebHashHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetail from './components/ContactDetail';

const routes = [
  {
    path: '/',
    name: 'contactList',
    component: ContactList,
  },
  {
    path: '/contact/:id',
    name: 'contact',
    component: ContactDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
