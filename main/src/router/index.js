import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main';
import Login from '@/views/Login';

Vue.use(VueRouter);

const routes = [
    Main,
    Login
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
