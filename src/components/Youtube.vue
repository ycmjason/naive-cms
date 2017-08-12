<template>
  <section>
    <article v-for="video in data.videos" :key="video.youtubeId">
      <h1>{{ video.title }}</h1>
      <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${video.youtubeId}`" frameborder="0" allowfullscreen></iframe>
    </article>
  </section>
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
article:first-child{
  margin-top: 0em !important;
}
article{
  margin-top: 2em;
}
</style>
