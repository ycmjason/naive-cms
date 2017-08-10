<template>
  <header>
    <layout-container>
      <theme-nav :items="nav"></theme-nav>
    </layout-container>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { siteName } from '@/config';

const sortPages = (pages) => pages.sort((a, b) => a.order - b.order);

export default {
  computed: mapState({
    nav: (state) => sortPages(state.pages).map(({name}) => (
      (name === 'home')? {
        text: siteName,
        href: '/',
      }: {
        text: name,
        href: name,
      }
    )),
  }),
}
</script>

<style scoped>
header{
  margin-bottom: 2em;
}
</style>
