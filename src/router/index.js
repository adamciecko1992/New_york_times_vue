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
    { path: "/:id", component: Reader, name: 'ReaderId', },
    {
        path: '/account/:id',
        name: 'account',
        component: Account
    },
    {
        path: "/:id/:page",
        component: Reader,
        name: 'ReaderIdPage',
    }


]

const router = new VueRouter({
    routes,
    mode: "history"

})

export default router