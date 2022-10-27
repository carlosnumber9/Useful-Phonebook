<template>
  <div class="list">
    <p class="more-info">
      Click on a contact to see more info.
    </p>
    <ul>
      <!-- eslint-disable-next-line -->
            <li v-for="contact in contacts">
        <router-link
          :to="{ name: 'contact', path: contact.id, params: { contact: JSON.stringify(contact), contactId: contact.id } }"
        >
          <contactContainer :contact="contact" />
        </router-link>
        <div class="new-contact-form" />
      </li>
    </ul>
    <div class="buttons">
      <button
        class="button"
        @click="contacts = getRandomUsers()"
      >
        Generate new random contacts
      </button>
    </div>
  </div>
</template>

<script>
import ContactContainer from "../fragments/ContactContainer";
import { getNewContacts } from '../utils/Contact';

const ITEMS_PER_PAGE = Math.ceil(Math.abs(Math.random() * (5 - 2) + 2));

export default {
    name: "ContactList",
    components: {
        ContactContainer,
    },
    data() {
        return {
            contacts: [],
        };
    },
    created: function () {
        this.contacts = this.getRandomUsers();
    },
    methods: {
        getRandomUsers: function () {
            return getNewContacts(ITEMS_PER_PAGE);
        },
        updateNumberOfPages: function () {
            this.totalPages =
                this.contacts.length > ITEMS_PER_PAGE
                    ? Math.ceil(this.contacts.length / ITEMS_PER_PAGE)
                    : 1;
        }
    },
};
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
