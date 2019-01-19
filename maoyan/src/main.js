import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './icon/font2/font_k8gvi3g7j0p/iconfont.css';
import './icon/font/font_i6zilpgpi1h/iconfont.css';

import $ from 'jquery';

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
