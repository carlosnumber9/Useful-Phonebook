<template>
<div class="wrapper">
    <div class="pic">
        <img class="contact-avatar" :src="contact.avatar" :alt="contact.firstName" />
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
    color: black;
    min-width: 320px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    margin: 5px;
    background-color: #95f9e3;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border: 1px solid #548687;
    transition: 0.3s ease-in-out;
}

.wrapper:hover {
    background-color: #e3d985;
    transition: 0.3s ease-in-out;
}

.pic {
    min-width: 100px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    font-weight: bold;
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
</style>
