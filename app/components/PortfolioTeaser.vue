<script setup lang="ts">
const items = [
  {
    title: 'Halo Digital Agency website',
    credit: 'For Squeeze',
    image: unsplashUrl(IMAGES.teaser1.id, 700)
  },
  {
    title: 'Halo Digital Agency website',
    credit: 'For Squeeze',
    image: unsplashUrl(IMAGES.teaser2.id, 700)
  },
  {
    title: 'Digital Agency website',
    credit: 'For Squeeze',
    image: unsplashUrl(IMAGES.teaser3.id, 700)
  }
]
</script>

<template>
  <section class="bg-panel px-6 md:px-12 pb-20 md:pb-28">
    <div class="max-w-page mx-auto">
      <PortfolioGrid :items="items" compact />
    </div>
  </section>
</template>
