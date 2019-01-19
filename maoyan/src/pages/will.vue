<template>
    <div class="will" ref="will">
        <div style="padding: 12px 0 12px 15px;background-color: #fff;">
            <div>
                <p class="w_title">近期最受期待</p>
                <div ref="wx" class="row_box">
                    <div class="clearfix" :style="{width: line}">
                        <li v-for="item,index in coming">
                            <img :src="'https://p1.meituan.net/128.180'+item.img.slice(25)" alt="" class="w_img">
                            <p class="w_t">{{item.nm}}</p>
                            <p class="w_t2">{{item.comingTitle.split('周')[0] }}</p>


                        </li>
                    </div>
                </div>
                <div style="margin-top: 10px;border-bottom:10px solid rgb(51, 51, 51, 0.082);margin-left:-20px"
                ></div>
            </div>
            <div class="aaa1" ref="aa1">
                <div class="w_body-l" v-for="items,index in comingList">
                    <h2 class="w_time">{{items.comingTitle}}</h2>
                    <div class="imgbox">
                        <div class="w_body-img"><img :src="'https://p1.meituan.net/128.180'+items.img.slice(25)" alt=""></div>
                        <div class="w_body-r">
                            <div>
                                <h2>{{items.nm}}</h2>
                                <span class="wp">{{items.wish}}</span><span>人想看</span><br>
                                <p><span>主演：</span><span>{{items.star}}</span></p>
                                <span>{{items.rt}}</span>
                            </div>
                            <button class="yushouB"  v-show="`${items.showst}`" ></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    import axios from "axios";
    import Vue from 'vue';
    Vue.directive('show',{
        bind(el,binding){
            if(binding.value == '4'){
                el.innerHTML = '预购'
            }else {
                el.innerHTML = '想看';
                el.style.background = '#faaf00'

            }
        }
    });

    export default {
        name: "will",
        created() {
            this.getData();
            this.getData1()
        },
        mounted() {

            let self = this;
            this.scroll1 = new BScroll(this.$refs.wx, {
                scrollX: true,
                scrollY: false,
                click: true,
                bounce:false
            });
            this.scroll1.on("scrollEnd", function(params) {
                let maxHeight = self.$refs.wx.offsetWidth;
                let scrollLeft = Math.abs(params.x);
                let view = self.coming.length * 85;
                if (maxHeight + scrollLeft >= view) {
                    self.getData();
                }
            });
            this.BScroll1 = new BScroll(this.$refs.will, {
                scrollX: false,
                scrollY: true,
                click: true,
                bounce:false
            });
            this.BScroll1 .on("scrollEnd",function(params){

                let maxHeight = self.$refs.aa1.offsetHeight;
                let scrollTop = Math.abs(params.y);
                let viewHeight = self.$refs.will.offsetHeight;
                if((scrollTop + viewHeight)>=maxHeight){
                    self.getData1();
                }else{
                    self.getData1();
                }
            });
        },
        updated() {
            this.scroll1.refresh();
        },
        data(){
            return{
                coming:[],
                page:0,
                num:0,
                movieIds:[],
                comingList:[],
                flag:false
            }

        },
        methods: {
            async getData(){
                this.page++;
                let url="/sexLady/ajax/mostExpected";
                let offset=(this.page-1)*10;
                let data=await axios.get(url,{
                    params:{
                        ci:1,
                        limit:10,
                        offset:offset,
                        token:""
                    }
                });
                if(this.page<=1){
                    this.coming=[].concat(data.data.coming)
                }else{
                    this.coming=this.coming.concat(data.data.coming)
                }
            },async getData1(){
                this.num++;
                let url="/sexLady/ajax/comingList?ci=1&token=&limit=10";
                let params={};
                if(this.num>1){
                    url="/sexLady/ajax/moreComingList?ci=1&token=&limit=10";
                    params.params={
                        movieIds:this.movieIds.slice((this.num-1)*10,this.num*10).join(",")
                    }
                }
                let data=await axios.get(url,params);
                if(this.num<=1){
                    this.movieIds=[].concat(data.data.movieIds);
                    this.comingList=this.comingList.concat(data.data.coming);
                }else{
                    this.comingList=this.comingList.concat(data.data.coming);
                }
            },

        },
        computed: {
            line() {
                let len = this.coming.length;
                return len * 90 + "px";
            }
        }
    };
</script>

<style>


    .row_box {
        width: 100%;
        height: 157px;
        overflow: hidden;
    }
    .yushouB{
        font-size: 20px;
    }
    .w_title {
        margin: 0 0 12px;
        font-size: 14px;
        color: #333;
    }
    .aaa1 {
        width: 100%;
    }
    .clearfix>li{
        float: left;
        height:1.67rem;
        width: 0.85rem;
        margin-right: .14rem;
    }
    .clearfix>li img{
        width: 0.85rem;
        height: 1.15rem;
    }
    /*.clearfix>li p{*/
        /*font-size: 0.1rem;*/
        /*margin-top: 0.09rem;*/
        /*text-overflow:ellipsis;*/
        /*white-space: nowrap;*/
        /*overflow: hidden;*/
    /*}*/
    .will {
        width: 100%;
        height: calc(100vh - 150px);
        overflow: hidden;
    }
    .imgbox{
        display: flex;
    }
    .w_body-l{
        height: 140px;
        width: 100%;
    }
    .w_body-l img{
        height: 0.9rem;
        width: 0.64rem;
    }
    .w_body-r{
        width: 2.96rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 0.15rem;
        border-bottom: 0.01rem solid #d8d8d8;
    }
    .w_body-r h2{
        font-size: .18rem;
        font-weight: bold;
    }
    .wp{
        color: #faaf00;
        font-size: .1rem;
        margin-right: 0.03rem;
    }
    /*#w_body-r p{*/
        /*margin-top:.02rem ;*/
        /*margin-bottom: .02rem;*/
    /*}*/
    .yushouB{
        border: none;
        width: .47rem;
        height: .27rem;
        color: #fff;
        background-color: #3c9fe6;
        font-size: .05rem;
        border-radius: 5px;
    }
    .w_t2{
        margin-top: 5px;
    }
    .w_t{
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .w_time{
        margin: 5px 0;
    }
    /*.w_body-img{*/
        /*margin-top: 10px;*/
    /*}*/
</style>