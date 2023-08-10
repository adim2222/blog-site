<script setup>
import { RouterView } from 'vue-router';
import { ref } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter();

let showNav = ref(false);
</script>

<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon="$vuetify" @click="showNav = !showNav"></v-btn>
            <v-spacer />
            <v-app-bar-title>Blog test site</v-app-bar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="showNav" app>
            <v-list>
                <v-list-item><v-btn variant="outlined" @click="router.push('/')">Home</v-btn></v-list-item>
                <v-list-item><v-btn variant="outlined" @click="router.push('/about')">About</v-btn></v-list-item>
                <v-list-item>item 3</v-list-item>
                <v-list-item>item 4</v-list-item>
                <v-list-item>item 5</v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <RouterView />
        </v-main>
    </v-app>
</template>

<style>
* {
    font-family: Arial, Helvetica, sans-serif;
}

.nav-button {
    text-decoration: none;
    color: black;
    border: dashed black 1px;
    border-radius: 10px;
    padding: 5px;
    font-size: 30px;

}

.nav-bar {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
}
</style>
