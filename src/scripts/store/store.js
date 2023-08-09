import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            data: "",
        }
    },
    mutations: {
        setData (state, value) {
            state.data = value;
        }
    },
    actions: {
        getData (state, value) {
            state.commit('setData', value)
        }
    },
})

export default store;