import axios from 'axios';
import store from '../store/store.js';

async function getPosts() {
    const promise = axios.get('https://dummyjson.com/posts').then(function (response) {
        store.dispatch('getPosts', response.data.posts);
    })
    getComments();
}

async function getComments() {
    const promise = axios.get('https://dummyjson.com/comments').then(function (response) {
        store.dispatch('getComments', response);
        console.log(response)
    })
}

export default getPosts;