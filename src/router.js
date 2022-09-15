import { createRouter, createWebHistory } from "vue-router";
    import DataTableScrollDemo from "./DataTableScrollDemo.vue"

    export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: DataTableScrollDemo }]
});