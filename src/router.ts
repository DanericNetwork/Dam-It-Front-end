import{createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/HomeView.vue')
        },
        {
            path: '/auth/guest',
            component: () => import('./views/Auth-guest.vue')
        }
    ]});

export default router;