import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
        path: '/',
        component: App,
        children: []
    }]
});
new Vue({
    router
}).$mount('#app');