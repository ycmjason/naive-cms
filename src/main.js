import 'vue2-animate/dist/vue2-animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';

import App from '@/App.vue';

import store from '@/store';
import router from '@/router';

// register all layout components
const LAYOUT_COMPONENT_PREFIX = 'layout';
const layout_component_paths = require.context('@/layout_components', true, /.*\.vue/).keys()
layout_component_paths.map(p => p.match(/\.\/(.*?)\.vue/)[1]).forEach(name => {
  Vue.component(LAYOUT_COMPONENT_PREFIX + name, require('@/layout_components/' + name + '.vue'));
});

// register all the components
const COMPONENT_PREFIX = 'nc';
const component_paths = require.context('@/components', true, /.*\.vue/).keys()
component_paths.map(p => p.match(/\.\/(.*?)\.vue/)[1]).forEach(name => {
  Vue.component(COMPONENT_PREFIX + name, require('@/components/' + name + '.vue'));
});

// initiate the app
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
