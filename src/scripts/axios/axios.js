import axios from 'axios';
import store from '../store/store.js';

async function getPosts() {
    const promise = axios.get('https://dummyjson.com/posts?limit=150').then(function (response) {
        store.dispatch('getPosts', response.data.posts);
    })
    getComments();
}

async function getComments() {
    const promise = axios.get('https://dummyjson.com/comments?limit=340').then(function (response) {
        store.dispatch('getComments', response);
    })
}

export default getPosts;