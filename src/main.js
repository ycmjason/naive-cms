import 'vue2-animate/dist/vue2-animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';

import App from '@/App.vue';

import store from '@/store';
import router from '@/router';

[
  {
    prefix: 'layout',
    context: require.context('@/components_layout', true, /.*\.vue/),
  },
  {
    prefix: 'theme',
    context: require.context('@/components_theme', true, /.*\.vue/),
  },
  {
    prefix: 'nc',
    context: require.context('@/components', true, /.*\.vue/),
  },
].forEach(({prefix, context}) => {
  const getName = (p) => p.match(/\.\/(.*?)\.vue/)[1];
  const reg = (name) => Vue.component(prefix + name, context('./' + name + '.vue'));
  const component_paths = context.keys();
  component_paths.map(getName).forEach(reg);
});

// initiate the app
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

store.dispatch('fetchPages');
