<template>
  <header>
    <layout-container>
      <theme-nav :items="nav"></theme-nav>
    </layout-container>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    nav: (state) => state.nav,
  }),
}
</script>

<style scoped>
</style>
