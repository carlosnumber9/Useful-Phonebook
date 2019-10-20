<template>
  <div class="list">
    <ul>
      <li v-for="contact in contactList">
        {{ contact.first_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactList',
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
