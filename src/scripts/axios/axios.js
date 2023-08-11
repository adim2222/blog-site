import axios from 'axios';

const getPosts = () => axios.get('https://dummyjson.com/posts?limit=150').then((response) => response.data)

const getComments = () => axios.get('https://dummyjson.com/comments?limit=340').then((response) => response.data)

export {getComments, getPosts}