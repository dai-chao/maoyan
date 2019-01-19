import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from '../pages/admin';
import Cinema from '../pages/cinema';
import Login from '../pages/login';
import Film from '../pages/film'
import Mine from '../pages/mine';
import List from '../components/list';
import Hot from '../pages/hot'
import Page from '../pages/page';
import Will from '../pages/will';

Vue.use(VueRouter);
let router=new VueRouter({
    routes:[
        {
            path:'/admin',
            name:"Admin",
            component:Admin,
            children:[
                {
                    path:'/film',
                    name:"Film",
                    component:Film,
                    children:[
                        {
                            path:'/hot',
                            name:"Hot",
                            component:Hot
                        },
                        {
                            path:'/will',
                            name:"Will",
                            component:Will
                        }
                    ]
                },
                {
                    path:'/cinema',
                    name:"Cinema",
                    component:Cinema
                },
                {
                    path:'/mine',
                    name:"Mine",
                    component:Mine
                },
               /* {
                    path:'/list',
                    name:"List",
                    component:List
                },*/
            ]
        },
         {
                    path:'/page',
                    name:"Page",
                    component:Page
         }, {
            path:'/login',
            name:"Login",
            component:Login
        },
    ]
});
export default router;