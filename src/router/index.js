import Vue from 'vue'
import VueRouter from 'vue-router'
import Reader from '../views/Reader.vue'
import Account from "../views/Account.vue";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Reader',
        component: Reader
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },

]

const router = new VueRouter({
    routes
})

export default router