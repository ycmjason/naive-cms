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
  context.keys()
    .map(p => p.match(/\.\/(.*?)\.vue/)[1])
    .forEach(name => {
      Vue.component(prefix + name, context('./' + name + '.vue'));
    });
});

const THEME_PREFIX = 'theme';
Vue.component(THEME_PREFIX + 'LayoutDefault', {
  template: `
    <div>
      <${THEME_PREFIX}-header></${THEME_PREFIX}-header>
      <layout-container>
        <slot></slot>
      </layout-container>
      <${THEME_PREFIX}-footer></${THEME_PREFIX}-footer>
    </div>
  `,
});

// initiate the app
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
