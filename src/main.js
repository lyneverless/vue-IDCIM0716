import Vue from 'vue';
import VueRouter from 'vue-router';
import myRoute from './routerConfig';
import App from './App.vue';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

Vue.use(VueRouter);

new Vue({
    router: myRoute,
    render: h => {
        return h(App)
    }
}).$mount('#app');