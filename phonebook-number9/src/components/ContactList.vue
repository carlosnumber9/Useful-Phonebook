<template>
  <div class="list">
    <ul>
      <li v-for="contact in contactList">
        <contactContainer v-bind:contact="contact" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ContactContainer from '../fragments/ContactContainer';

export default {
  name: 'ContactList',
  components: {
    ContactContainer
  },
  methods: {
    retrieveContacts() {
      axios.get('http://localhost:3000/contacts')
      .then(res => this.contactList = res.data)
      .catch(err => console.error(err))
    }
  },
  created() {
    this.retrieveContacts()
  },
  data() {
    return {
      contactList: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
