import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes: [{
        path: '/',
        component: (resolve) => require(['./App.vue'], resolve)
    }]
});
new Vue({
    router: router,
    render: h => {
        return h(App)
    }
}).$mount('#app');