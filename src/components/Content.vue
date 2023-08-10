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
    <img :src="`https://picsum.photos/1000/300?random=${id}`">
    <header>
        {{ store.state.data[id - 1].title }}
    </header>
    <div class="body">
        {{ store.state.data[id - 1].body }}
    </div>
    <div class="back-button">
        <v-btn width="200px" @click="router.back">
            Back
        </v-btn>
    </div>
</template>

<style scoped>
img {
    width: 100%;
}
.back-button {
    margin-left: 20px;
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