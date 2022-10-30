import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetail from './components/ContactDetail';

export const HOME = process.env.NODE_ENV === 'production'
? '/' + process.env.CI_PROJECT_NAME + '/'
: '/';

console.debug(`NODE_ENV:  ${process.env.NODE_ENV}`);
console.debug(`CI_PROJECT_NAME:  ${process.env.CI_PROJECT_NAME}`);
console.debug(`env:  ${process.env}`);

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
