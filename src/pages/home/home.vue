<style>
    img{ max-width: 100%; }
</style>

<template>
    <div>
        <h3>Vue 开发框架特性：</h3>
        <p>* 使用Mint UI作为移动UI套件</p>
        <p>* 多页面路由vue-router支持</p>
        <p>* 通用数据请求vue-resource</p>
        <p>* 数据状态处理vuex</p>

        <div>
            封面图片：
            <div>
                <img v-lazy="coverImage" src="" v-if="coverImage !== '' "/>
            </div>
        </div>

        <mt-button type="primary" @click="handleClick">Toast</mt-button>

        <router-link to="/login">Go to Login</router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data: function() {
            return {
                coverImage: ""
            };
        },
        created: function () {
            const that = this;
            this.$http.get('http://gank.io/api/history/content/day/2016/09/02')
                .then(function (resp) {
                    console.log(JSON.stringify(resp.data));
                    that.coverImage = "http://ww1.sinaimg.cn/large/610dc034jw1f7ef7i5m1zj20u011hdjm.jpg";
                });
        },
        methods: {
            handleClick: function () {
                this.$toast('Hello world!');
            }
        }
    };
</script>
