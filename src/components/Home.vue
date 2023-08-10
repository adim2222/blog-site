<script setup>
import store from '../scripts/store/store.js'
import { useRouter } from 'vue-router'
import 'vuetify/styles'

const router = useRouter();

</script>

<template>
    <v-app>
        <v-main class="card-container">
            <v-card class="card d-flex flex-column" v-for="post in store.state.data" @click="router.push(`/content/${post.id}`)">
                <v-card-text style="word-break: break-word; font-size: x-large; line-height: 25px;">{{ post.title }}</v-card-text>
                <img src="https://picsum.photos/400/150">
                <v-card-text class="post-body">{{ post.body }}</v-card-text>
                <v-chip-group class="ml-2">
                    <v-chip variant="outlined" v-for="tag in post.tags">{{ tag }}</v-chip>
                </v-chip-group>
            </v-card>
        </v-main>
    </v-app>
</template>

<style scoped>
.post-body{
    max-height: 100px;
    overflow: hidden;
}
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
    background-color: black;
}

.card {
    margin: 14px;
    height: 400px;
    width: 400px;
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