<script setup lang="ts">
const items = [
  {
    title: 'Halo Digital Agency website',
    credit: 'For Squeeze',
    image: unsplashUrl(IMAGES.works1.id, 700)
  },
  {
    title: 'Halo Digital Agency website',
    credit: 'Website  halodigital.xyz',
    image: unsplashUrl(IMAGES.works2.id, 700)
  },
  {
    title: 'Halo Digital Agency website',
    credit: 'For Squeeze',
    image: unsplashUrl(IMAGES.works3.id, 700)
  }
]
</script>

<template>
  <section id="portfolio" class="px-6 md:px-12 pt-20 md:pt-28 pb-10 md:pb-14 text-center">
    <p class="flex items-center justify-center gap-2 text-xs text-muted mb-3">
      <span class="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
      Portfolio
    </p>
    <h2 class="text-3xl md:text-4xl font-semibold">Latest Works</h2>

    <div class="max-w-page mx-auto">
      <div class="mt-12 text-left">
        <PortfolioGrid :items="items" />
      </div>

      <a href="#" class="mt-8 inline-flex items-center gap-2 text-sm text-muted">
        Check out More
        <span aria-hidden="true">→</span>
        <span class="text-ink">View More</span>
      </a>
    </div>
  </section>
</template>
