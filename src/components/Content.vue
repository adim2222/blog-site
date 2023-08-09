<script setup>
import { useRoute } from 'vue-router';
import store from "../scripts/store/store.js"

const route = useRoute();

console.log(route.params);

let id = parseInt(route.params.id)
</script>

<template>
    <header>
        {{ store.state.data[id - 1].title }}
    </header>
    <div class="body">
        {{ store.state.data[id - 1].body }}
    </div>
</template>

<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
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