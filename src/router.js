/**
 * 路由配置
 * @author hucw
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入各页面Vue实例
import Home from './pages/home/home.vue';
import Login from './pages/login/login.vue';

export default new VueRouter({
    scrollBehavior: () => ({
        y: 0
    }),

    routes: [{
        path: '/',
        redirect: '/home'
    },{
        path: '/home',
        name: 'home',
        component: Home
    },{
        path: '/login',
        name: 'login',
        component: Login
    }]
});

