import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../../components/Home.vue";
import Content from "../../components/Content.vue"

const routes = [
    {path:"/", name:"home", component: Home},
    {path:"/content/:id", name:"content", component: Content}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;