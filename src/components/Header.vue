<template>
  <header>
    <nc-nav :items="items"></nc-nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    items: (state) => state.nav,
  })
}
</script>

<style scoped>
</style>
