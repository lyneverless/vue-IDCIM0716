import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

Vue.use(VueRouter);

const router = new VueRouter({
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