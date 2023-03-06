import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store'

import Home from '@/views/home';
import About from '@/views/about';
import Login from '@/views/login';
import Error from '@/views/error';

////////// Routes //////////
const routes = [
    {
        path: '/',
        redirect: '/home',
        meta: { requiresAuth: true }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/error',
        name: 'Error',
        component: Error
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/error'
    }
];

////////// Router //////////
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to) => {
    if (to.meta.requiresAuth && (store.getters.getJwt === '' || store.getters.getJwt === 'logged_out')) {
        return { path: '/login' }
    }
});

////////// Export //////////
export default router;
