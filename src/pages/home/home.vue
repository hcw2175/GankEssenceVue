<style lang="scss">
    @import "../../assets/scss/app.scss";

    .cover{
        height: 280px;
        background: no-repeat center;
        background-size: cover;
    }

    h4{
        font-size: 14px;
        margin: 15px 0 10px 0;
    }

    .article-item{
        color: $text_second;
        margin: 7px 0;
    }
</style>

<template>
    <div>
        <div class="cover" v-bind:style="{ backgroundImage: 'url(' + coverImage + ')' }">
            <!--<img v-lazy="coverImage" src="" v-if="coverImage !== '' "/>-->
        </div>

        <div class="padding">
            <div v-for="category in categories">
                <h4>{{category}}</h4>

                <p class="article-item" v-for="item in articles[category]">* {{item.desc}}</p>
            </div>
        </div>

        <!--<mt-button type="primary" @click="handleClick">Toast</mt-button>

        <router-link to="/login">Go to Login</router-link>-->
    </div>
</template>

<script>
    import api from "../../api";
    import moment from 'moment';

    export default {
        name: 'home',
        data: function () {
            return {
                coverImage: "",
                categories: [],
                articles: {},
            };
        },
        created: function () {
            const that = this;

            api.fetchHistoryDays()
                .then(function (resp) {
                    let newestDate = moment(resp[0]).format("YYYY/MM/DD");
                    that.getHomeMeiZhi(newestDate);
                    that.fetchArticles(newestDate);
                });
        },
        methods: {
            handleClick: function () {
                this.$toast('Hello world!');
            },

            fetchArticles: function (date) {
                const that = this;
                api.fetchDayArticles(date)
                    .then(function (resp) {
                        const data = resp.data;
                        if (data.error === "false" || data.error === false) {
                            that.categories = data.category;
                            that.articles = data.results;
                        } else {
                            console.log("API请求异常");
                        }
                    });
            },

            /**
             * 从网站数据中匹配封面图片
             * @param date 指定日期，格式必须：yyyy/MM/dd
             */
            getHomeMeiZhi: function (date) {
                const that = this;

                api.fetchWebHtml(date)
                    .then(function (resp) {
                        let webHtml = resp[0].content;
                        //匹配图片（g表示匹配所有结果i表示区分大小写)
                        const imgReg = /<img.*?(?:>|\/>)/gi;
                        //匹配src属性
                        const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;

                        let imgs = webHtml.match(imgReg);
                        if(imgs.length > 0){
                            let coverImg = imgs[0].match(srcReg);
                            if(coverImg.length > 0){
                                let coverImgSrc = coverImg[0];
                                that.coverImage = coverImgSrc.substring(5, coverImgSrc.length - 1);
                            }
                        }
                    });
            }
        }
    };
</script>
