<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <v-app>
        <v-app-bar class="navbar">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </v-app-bar>
        <v-main>
            <RouterView />
        </v-main>
    </v-app>
</template>

<style>
* {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
