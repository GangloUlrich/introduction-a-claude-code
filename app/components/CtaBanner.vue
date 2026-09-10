<script setup lang="ts">
const bg = unsplashUrl(IMAGES.works2.id, 1600)
</script>

<template>
  <section class="px-6 md:px-12 py-4">
    <div class="max-w-page mx-auto">
      <div
        class="relative rounded-2xl overflow-hidden px-6 py-16 md:py-20 text-center text-white bg-cover bg-center"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <div class="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div class="relative">
          <p class="text-xs text-white/60 mb-4">(Book Your Free Consultation Now!)</p>
          <h2 class="text-2xl sm:text-4xl font-semibold max-w-xl mx-auto leading-tight">
            Exclusive Winter Deal Days Get a Free Consultation!
          </h2>
          <p class="mt-4 text-sm text-white/70 max-w-md mx-auto">
            Take advantage of this limited-time offer to discuss your design needs with an
            experienced UI/UX and product designer.
          </p>
          <a
            href="#contact"
            class="mt-6 inline-flex items-center gap-1 text-sm underline underline-offset-4"
          >
            Let's talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
