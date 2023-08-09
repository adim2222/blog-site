import axios from 'axios';
import store from '../store/store.js';

async function getPosts() {
    const promise = axios.get('https://dummyjson.com/posts').then(function (response) {
        store.dispatch('getData', response.data.posts);
    })
}

export default getPosts;