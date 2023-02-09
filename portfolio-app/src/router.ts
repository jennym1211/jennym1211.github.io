import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../src/components/HomePage.vue"

import AboutMe from "../src/components/AboutMe.vue";
import ProjectsIndex from "../src/components/ProjectsIndex.vue";

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "HomePage",
            component: HomePage,
        },
        {
            path: "/about",
            name: "About",
            component: AboutMe,
        },
        {
            path: "/projects",
            name: "Projects",
            component: ProjectsIndex,
        },
    ]
})
