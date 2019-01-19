<template>
    <div>
        <router-view></router-view>
        <div id="list" >
            <div id="list_img">
                <img :src="'https://p1.meituan.net/128.180'+data.img.slice(25)" alt="">
            </div>
            <div id="list_min">
                <div id="list_min_le">
                    <div id="list_page">
                        <div id="title">{{data.nm}}</div>
                        <div id="guanzhong">观众评<span>{{data.sc}}</span></div>
                        <div id="zhuyan">主演:{{data.star}}</div>
                        <div id="page">{{data.showInfo}}</div>
                    </div>
                </div>
                <div id="list_min_re">
                    <button id="list_min_re_bn" @click="goPage" v-show-list="`${data.showst}`"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    Vue.directive('showList',{
        bind(el,binding){
            if(binding.value == '4'){
                el.innerHTML = '预售';
                el.style.background = '#3c9fe6'
            }else {
                el.innerHTML = '购票';
                el.style.background = '#e54847'

            }
        }
    });
    export default {
        name: "list",
        props:['data'],
        methods:{
            goPage(){
                this.$router.push({path:'/page',
                    query:{id:this.data.id}
                })
            }
        }
    }
</script>

<style scoped>
    #list{
        height: 1.15rem;
        width: 100%;
        /*background: #55a532;*/
        /*border-bottom: 1px solid grey;*/
        box-sizing: border-box;
        padding: 0.16rem  0rem  0 0.16rem ;
    }
    #list_img{
        width: 0.64rem;
        height: 0.82rem;
        background: #0086b3;
        display: flex;
        float: left;
    }
    #list_img>img{
        width: 100%;
        height: 100%;
    }
    #list_min{
        float: right;
        height: 100%;
        width: 3.2rem;
        box-sizing: border-box;
        border-bottom: 2px solid #d1caca;
        display: flex;
    }
    #list_min_le{
        width: 80%;
        height: 100%;
        background: #fff;

    }
    #list_min_re{
        width: 20%;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        padding: 35px 0px;
    }
    #list_min_re_bn{
        width: 0.47rem;
        height: 0.27rem;
        background: #f03d37;
        border: none;
        border-radius: 10%;
        color: #fff;
    }

    #zhuyan{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666666;
        font-size: 0.14rem;
    }
    #guanzhong{
        color: #666666;
        font-size: 0.14rem;
    }
    #guanzhong span{
        font-size: 0.14rem;
        color: #faaf00;
    }
    #title{
        font-size: 0.18rem;
        font-weight: bold;
        color: #333333;
    }
    #page{
        color: #666666;
        font-size: 0.14rem;
        overflow-y: auto;
    }
</style>