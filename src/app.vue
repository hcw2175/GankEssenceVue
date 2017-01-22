<style lang="scss">
    @import "./assets/scss/app.scss";

    .wrapper{
        width: 375px;
        height: 667px;
        margin: 0 auto;
        background-color: $white;
        overflow: auto;
    }
</style>

<template>
    <div class="wrapper">
        <router-view class="child-view"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        created: function () {
            if (this.$route.name === undefined){
                return this.$router.push('home');
            }
        }
    };
</script>
