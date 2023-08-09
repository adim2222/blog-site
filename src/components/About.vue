<script setup>
import {useRouter} from "vue-router"

const router = useRouter();
</script>

<template>
    <header>This site was made to test vuetify and vue-router.</header>
    <div class="back-button" @click="router.back">
        Back
    </div>
</template>

<style scoped>
.back-button:hover {
    transform: translate(10px, 0px);
}
header {
    font-size: 30px;
    margin: 20px;
}
.back-button {
    margin: 20px;
    width: 200px;
    height: 50px;
    background-color: red;
    text-align: center;
    font-size: 45px;
    transition: 0.3s;
    border-radius: 10px;
    border: solid black 1px;
}
</style>