<template>
  <div class="list">
    <ul>
      <!-- eslint-disable-next-line -->
      <li v-for="contact in contacts">
        <contactContainer v-bind:contact="contact"> </contactContainer>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import randomGenerator from 'random-profile-generator';
import ContactContainer from '../fragments/ContactContainer';

const JSON_SERVER_ADDRESS = 'http://localhost:8000';

export default {
  name: 'ContactList',
  components: {
    ContactContainer
  },
  data() {
    return {
      contacts: []
    }
  },
  methods: {
    generateRandomUsers() {
      var i;
      var randomUsers = [];
        for(i=0; i<5; i++) {
          randomUsers.push(randomGenerator.profile());
        }
        return randomUsers;
  },
  async clearDatabase() {
    var dbData = []; 
    await axios.get(JSON_SERVER_ADDRESS + '/contacts')
    .then(response => dbData = response.data);
        // await axios.delete(JSON_SERVER_ADDRESS + '/contacts');
     dbData.map(async contactToRemove => {
       await axios.delete(JSON_SERVER_ADDRESS + '/contacts/' + contactToRemove.id)
        .then(response => console.log(response));
      });
  },
  addToDatabase(newContacts) {
    newContacts.map(newContact => {
      axios.post(JSON_SERVER_ADDRESS + '/contacts', newContact);
    });
  }
  },
  created: function() {
    this.clearDatabase();
    // var newRandomUsers = this.generateRandomUsers();
    // this.addToDatabase(newRandomUsers);
    // this.contacts = newRandomUsers;
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
