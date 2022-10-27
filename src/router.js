import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetail from './components/ContactDetail';

export const HOME = '/';

const routes = [
  {
    path: HOME,
    name: 'contactList',
    component: ContactList,
  },
  {
    path: HOME + 'contact/:contactId',
    name: 'contact',
    component: ContactDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
