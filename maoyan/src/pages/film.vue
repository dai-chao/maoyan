<template>
    <div>
        <header>
            猫眼电影
        </header>
        <section>
            <ul class="Hbtn">
                <li>
                    北京
                    <i class="icon iconfont icon-below-s"></i>
                </li>
                <li><router-link to="/hot">正在热映</router-link></li>
                <li><router-link to="/will">即将上映</router-link></li>
                <li>
                    <i class=" iconfont icon-Magnifier" style="font-size: 26px"></i>
                </li>
            </ul>
        </section>
        <div id="kong"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "film",
        mounted() {
            var yushou = $('button');
            yushou.map(function (index, item) {
                if ($(this).html() === '预售') {
                    item.style.background = '#3c9fe6'
                }
            });
            $(".Hbtn li a").click(function () {
                $(this).parent().addClass('hbtn').siblings().removeClass('hbtn')
            })

        },
        data() {
            return {
                currentArr: [
                    {
                        show: "2019-01-04大陆上映",
                        address: "美国/114分钟",
                        mold: "动作,科幻,冒险",
                        num: "23.2万人评",
                        name: "Bumblebee",
                        btn: '购票',
                        xinxi: '今天100家影院放映500场',
                        zhuyan: '宝贝儿，佟大为，成龙，李连杰，宝贝儿，佟大为，成龙，李连杰，宝贝儿，佟大为，成龙，李连杰,宝贝儿，佟大为，成龙，李连杰',
                        dianping: '观众评',
                        pingfen: '9.1',
                        imgSrc: 'https://p1.meituan.net/128.180/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg',
                        title: '大黄蜂'
                    },
                    {
                        show: "2019-01-12大陆上映",
                        address: "日本/122分钟",
                        mold: "动作,科幻,冒险",
                        num: "25.2万人评",
                        name: "Neptune",
                        btn: '预售',
                        xinxi: '今天333家影院放映600场',
                        zhuyan: '宝贝儿，佟大为，成龙，李连杰',
                        dianping: '点映评',
                        pingfen: '9.2',
                        imgSrc: 'https://p1.meituan.net/128.180/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg',
                        title: '海王'
                    },
                    {
                        show: "2019-01-07大陆上映",
                        address: "英国/90分钟",
                        mold: "恐怖,科幻,冒险",
                        num: "26.7万人评",
                        name: "Saw",
                        btn: '购票',
                        xinxi: '今天444家影院放映700场',
                        zhuyan: '宝贝儿，佟大为，成龙，李连杰，宝贝儿，佟大为，成龙，李连杰，宝贝儿，佟大为，成龙，李连杰，宝贝儿，佟大为，成龙，李连杰',
                        dianping: '观众评',
                        pingfen: '9.3',
                        imgSrc: 'https://p1.meituan.net/128.180/movie/bb84bede1711265dab1136f7a3dddc782801232.jpg',
                        title: '电锯惊魂'
                    },
                    {
                        show: "2019-01-18大陆上映",
                        address: "德国/100分钟",
                        mold: "恐怖,科幻,冒险",
                        num: "20.6万人评",
                        name: "Hostel",
                        btn: '预售',
                        xinxi: '今天654家影院放映800场',
                        zhuyan: '宝贝儿，佟大为，成龙，李连杰',
                        dianping: '点映评',
                        pingfen: '9.4',
                        imgSrc: 'https://p0.meituan.net/128.180/movie/c02cf9ad1f2ddfd128069738f341de53882285.jpg',
                        title: '人皮客栈'
                    },
                    {
                        show: "2019-01-26大陆上映",
                        address: "韩国/104分钟",
                        mold: "动作,科幻,冒险",
                        num: "28.8万人评",
                        name: "Bumblebee",
                        btn: '购票',
                        xinxi: '今天567家影院放映900场',
                        zhuyan: '宝贝儿，佟大为，成龙，李连杰,隔壁老王',
                        dianping: '观众评',
                        pingfen: '9.5',
                        imgSrc: 'https://p1.meituan.net/128.180/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg',
                        title: '大黄蜂'
                    },
                    {
                        show: "2019-01-15大陆上映",
                        address: "中国/94分钟",
                        mold: "动作,科幻,冒险",
                        num: "10.2万人评",
                        name: "Neptune",
                        btn: '预售',
                        xinxi: '今天878家影院放映200场',
                        zhuyan: '宝贝儿，佟大为，成龙，李连杰',
                        dianping: '点映评',
                        pingfen: '9.6',
                        imgSrc: 'https://p1.meituan.net/128.180/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg',
                        title: '海王'
                    },
                ]

            }
        },

    }
</script>

<style scoped>
    .hbtn{
        border-bottom: 2px solid red;
    }
    header{
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
    /************************/
    section{
        width: 100%;
        height: 0.46rem;
        box-sizing: border-box;
        border-bottom: 1px solid #e6e6e6;
        color: #ef4238;
        margin-top: 0.52rem;
        position: fixed;
        top: 0;
        z-index: 5;
        background-color: #fff;
    }
    section>ul{
        display: flex;
    }
    section>ul>li{
        flex: 1;
        line-height: 0.43rem;
        font-size: 0.15rem;
        box-sizing: border-box;
        text-align: center;
        color: #666666;
    }
    section>ul>li:nth-child(1){
        margin-right: 0.2rem;
        font-size: 0.18rem;
    }
    section>ul>li:nth-child(4){
        text-align: right;
        padding-right: 0.14rem;
    }
    .icon-Magnifier{
        color: #e54847;
        font-size: 20px!important;
    }
    section>ul>li:nth-child(2)>a{
        font-weight: bold;
        font-size: 0.18rem;
        margin-right: 10px;
    }
    section>ul>li:nth-child(3)>a{
        font-weight: bold;
        font-size: 0.18rem;
        margin-left: 20px;
    }
    #kong{
        margin-top: 100px;
    }
</style>