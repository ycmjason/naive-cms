<template>
  <ul class="nav">
    <li class="nav-item" v-for="link in links" :key="link.item">
      <router-link class="nav-link" :to="link.link"> {{ link.item }}</router-link>
    </li>
  </ul>
</template>

<script>
const objBreakdown = (obj, keyProp='key', valProp='value') => {
  return Object.keys(obj).map(k => ({[keyProp]: k, [valProp]: obj[k]}));
};
export default {
  props: {
    items: Object,
  },
  data(){
    return {
      links: objBreakdown(this.items, 'item', 'link'),
    };
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

.router-link-active{
  color: $gray-dark !important;
}
</style>
