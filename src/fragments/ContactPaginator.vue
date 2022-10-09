<template>
  <div class="wrapper">
    <div
      v-for="(page, index) in pages"
      :key="index"
      class="page-container"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPaginator",
  data() {
    return {
      totalPages: undefined,
      pages: []
    }
  },
  created() {
    this.pages = Array.from(Array(this.totalPages).keys()).map(function (page) {
      return ++page;
    });
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  border: 1px solid black;
  font-size: 1rem;
  justify-content: center;
  margin-bottom: 10px;
}

.page-container {
  border: 1px solid black;
  width: 20px;
  height: 20px;
  background-color: white;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
