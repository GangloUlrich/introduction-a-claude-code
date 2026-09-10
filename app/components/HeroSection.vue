<script setup lang="ts">
const stats = [
  { value: '+200', label: 'Project completed' },
  { value: '+50', label: 'Startup raised' }
]
</script>

<template>
  <section id="home" class="relative bg-panel rounded-[28px] px-6 md:px-12 pt-4 pb-0 overflow-hidden">
    <div class="max-w-page mx-auto">
      <SiteHeader />
    </div>

    <div class="max-w-page mx-auto grid md:grid-cols-2 gap-10 items-end pt-6">
      <div class="relative pb-12 md:pb-20 md:pl-6">
        <span
          class="hidden md:block absolute -left-2 top-10 origin-left -rotate-90 text-xs tracking-widest text-muted uppercase whitespace-nowrap"
        >
          Product designer
        </span>

        <div class="flex items-center gap-8 mb-8">
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-2xl font-semibold">{{ stat.value }}</p>
            <p class="text-xs text-muted mt-1">{{ stat.label }}</p>
          </div>
        </div>

        <h1 class="text-[64px] sm:text-[88px] leading-[0.95] font-semibold tracking-tight">
          Hello
        </h1>
        <p class="mt-4 text-muted text-sm">— It's D.Nova a design wizard</p>

        <a href="#about" class="mt-16 hidden md:inline-flex items-center gap-2 text-xs text-muted">
          Scroll down
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div class="relative h-[280px] sm:h-[360px] md:h-[440px]">
        <img
          :src="unsplashUrl(IMAGES.heroPortrait.id, 900)"
          alt="Portrait of D.Nova, product designer"
          class="absolute inset-0 h-full w-full object-cover object-top grayscale"
        >
      </div>
    </div>
  </section>
</template>
