<template>

<div class="wrapper">
<div class="pic">

</div>
<div class="contact-info">
{{ contact.first_name }}
{{ contact.last_name }}
</div>
</div>



</template>





<script>
export default {
name: "contactContainer",
props: ["contact"]

}
</script>



<style scoped>
.wrapper {
  min-width: 320px;
  border: 1px solid red;
  display: flex;
}
</style>>
