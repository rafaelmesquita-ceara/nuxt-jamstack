<template>
  <div>
    <div
      class="
        p-d-flex p-flex-column p-flex-md-row p-ai-center
        vertical-container
      "
    >
      <div v-for="article in articles" :key="article.path" class="p-col p-mr-2">
        <Card>
          <template #title>
            {{ article.title || 'Sem identificação' }}
          </template>
          <template #content>
            <nuxt-content :document="article" />
          </template>
          <template #footer>
            <Button
              label="Ver mais"
              @click="$router.push(`/blog/${article.slug}`)"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog').fetch()
    console.log(articles)
    return { articles }
  },
}
</script>
