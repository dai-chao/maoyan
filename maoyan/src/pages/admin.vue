<template>
    <div>
        <router-view></router-view>
        <footer>
            <div v-for="item,index in footerArr"  :class="{n :false,n:index === showIndex}" @click="change(index)">
                <p><i :class="item.icon"></i></p>
                <p>{{item.title}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "admin",
        data() {
            return {
                footerArr: [
                    {cname: '/hot', title: '电影', icon: ' iconfont icon-dianying'},
                    {cname: '/cinema', title: '影院', icon: ' iconfont icon-xiaoxi'},
                    {cname: '/mine', title: '我的', icon: ' iconfont icon-wode'}
                ],
                showIndex: 0,
                cname: "film"
            }
        },
        methods: {
            change(index) {
                this.showIndex = index;
                this.cname = this.footerArr[index].cname;
                let path = this.footerArr[index].cname;
                this.$router.push({path: path})
                // window.location.reload()
            }
        }
    }
</script>

<style scoped>
    footer{
        height:0.5rem;
        width: 100%;
        position: fixed;
        color: #696969;
        bottom: 0;
        left:0;
        display: flex;
        line-height: 21px;
        background: #ffffff;
        box-sizing: border-box;
        padding-top: 0.05rem;
        border-top: 1px solid #d8d8d8;
        z-index: 100;

    }
    footer div{
        flex: 1;
        text-align: center;
    }
    .iconfont{
        font-size: 18px;
    }

    .n{
        color: #f03d37;
    }
    #kong{
        margin-top: 100px;
    }

</style>