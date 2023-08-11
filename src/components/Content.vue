<script setup>
import { useRoute } from 'vue-router';
import store from "../scripts/store/store.js"
import {computed} from 'vue'

const route = useRoute();

console.log(route.params);

let id = parseInt(route.params.id)

import { useRouter } from 'vue-router'

const router = useRouter();

let comments = store.state.comments.data.comments.filter((comment) => {
    return comment.postId === id;
});

console.log(comments)
</script>

<template>
    <img :src="`https://picsum.photos/1000/300?random=${id}`">
    <header>
        {{ store.state.posts[id - 1].title }}
    </header>
    <div class="body">
        {{ store.state.posts[id - 1].body }}
    </div>
    <div class="back-button">
        <v-btn width="200px" @click="router.back">
            Back
        </v-btn>
    </div>
    <div class="comment-section ml-3 mt-3">
        <span class="comment-section-label ml-3">Comments:</span>
        <div class="comment mb-4 pa-2" v-for="comment in comments">
            <v-avatar color="surface-variant">{{ comment.user.id }}</v-avatar>
            <span class="ml-2 username">{{ comment.user.username }}:</span>
            <span class="ml-6">{{ comment.body }}</span>
        </div>
    </div>
</template>

<style scoped>
.comment-section {
    border: dashed black 1px;
}

.comment-section-label {
    font-size: 30px;
}

.comment {
    border-bottom: solid black 1px;
}

.username {
    font-size: 18px;
}

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