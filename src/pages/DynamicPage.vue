<template>
  <theme-layout-default>
    <component :is="component.name" :data="component.data"></component>
  </theme-layout-default>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    page: {
      type: String,
      default: 'home',
    },
  },
  computed: mapState({
    component(state){
      const page = state.pages.filter(({name}) => name === this.page)[0];
      if(!page) return {name: 'themeLoading'};
      return page.component;
    },
  }),
}
</script>

<style scoped>
</style>
