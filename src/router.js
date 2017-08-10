import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/:page?', component: require('@/pages/DynamicPage.vue') , props: true},
]

export default new VueRouter({
  routes,
  mode: 'history',
});
