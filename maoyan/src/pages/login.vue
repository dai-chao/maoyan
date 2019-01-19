<template>
    <div>
        <div id="Lheade">
            <i class="iconfont icon-arrow-left" id="Licon" @click="go"></i>
            猫眼电影
        </div>
        <div id="LK"></div>
        <div id="Ltext">
            <ul>
                <li>美团账号登录</li>
                <li>手机验证登录</li>
            </ul>
        </div>
        <input type="text" placeholder="账户名/手机号/Email" id="Linput"><br>
        <input type="text" id="L_pwd" placeholder="请输入您的密码"><br>
        <button id="loginBtn">登录</button><br>
        <div id="Lzhuce">
            <a href="javascript:;">立即注册</a><a href="javascript:;">找回密码</a>
        </div>
        <div id="Lfoot">©猫眼电影  客服电<br/>话:<span>400-670-5335</span></div>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            go(){
                sessionStorage.setItem("isLogin",1);
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>


    #Lheade{
        width: 100%;
        height: 1rem;
        background: #df2d2d;
        color: #fff;
        position: fixed;
        top: 0;
        text-align: center;
        line-height: 1rem;
        font-size: 0.37rem;
        text-indent: 5px;
    }
    #Licon{
        font-size: 0.37rem;
        position: absolute;
        top: 2px;
        left: 10px;
    }
    #LK{
        width: 100%;
        height: 1rem;
    }
    #Ltext{
        width: 100%;
        height: .85rem;
        background: #fff;
        box-sizing: border-box;
        border-bottom: 9px solid #d6d6d6;
    }
    #Ltext>ul{
        display: flex;
    }
    #Ltext>ul>li{
        flex: 1;
        font-size: .29rem;
        text-align: center;
        line-height: .85rem;
    }
    #Linput{
        border: none;
        width: 100%;
        height: .87rem;
        border-bottom: 1px solid #d6d6d6;
        font-size: .3rem;
        text-indent: .2rem;
    }
    #L_pwd{
        border: none;
        width: 100%;
        height: .87rem;
        border-bottom: 1px solid #d6d6d6;
        font-size: .3rem;
        text-indent: .2rem
    }
    #loginBtn{
        border: none;
        width: 3.84rem;
        height: .94rem;
        font-size: .4rem;
        background: #df2d2d;
        color: #fff;
        margin-top: .28rem;
        margin-left: .14rem;
        border-radius: .1rem;
        margin-bottom: .3rem;
    }
    #Lzhuce>a{
        font-size: .28rem;
        color: #df2d2d;
    }
    #Lzhuce>a:nth-child(1){
        margin-left: .2rem;
        margin-right: 1.55rem;
    }

    #Lfoot{
        font-size: .27rem;
        width: 100%;
        text-align: center;
        margin-top: .33rem;
    }
    #Lfoot>span{
        font-size: .27rem;
        color: red;
    }







</style>