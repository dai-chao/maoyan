<template>
    <div id="page">
         <div v-if="detailMovie.length>0">
             <div id="head-wrap">
                 <div id="cheader">
                     {{ detailMovie[0].nm }}
                 </div>
             </div>

             <em class="iconfont icon-arrow-left" @click="gogo"></em>
             <div class="clear"></div>
             <div id="pageMain" :style="'background-image:url(https://p1.meituan.net/128.180'+detailMovie[0].img.slice(25)+')'">
                 <div id="pageMainP"></div>
                 <img :src="'https://p1.meituan.net/128.180'+detailMovie[0].img.slice(25)" alt="" id="pageMainIMG">
                 <div id="pageNav">
                     <h2 id="pageT">{{ detailMovie[0].nm }}</h2>
                     <h2>{{detailMovie[0].enm}}</h2>
                     <p><span>{{detailMovie[0].sc}}</span><span>({{(detailMovie[0].snum/10000).toFixed(2)}}万人评)</span></p>
                     <h2>{{detailMovie[0].cat}}</h2>
                     <h2>{{detailMovie[0].fra}}</h2>
                     <h2>{{detailMovie[0].pubDesc}}</h2>
                     <em class="iconfont icon-iconfontjiantou5" style="font-size: 0.3rem; font-weight: bold;color: #acafb7"></em>
                 </div>
             </div>
         </div>
        <div id="pageTime">
            <ul>
                <li v-for="item,index in pageList">{{item.Ptime1}} 1 {{item.Ptime2}}13 {{item.Ptime3}} </li>
            </ul>
        </div>
        <div id="pageMap">
            <ul>
                <li>
                    同城
                    <i class="iconfont icon-below-s"></i>
                </li>
                <li>
                    品牌
                    <i class="iconfont icon-below-s"></i>
                </li>
                <li>
                    特色
                    <i class="iconfont icon-below-s"></i>
                </li>
            </ul>
        </div>
        <div id="pageMine-wrap">
            <div id="pageMine" v-for="item,index in adArr">
                <span>{{item.name}}</span> <span>{{item.price}}</span><span>元起</span><br>
                <h5>{{item.place}}</h5>
                <span id="gaiqian">改签</span><span id="zhekou">折扣卡</span><br>
                <span id="car">卡</span><span>开卡特惠，首单2张立减十元</span><br>
                <span>近期场次：</span><span class="pageT">{{item.time}}</span><span> | </span><span class="pageT">{{item.time2}}</span><br>
                <span id="pageM">{{item.range}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "page",
        mounted(){
            // var imgSrc = this.$router.history.current.query.ee.imgSrc;
            // $('#pageMain').css({
            //     backgroundImage:"url("+imgSrc+")"
            // });

            // var month = (new Date().getMonth()+1).toString().padStart(2,"0");
            // var dat = new Date().getDate()+'日';
            // console.log(month);

        },
        created(){
            this.getData()
        },
        methods:{
            async getData(){
                let url="sexLady/ajax/detailmovie?movieId="+this.$router.history.current.query.id;
                let data=await axios.get(url);
                this.detailMovie=this.detailMovie.concat(data.data.detailMovie);
            },
            gogo(){
                this.$router.go(-1);
            }
        },
        data(){
            return {
                pageList:[
                    {Ptime1:"今天",Ptime2:'月',Ptime3:'日'},
                    {Ptime1:"明天",Ptime2:'月',Ptime3:'日'},
                    {Ptime1:"后天",Ptime2:'月',Ptime3:'日'}
                ],
                adArr:[
                    {time:"20:15",time2:"21:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"改签",rebate:"折扣卡"},name:"海淀剧院",price:"33",place:"海淀区中关村大街28号",range:"800m"},
                    {time:"19:40",time2:"20:20",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"杜比全景声厅"},name:"金逸影城",price:"365",place:"海淀区中关村大街28号",range:"600m"},
                    {time:"19:40",time2:"20:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"IMAX厅"},name:"美嘉欢乐影城",price:"654",place:"海淀区中关村大街28号",range:"1000m"},
                    {time:"20:15",time2:"21:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"改签",rebate:"折扣卡"},name:"海淀剧院",price:"76",place:"海淀区中关村大街28号",range:"800m"},
                    {time:"19:40",time2:"20:20",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"杜比全景声厅"},name:"金逸影城",price:"99",place:"海淀区中关村大街28号",range:"600m"},
                    {time:"19:40",time2:"20:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"IMAX厅"},name:"美嘉欢乐影城",price:"123",place:"海淀区中关村大街28号",range:"1000m"}
                ],
                detailMovie:[]
            }
        }
    }
</script>

<style scoped>

    #cheader{
        height: 0.52rem;
        color: #fff;
        font-size: 0.2rem;
        background:#e54847;
        text-align: center;
        line-height: 0.52rem;
        position: fixed;
        top:0;
        width: 100%;
        /*z-index: -10;*/
    }
    #pageMain{
        width: 100%;
        height: 1.88rem;
        background-size: 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        box-sizing: border-box;
        overflow: hidden;
        /*padding: 0.18rem 0.15rem ;*/
    }
    #pageMainP{
        width: 100%;
        height:100%;
        background: inherit;
        filter: blur(9px);
        position: relative;

    }
    #page>div>em{
        position: fixed;
        z-index: 1;
        font-size: 30px;
        color: #fff;
        left: 16px;
        top: 8px;
    }
    .clear{
        width: 100%;
        height:.35rem;
        margin-bottom: .17rem;
    }
    #pageMainIMG{
        width: 1.1rem;
        height: 1.5rem;
        position: absolute;
        left: 0.18rem;
        top: 0.72rem;
    }
    #pageNav{
        width: 1.4rem;
        height: 1.5rem;
        position: absolute;
        z-index: 10;
        left: 1.35rem;
        top: 0.72rem;
    }
    #pageNav>h2{
        color: #fff;
        margin-bottom: 0.05rem;
    }
    #pageNav>h2:nth-child(1){
        font-size: 0.16rem;
        color: #fff;
        font-weight: bold;
        margin-top: 4px;
    }
    #pageNav>p{
        margin-bottom: 0.05rem;
    }
    #pageNav>p>span:nth-child(1){
        color: yellow;
        margin-right: 2px;
        font-size: 18px;
    }
    #pageNav>p>span:nth-child(2){
        color: #fff;
    }
    .icon-iconfontjiantou5{
        position: absolute;
        top: 56px;
        right: -112px;
        z-index: 100;
        color: green;

    }
    /******/
    #pageTime{
        width: 100%;
        height: 0.45rem;
        background: #fff;
        /*overflow: hidden;*/
        overflow-x: auto;
    }
    #pageTime>ul{
        width: 100%;
        display: flex;
    }
    #pageTime>ul>li{
        float: left;
        flex: 1;
        text-align: center;
        line-height: 0.45rem;
    }
    #pageMap{
        width: 100%;
        height: 0.4rem;
        box-sizing: border-box;
        border-bottom: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        padding: 0.1rem 0 0.1rem 0;
        background: #fff;
    }
    #pageMap>ul{
        width: 100%;
        height: 100%;
        display: flex;
    }
    #pageMap>ul>li{
        flex: 1;
        text-align: center;
        line-height: 0.2rem;
        box-sizing: border-box;
    }
    #pageMap>ul>li:nth-child(2){
        border-left: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
    }
    #pageMine{
        width: 100%;
        height: 1.43rem;
        box-sizing: border-box;
        border-bottom: 1px solid #cccccc;
        background: #fff;
        padding: 0.16rem 0.16rem 0.13rem 0.15rem;
        position: relative;
    }
    #pageMine>span:nth-child(1){
        font-size: 0.15rem;
        color: #000000;
    }
    #pageMine>span:nth-child(2){
        font-size: 0.17rem;
        color: red;
    }
    #pageMine>span:nth-child(3){
        margin-left: 3px;
        color: red;
    }
    #pageMine>h5{
        margin-top: 0.05rem;
        margin-bottom: 0.08rem;
    }
    #gaiqian{
        color:#589daf ;
        border: 1px solid #589daf;
        margin-right: 3px;
    }
    #zhekou{
        color: #ff9900;
        border: 1px solid #ff9900;
    }
    #car{
        display: inline-block;
        width: .14rem;
        height: .14rem;
        text-align: center;
        line-height: .14rem;
        background: #57c0f8;
        color: #fff;
        margin-top: 0.08rem;
        margin-right: 0.04rem;
        margin-bottom: 0.05rem;
    }
    .pageT{
        letter-spacing: 2px;
    }
    #pageM{
        position: absolute;
        font-size: .015rem;
        color: black;
        top: .4rem;
        right: .16rem;
    }
    #pageMine-wrap{
        width: 100%;
        overflow-y: scroll;
    }
</style>