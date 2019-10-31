import Vue from 'vue'
import Router from 'vue-router'
import ContactList from './components/ContactList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contactList',
      component: ContactList
    },
    {
      path: '/contact/:id',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './components/Contact.vue')
    }
  ]
})
