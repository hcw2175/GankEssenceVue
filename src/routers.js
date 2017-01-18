/**
 * 路由配置
 * @author hucw
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

// 统一在顶部引入页面组件，避免加载性能问题
import App from "./app";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            }
        ]
    }
];

export default new VueRouter({
    routes: routes,
    history: true,
    linkActiveClass: 'active' //如果有底部导航栏，这个属性可以为被选中的路由增加相应的选中状态class
});

