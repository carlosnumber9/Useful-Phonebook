<template>
  <div>
    <div class="wrapper">
      <div
        v-if="!contact.avatar"
        class="no-data-container"
      >
        <span> No contact data available.</span>
      </div>
      <div v-if="contact.avatar">
        <img
          id="avatar"
          :src="contact.avatar"
          alt="Avatar"
        >
        <h3> {{ contact.fullName }} </h3>
        <div class="info-container">
          <span class="phone"> {{ contact.phone }} </span>
        </div>
        <div class="info-container">
          <span class="address"> {{ contact.address }} </span>
        </div>
      </div>
    </div>
    <router-link to="/">
      <h4 class="back-link">
        Back to list
      </h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ContactDetail",
  data() {
    return {
      contact: JSON.parse(this.$route.params.contact)
    }
  },
  created() {

  }
}
</script>

<style scoped>
.wrapper {
  border: 1px solid white;
  min-height: 250px;
  min-width: 320px;
  margin: 20px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background-color: #95f9e3;
}

#avatar {
  max-width: 100px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  margin: 5px;
}

.info-container {
  margin: 10px;
}

.back-link {
  color: blue;
}

.no-data-container {
  margin: 10px;
}
</style>
