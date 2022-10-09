import Vue from 'vue';
import Router from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetail from './components/ContactDetail';

Vue.use(Router);

export default new Router({
  routes: [
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
  ],
});
