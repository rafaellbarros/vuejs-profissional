import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
