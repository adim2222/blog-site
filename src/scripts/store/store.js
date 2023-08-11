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