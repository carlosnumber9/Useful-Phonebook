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
  /* border: 1px solid red; */
  display: flex;
  margin: 5px;

    background-color: #c5e99b;

    -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;

border: 1px solid #548687;

}
.pic {
    border: 1px solid black;
    min-width: 100px;
}
.contact-info {
    text-align: right;
}
</style>>
