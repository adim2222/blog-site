<script setup>
import store from '../scripts/store/store.js'
import { useRouter } from 'vue-router'

const router = useRouter();

</script>

<template>
    <v-app>
        <v-main class="card-container">
            <div class="card" v-for="post in store.state.data" @click="router.push(`/content/${post.id}`)">
                <div class="fill"></div>
                <div class="card-title">{{ post.title }}</div>
            </div>
        </v-main>
    </v-app>
</template>

<style scoped>
.content-body {
    margin: 10px;
}

.content {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    font-size: 30px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-around;
}

.card {
    margin: 14px;
    height: 400px;
    width: 400px;
    border: solid black 1px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 11px 11px 24px -10px rgba(66, 68, 90, 1);
    transition: 0.3s;
}

.card:hover {
    transform: scale(1.1);
}

.card-title {
    font-size: 30px;
    padding: 10px;
}

.fill {
    background-color: red;
    width: 100%;
    height: 70%;
}</style>