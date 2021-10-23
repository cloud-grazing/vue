import { createRouter, createWebHistory } from 'vue-router';
import Main from './Main';
import Login from './Login';

const routes = [
    Main,
    Login
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
