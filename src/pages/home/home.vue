<style lang="scss">
  p{
    margin-bottom: 15px;
  }
</style>

<template>
  <div>
    <h3>Vue 开发框架特性：</h3>
    <p>* 使用Mint UI作为移动UI套件</p>
    <p>* 多页面路由vue-router支持</p>
    <p>* 通用数据请求vue-resource</p>
    <p>* 数据状态处理vuex</p>

    <mt-button type="primary" @click="handleClick">Toast</mt-button>

    <router-link to="/login">Go to Login</router-link>
  </div>
</template>

<script>
    export default {
        name: 'home',
        created: function () {
            /*this.$http.get('http://gank.io/api/history/content/day/2016/09/01')
                    .then(function (resp) {
                        console.log(resp);
                    });*/
        },
        methods: {
            handleClick: function () {
                this.$toast('Hello world!');
            }
        }
    };
</script>
