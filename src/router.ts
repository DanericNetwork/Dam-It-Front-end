import{createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/HomeView.vue')
        },
        {
            path: '/game',
            component: () => import('./views/GameView.vue')
        }
    ]});

export default router;