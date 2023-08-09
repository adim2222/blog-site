<script setup>
import { useRoute } from 'vue-router';
import store from "../scripts/store/store.js"

const route = useRoute();

console.log(route.params);

let id = parseInt(route.params.id)

import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
    <header>
        {{ store.state.data[id - 1].title }}
    </header>
    <div class="body">
        {{ store.state.data[id - 1].body }}
    </div>
    <div class="back-button" @click="router.back">
        Back
    </div>
</template>

<style scoped>

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
.back-button:hover {
    transform: translate(10px, 0px);
}
header {
    margin: 20px;
    font-size: 40px;
}
.body {
    margin: 20px;
    font-size: 20px;
}
</style>