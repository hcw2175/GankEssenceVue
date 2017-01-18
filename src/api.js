/**
 * 干货集中营API
 * @author hucw
 */

import http from "./components/http";

const apiHost = "http://gank.io/api";

/**
 * 干货集中营API返回结果处理
 *
 * @param response
 * @returns {Promise}
 */
function resolveResponse(response) {
    return new Promise(function (resolve, reject) {
        const data = response.data;
        if (data.error === "false" || data.error === false) {
            resolve(data.results);
        } else {
            reject("API请求异常");
        }
    });
}

module.exports = {

    /**
     * 加载干货集中营已发布过的日期数据
     *
     * @returns {Promise.<TResult>|Promise<R2|R1>|Promise<R>}
     */
    fetchHistoryDays: function () {
        return http.get(apiHost + "/day/history").then(resolveResponse);
    },

    /**
     * 获取指定日期的网站HTML数据
     *
     * @param date 指定日期，格式必须为：yyyy/MM/dd
     */
    fetchWebHtml: function (date) {
        return http.get(apiHost + "/history/content/day/" + date).then(resolveResponse);
    },

    /**
     * 获取文章数据
     * @param date 指定日期
     */
    fetchDayArticles: function (date) {
        return http.get(apiHost + "/day/" + date);
    }
};

