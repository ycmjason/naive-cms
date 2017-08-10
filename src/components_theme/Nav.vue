<template>
  <ul class="nav">
    <li class="nav-item" v-for="link in items" :key="link.text">
      <router-link class="nav-link" :to="link.href"> {{ link.text }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss"  scoped>
@import "../colors";

.nav-link:link, .nav-link:visited, .nav-link:hover {
  color: $gray-light;
}

ul.nav li:first-child .nav-link{
  font-weight: bold;
  color: $gray-dark !important;
}

.router-link-exact-active{
  color: $gray-dark !important;
}
</style>
