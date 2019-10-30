<template>
<div class="list">
    <p class="more-info"> Click on a contact to see more info. </p>
    <ul>
        <!-- eslint-disable-next-line -->
        <li v-for="contact in contacts">
            <router-link :to="{ name: 'contact', params: {id: contact.id } }">
                <contactContainer v-bind:contact="contact"> </contactContainer>
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios';
import randomGenerator from 'random-profile-generator';
import ContactContainer from '../fragments/ContactContainer';

const JSON_SERVER_ADDRESS = 'http://localhost:8000';
const DEFAULT_CONTACT_LIST_SIZE = 5;
const DEFAULT_ITEMS_PER_PAGE = Math.abs(Math.random() * (0 - 10));

export default {
    name: 'ContactList',
    components: {
        ContactContainer
    },
    data() {
        return {
            contacts: [],
            generateContacts: true
        }
    },
    methods: {
        generateRandomUsers() {
            var i;
            var randomUsers = [];
            for (i = 0; i < DEFAULT_CONTACT_LIST_SIZE; i++) {
                randomUsers.push(randomGenerator.profile());
            }
            return randomUsers;
        },
        async clearDatabase() {
            var dbData = [];
            await axios.get(JSON_SERVER_ADDRESS + '/contacts')
                .then(response => dbData = response.data);
            dbData.map(async contactToRemove => {
                await axios.delete(JSON_SERVER_ADDRESS + '/contacts/' + contactToRemove.id)
                    .then(response => console.log(response));
            });
        },
        addToDatabase(newContacts) {
            newContacts.map(async newContact => {
                await axios.post(JSON_SERVER_ADDRESS + '/contacts', newContact);
            });
        },
        async getContacts() {
            var dbData;
            await axios.get(JSON_SERVER_ADDRESS + '/contacts')
                .then(response => dbData = response.data);
            return dbData;
        },
        async init(generateContacts) {
            if (generateContacts) {
                // await this.clearDatabase();
                // var newRandomUsers = this.generateRandomUsers();
                // await this.addToDatabase(newRandomUsers);
            }
            this.contacts = await this.getContacts();
        }
    },
    created: async function () {
        this.init(this.generateContacts);
        if (this.generateContacts) this.generateContacts = false;
    }
}
</script>

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

.list:hover > .more-info {
  opacity: 1;
  transition: 1s ease-in-out;
}

.more-info {
  opacity: 0;
    transition: 1s ease-in-out;
}
</style>
