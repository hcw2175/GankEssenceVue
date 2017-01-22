/**
 * VUE主入口文件
 *
 * @author hucw
 */

import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/scss/app.scss';

import App from './app';
import router from './routers';
import http from './components/http';
import store from './vuex/store';

// 使用第三方组件
Vue.use(Mint);

// 路由切换处理
router.beforeEach(({meta, path}, from, next) => {
    // TODO: 此处判断用户数据是否存在或过期，否则跳转到登录页面
    console.log('访问路由：' + path);

    // 继续往下执行
    next();
});

Vue.prototype.$http = http;

new Vue({ // eslint-disable-line
    el: '#app',
    router,
    store,
    render: (h) => h(App)
});

