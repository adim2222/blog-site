import { createStore } from "vuex";
import { getComments, getPosts } from "../axios/axios.js";

const store = createStore({
    state () {
        return {
            posts: [],
            comments: [],
        }
    },
    mutations: {
        setPosts (state, value) {
            state.posts = value;
        },
        setComments (state, value) {
            state.comments = value;
        },
        error (state) {
            state.posts = "loading content error"
            state.comments = "loading content error"
        }
    },
    actions: {
        async getPosts (state) {
            let payload = await getPosts();
            state.commit('setPosts', payload.posts);
        },
        async getComments (state) {
            let payload = await getComments();
            state.commit('setComments', payload.comments);
        }
    },
})

export default store;