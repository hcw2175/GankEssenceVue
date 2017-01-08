import Vue from 'vue';
import Mint from 'mint-ui';
import http from './components/http/http.js';

import 'mint-ui/lib/style.css';
import './assets/scss/app.scss';

// APP各组件
import App from './app';
import router from './router';

// 使用第三方组件
Vue.use(Mint);

// 添加Prototype
Vue.prototype.$http = http;

// 路由切换处理
router.beforeEach(({meta, path}, from, next) => {
    // TODO: 此处判断用户数据是否存在或过期，否则跳转到登录页面
    console.log('访问路由：' + path);

    // 继续往下执行
    next();
});

// 实例化Vue
new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');

