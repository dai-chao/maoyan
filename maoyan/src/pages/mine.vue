


<template>
    <div class="mine-wrap">
        <div class="mHeade">
            我的
            <router-link to="/hot" id="gohot"> < </router-link >
        </div>
        <div class="MK"></div>
        <div class="mmy">
            <img src="https://img.meituan.net/maoyanuser/23f19f4cdfe538bdf85f0ccd863346639437.png" class="head-icon">
        </div>
        <div class="container">
            <div class="orders">
                <div class="title-line"></div>
                <div class="Mtitle">我的订单</div>
                <div class="order-item-left">
                    <div class="order-item-left-img">图标</div>
                    <a href="javascript:;" class="order-item-left-txt">电影</a>
                </div>
                <div class="order-item-right">
                    <div class="order-item-right-img">图标</div>
                    <a href="javascript:;" class="order-item-right-txt">商城</a>
                </div>
            </div>
            <div class="group">
                <li>在线观影 <span>  ></span></li>
                <li>优惠券 <span>  ></span></li>
                <li>折扣券 <span>  ></span></li>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "mine",
        beforeRouteEnter(to,from,next){//在跳转mine页面之前拦截
            next(vm=>{
                if(!sessionStorage.getItem("isLogin")) {
                    vm.$router.push("/login");
                    return
                }
            })
        }
    }
</script>
<style scoped>
    .mine-wrap{
        width: 100%;
        height: 100%;
    }
    .mHeade{
        height: .52rem;
        width: 100%;
        background: #e54847;
        position: fixed;top: 0;
        text-align: center;
        line-height: .52rem;
        font-size: .18rem;
        color: #fff;
    }
    #gohot{
        font-size: 40px;
        color: #fff;
        position: absolute;
        left: 10px;
        top: 0px;
    }
    .MK{
        height: .52rem;
    }
    .mmy{
        background-color: #f03d37;
        background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100% 150px;
        height: 150px;
        overflow: hidden;
        text-align: center;
    }
    .mmy>img{
        display: inline-block;
        margin-top: 30px;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        border: 3px solid #fff;
    }
    .container{
        width:100% ;
        height: 5.76rem;
        background: gainsboro;
        box-sizing: border-box;
        padding-top:10px;
    }
    .orders{
        width: 100%;
        height: 1.49rem;
        background: #fff;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        text-align: center;
    }
    .title-line{
        width: 160px;
        height: 2px;
        background: gainsboro;
        position: absolute;
        top: 23px;
        left: 32%;
    }
    .Mtitle{
        position: relative;
        text-align: center;
        margin: 13px 0 0;
        font-size: 15px;
        line-height: 21px;
        height: 21px;
        color: #333;
        z-index: 9;
        width: 80px;
        background-color: #fff;
        margin-left: 170px;
    }
    .order-item-left{
        width: 192px;
        height: 97px;
        background: #fff;
        float: left;
        margin-top: 18px;
    }
    .order-item-left-img{
        width: 35px;
        height: 35px;
        background: #ff605a;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 100px;
        text-align: center;
        line-height: 35px;
    }
    .order-item-left-txt{
        font-size: 14px;
        margin-left: 43px;
        margin-top: 10px;
        display: inline-block;
    }
    .order-item-right{
        width: 192px;
        height: 97px;
        background: #fff;
        float: right;
        margin-top: 18px;
    }
    .order-item-right-img{
        width: 35px;
        height: 35px;
        background: #40d6c2;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 60px;
        text-align: center;
        line-height: 35px;
    }
    .order-item-right-txt{
        font-size: 14px;
        margin-left: -36px;
        margin-top: 10px;
        display: inline-block;
    }
    .group{
        width: 100%;
        height: 1.32rem;
        background: #fff;
        margin-top: 10px;

    }
    .group li{
        height: 0.44rem;
        line-height: 0.44rem;
        border-bottom: 0.01rem solid #ccc;
        padding:0  0.15rem;
    }
    .group li span{
        float: right;
    }

</style>