import { createRouter, createWebHashHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetail from './components/ContactDetail';

export const HOME = process.env.NODE_ENV === 'production'
? '/' + process.env.CI_PROJECT_NAME + '/'
: '/';

const routes = [
  {
    path: HOME,
    name: 'contactList',
    component: ContactList,
  },
  {
    path: HOME + 'contact/:contact.id',
    name: 'contact',
    component: ContactDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
