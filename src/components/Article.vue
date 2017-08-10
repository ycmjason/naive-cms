<template>
  <article>
    <h1 class="title">{{ data.title }}</h1>
    <p class="body" v-html="data.body"></p>
  </article>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.title{
  
}
</style>
