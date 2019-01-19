<template>
    <div>
        <div id="cheader">影院</div>
        <div id="Ck"></div>
        <div id="Cmap">
            <span>北京 <i class="iconfont icon-below-s"></i></span><input type="text" placeholder="搜影院">
        </div>
        <div class="pageMap">
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
    export default {
        name: "cinema",
        data(){
            return {
                adArr:[
                    {time:"20:15",time2:"21:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"改签",rebate:"折扣卡"},name:"海淀剧院",price:"33",place:"海淀区中关村大街28号",range:"800m"},
                    {time:"19:40",time2:"20:20",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"杜比全景声厅"},name:"金逸影城",price:"365",place:"海淀区中关村大街28号",range:"600m"},
                    {time:"19:40",time2:"20:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"IMAX厅"},name:"美嘉欢乐影城",price:"654",place:"海淀区中关村大街28号",range:"1000m"},
                    {time:"20:15",time2:"21:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"改签",rebate:"折扣卡"},name:"海淀剧院",price:"76",place:"海淀区中关村大街28号",range:"800m"},
                    {time:"19:40",time2:"20:20",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"杜比全景声厅"},name:"金逸影城",price:"99",place:"海淀区中关村大街28号",range:"600m"},
                    {time:"19:40",time2:"20:10",coupon:"开卡特惠,首单两张立减10元",intro:{eat:"小吃",rebate:"折扣卡",type:"IMAX厅"},name:"美嘉欢乐影城",price:"123",place:"海淀区中关村大街28号",range:"1000m"}
                ]
            }
        }
    }
</script>

<style scoped>



    #cheader{
        height: 0.52rem;
        color: #fff;
        font-size: 0.18rem;
        background:#e54847;
        text-align: center;
        line-height: 0.52rem;
        position: fixed;
        top:0;
        width: 100%;
    }
    #Ck{
        width: 100%;
        height: 0.52rem;
    }
    #Cmap{
        width: 100%;
        height: .43rem;
        background: #f5f5f5;
        box-sizing: border-box;
        padding: 0 0.17rem;
        padding-right: 0;
    }

    #Cmap>span{
        font-size: .16rem;
        line-height: 0.36rem;
        margin-top: 2px;
        display: inline-block;
    }
    #Cmap>input{
        width: 3.19rem;
        border: 1px solid #e6e6e6;
        height: .3rem;
        margin-bottom: 2px;
        border-radius: 8px;
        margin-left: 10px;
        text-align: center;
        font-size: .18rem;
    }

    .pageMap{
        width: 100%;
        height: 0.4rem;
        box-sizing: border-box;
        border-bottom: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        padding: 0.1rem 0 0.1rem 0;
        background: #fff;
    }
    .pageMap>ul{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .pageMap>ul>li{
        flex: 1;
        text-align: center;
        line-height: 0.2rem;
        box-sizing: border-box;
    }
    .pageMap>ul>li:nth-child(2){
        border-left: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
    }


    /********/
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