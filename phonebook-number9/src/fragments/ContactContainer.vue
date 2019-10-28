<template>

<div class="wrapper">
<div class="pic">
<img class="contact-avatar" v-bind:src="contact.avatar"/>
</div>
<div class="contact-info">
<p class="contact-name"> {{ contact.firstName }} </p>
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
  min-height: 40px;
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
    min-width: 100px;
}
.contact-avatar {
    max-width: 80px;
    margin: 5px;

    -webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
}

.contact-name {
    float: right;
}
</style>>
