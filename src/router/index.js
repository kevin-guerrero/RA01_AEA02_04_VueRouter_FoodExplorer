import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import RecepteDetail from '@/views/RecepteDetail.vue'
import Receptes from '@/views/Receptes.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/receptes",
        name: "receptes",
        component: Receptes,
    },
    {
        path: "/receptes/:id",
        name: "recepte-detail",
        component: RecepteDetail
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound
    }
  ]
})

export default router
