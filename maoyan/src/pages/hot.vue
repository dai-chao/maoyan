<template>
    <div class="hot" ref="box">
        <div ref = 'aa'>
            <list v-for="item ,index in  movieList" :data="item" :key="index"></list>
        </div>

    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    import List from '../components/list';
    import axios from 'axios';
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
    })

    export default {
        name: "hot",
        components:{List},
        created(){
            this.getData()
        },

        mounted() {
            // var yushou = $('button');
            // yushou.map(function (index, item) {
            //     if ($(this).html() === '预售') {
            //         item.style.background = '#3c9fe6'
            //     }
            // });
            /********* scroll */
            let self = this;
            let scroll=new Bscroll(this.$refs.box,{
                scrollX:false,
                scrollY:true,
                bounce:false, //防抖动
                click:true    // 屏蔽所有点击事件
            });
            scroll.on('scrollEnd',function (params) {

                let  maxHeight = self.$refs.aa.offsetHeight;
                let scrollTop = Math.abs(params.y);
                let viewHeight = self.$refs.box.offsetHeight;
                // console.log(maxHeight,scrollTop,viewHeight)
                if((scrollTop + viewHeight) >=maxHeight){

                    self.getData();
                }
            })
        },
        data(){
                return {
                    movieIds:[],
                    movieList:[],
                    flag:false,
                    page:0,
                }
        },
        methods:{
            async getData(){
                this.page++;
                let url = 'sexLady/ajax/movieOnInfoList?token=';
                let params = {};
                if(this.page>1){
                    url = 'sexLady/ajax/moreComingList?token=';
                    params.params={
                        movieIds:this.movieIds.slice((this.page-1)*10,this.page*10).join(',')
                    }
                }
                let data= await axios.get(url,params);
                // self.flag=false;
                if(this.page<=1){
                    this.movieIds=[].concat(data.data.movieIds);
                    this.movieList = this.movieList.concat(data.data.movieList)
                }else {
                    this.movieList = this.movieList.concat(data.data.coming)
                }
            }
        }

    }
</script>

<style scoped>
    #kong {
        margin-top: 100px;
    }
    .hot{
        width: 100%;
        height: 6.0rem;
        overflow: hidden;
    }



</style>


<!--<div class="lock">{{item.wish}}人想看</div>-->
<!--<div id="lett">❤</div>-->









