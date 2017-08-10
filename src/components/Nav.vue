<template>
  <ul class="nav">
    <li class="nav-item" v-for="link in links" :key="link.item">
      <a class="nav-link active" :href="link.link"> {{ link.item }}</a>
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
  created(){
    console.log(this.links);
  }
}
</script>

<style scoped>
</style>
