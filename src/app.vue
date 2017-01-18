<template>
    <div>
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
