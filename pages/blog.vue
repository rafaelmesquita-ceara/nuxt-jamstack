<template>
  <div>
    <article v-for="article in articles" :key="article.path">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles').fetch()
    console.log(articles)
    return { articles }
  },
}
</script>
