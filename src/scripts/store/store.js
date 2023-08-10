import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            posts: "",
            comments: "",
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
        getPosts (state, value) {
            state.commit('setPosts', value)
        },
        getComments (state,value) {
            state.commit('setComments', value)
        }
    },
})

export default store;