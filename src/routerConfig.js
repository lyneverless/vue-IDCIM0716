import VueRouter from 'vue-router';
import welcome from './components/welcome.vue';
import air_cdt from './components/air_cdt.vue';
import data_input from './components/data_input.vue';

export default new VueRouter({
    routes: [{
        path: '/',
        component: welcome
    }, {
        path: '/data_input',
        component: data_input
    }, {
        path: '/air_cdt',
        component: air_cdt
    }]
})