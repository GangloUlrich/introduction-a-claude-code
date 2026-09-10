<script setup lang="ts">
const posts = [
  {
    category: 'Marketing',
    readTime: '5 min read',
    title: 'Conducting in-depth research and usability testing',
    image: unsplashUrl(IMAGES.blog1.id, 700)
  },
  {
    category: 'Marketing',
    readTime: '5 min read',
    title: 'Designing cohesive strategies and visual identities',
    image: unsplashUrl(IMAGES.blog2.id, 700)
  },
  {
    category: 'Marketing',
    readTime: '5 min read',
    title: 'Providing expert advice and strategic guidance',
    image: unsplashUrl(IMAGES.blog3.id, 700)
  }
]
</script>

<template>
  <section id="blog" class="px-6 md:px-12 pt-10 md:pt-14 pb-20 md:pb-28 text-center">
    <p class="flex items-center justify-center gap-2 text-xs mb-3">
      <span class="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
      Blogs
    </p>
    <h2 class="text-3xl md:text-4xl font-semibold">Design Insights &amp; Trends</h2>

    <div class="max-w-page mx-auto mt-12 grid sm:grid-cols-3 gap-6 text-left">
      <article
        v-for="post in posts"
        :key="post.title"
        class="rounded-2xl overflow-hidden bg-panel"
      >
        <img :src="post.image" :alt="post.title" class="h-44 w-full object-cover">
        <div class="p-5">
          <div class="flex items-center gap-2 text-xs">
            <span class="px-2 py-1 rounded-full bg-ink text-white">{{ post.category }}</span>
            <span class="text-muted">{{ post.readTime }}</span>
          </div>
          <p class="mt-3 text-sm leading-relaxed">{{ post.title }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
