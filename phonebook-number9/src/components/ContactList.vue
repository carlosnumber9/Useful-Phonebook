<template>
<div class="list">
    <p class="more-info"> Click on a contact to see more info. </p>
    <ul>
        <!-- eslint-disable-next-line -->
        <li v-for="contact in contacts">
            <router-link :to="{ name: 'contact', params: {id: contact.id } }">
                <contactContainer v-bind:contact="contact"> </contactContainer>
            </router-link>
            <div class="new-contact-form">

            </div>
        </li>
    </ul>
    <div class="buttons">
        <a class="button" @click="init"> Generate new random contacts </a>
    </div>
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
            contacts: []
        }
    },
    methods: {
        generateRandomUsers() {
            var i;
            var randomUsers = [];
            const listSize = Math.abs(Math.random() * (0 - 5));
            for (i = 0; i < listSize; i++) {
                randomUsers.push(randomGenerator.profile());
            }
            return randomUsers;
        },
        async clearDatabase() {
            await axios.get(JSON_SERVER_ADDRESS + '/contacts')
                .then(response => response.data.map(async contact => {
                    await axios.delete(JSON_SERVER_ADDRESS + '/contacts/' + contact.id)
                        .then(response => console.log('Deleted: ' + response));
                }));
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
        async init() {
            await this.clearDatabase();
            this.contacts = this.generateRandomUsers();
            await this.addToDatabase(this.contacts);
            this.totalPages = (this.contacts.length > DEFAULT_ITEMS_PER_PAGE) ?
                Math.ceil(this.contacts.length / DEFAULT_ITEMS_PER_PAGE) :
                1;
        }
    },
    created: async function () {
        this.contacts = await this.getContacts();
        this.totalPages = (this.contacts.length > DEFAULT_ITEMS_PER_PAGE) ?
            Math.ceil(this.contacts.length / DEFAULT_ITEMS_PER_PAGE) :
            1;
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

.list:hover>.more-info {
    opacity: 1;
    transition: 1s ease-in-out;
}

.more-info {
    opacity: 0;
    transition: 1s ease-in-out;
}

.button {
    display: inline-block;
    cursor: pointer;
    color: black;
    padding: 4px;
    border: 1px solid lightgray;
    background-color: #95f9e3;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    transition: 0.2s ease-in-out;
    margin: 5px;
}

.button:hover {
    background-color: lightgreen;
    transition: 0.2s ease-in-out;
}
</style>
