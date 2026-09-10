<script setup lang="ts">
const features = [
  'With 4+ years of experience, I specialize in creating intuitive, user-focused designs that solve real-world problems and deliver seamless digital experiences.',
  'I thrive on working closely with clients, blending creativity with strategy to bring their vision to life through thoughtful, impactful design solutions.'
]
</script>

<template>
  <section id="about" class="bg-panel px-6 md:px-12 py-20 md:py-28">
    <div class="max-w-page mx-auto grid md:grid-cols-12 gap-8 md:gap-10">
      <div class="md:col-span-4 flex flex-col">
        <h2 class="text-3xl font-semibold">About Me</h2>
        <p class="mt-4 text-sm text-muted leading-relaxed">
          I'm specialize in turning complex problems into elegant solutions. My approach blends
          creativity with strategic thinking to deliver designs that not only look great but work
          seamlessly. Ready to start your next project?
        </p>
        <svg class="mt-auto pt-10 hidden md:block text-line" width="90" height="70" viewBox="0 0 90 70" fill="none">
          <path
            d="M4 8c30 4 55 18 62 40M66 48l-8-12M66 48l-14 2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div class="md:col-span-3 rounded-2xl border border-line overflow-hidden flex flex-col">
        <div class="p-5">
          <div class="h-8 w-8 rounded-full bg-surface flex items-center justify-center text-xs" aria-hidden="true">
            🌐
          </div>
          <p class="mt-6 text-4xl font-semibold">120%</p>
          <p class="mt-3 text-xs text-muted leading-relaxed">
            Average increase in client engagement in the first 6 months
          </p>
        </div>
        <img
          :src="unsplashUrl(IMAGES.aboutStatPortrait.id, 500)"
          alt="Portrait of D.Nova smiling"
          class="mt-auto h-40 w-full object-cover grayscale"
        >
      </div>

      <div class="md:col-span-5 flex flex-col gap-6">
        <div class="relative h-32 w-32 self-end rounded-2xl overflow-hidden">
          <img
            :src="unsplashUrl(IMAGES.aboutSidePortrait.id, 400)"
            alt="Portrait of D.Nova"
            class="h-full w-full object-cover grayscale"
          >
          <span
            class="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-ink text-white flex items-center justify-center text-xs"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <ul class="space-y-6">
          <li v-for="text in features" :key="text" class="flex gap-3">
            <span
              class="mt-1 h-5 w-5 shrink-0 rounded-full bg-ink text-white flex items-center justify-center text-[10px]"
              aria-hidden="true"
            >
              +
            </span>
            <p class="text-sm text-muted leading-relaxed">{{ text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
