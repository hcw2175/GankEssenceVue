/**
 * Vue Http 请求组件
 *
 * @author hucw
 * @date   2017-01-06
 */
import axios from 'axios';
import qs from 'qs';
import config from '../../config/config';
import Promise from 'es6-promise';

// 设置ContentType
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 设置token
axios.defaults.headers.common['x-auth-token'] = 'x-auth-token';
/*axios.defaults.headers.common['x-requested-from'] = 'apiHttpRequest';*/

// 打印请求参数
axios.defaults.transformRequest = [function (data) {
    if (data) {
        console.log('请求参数：' + JSON.stringify(data));
    }
    return data;
}];

// 拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    handleError(error);
    return Promise.reject(error);
});

/**
 * 错误处理
 *
 * @param resp 返回结果
 */
function handleError(resp) {
    // TODO
}

export default{
    /**
     * POST 请求
     *
     * @param url
     * @param params
     * @returns {AxiosPromise}
     */
    post: function (url, params = {}) {
        return axios({
            method: 'post',
            url: config.api + url,
            data: qs.stringify(params),
            timeout: config.timeout
        });
    },

    /**
     * GET 请求
     *
     * @param url
     * @param params
     * @returns {AxiosPromise}
     */
    get: function (url, params = {}) {
        return axios({
            method: 'get',
            url: config.api + url,
            params,
            timeout: config.timeout

        });
    },

    /**
     * DELETE请求
     *
     * @param url
     * @param params
     */
    del: function (url, params) {
        // TODO
    },

    /**
     * PUT 请求
     *
     * @param url
     * @param parmas
     */
    put: function (url, params = {}) {
        // TODO
    },

    /**
     * AJAX请求，自行组装参数
     *
     * @param options
     */
    ajax: function (options) {
        // TODO
    }
};
