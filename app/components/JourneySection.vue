<script setup lang="ts">
const entries = [
  {
    company: 'Creative Minds, New York, USA',
    dates: 'February 2022 - Present',
    desc: 'Innovated designs, New York, Senior Product Designer',
    tags: ['UIUX', 'Branding']
  },
  {
    company: 'Innovative Designs Inc, USA',
    dates: 'January 2020 - February 2022',
    desc: "Led UX/UI, San Francisco . Crafting tomorrow's experiences",
    tags: ['UIUX', 'Branding']
  },
  {
    company: 'Visionary Creations Ltd, UK',
    dates: 'February 2022 - Present',
    desc: "Principal Designer, Berlin, Crafting tomorrow's experiences",
    tags: ['Branding', 'UIUX']
  },
  {
    company: 'FutureTech, Berlin, Germany',
    dates: 'February 2022 - Present',
    desc: '',
    tags: ['Branding', 'UIUX']
  }
]

const lastEntry = {
  company: 'Expert Designs Inc, USA',
  dates: 'February 2022 - Present',
  desc: 'Innovated designs, New York, Senior Product Designer',
  tags: ['UIUX', 'Branding']
}

const showcaseImages = [
  unsplashUrl(IMAGES.works3.id, 300),
  unsplashUrl(IMAGES.blog2.id, 300),
  unsplashUrl(IMAGES.teaser1.id, 300)
]
</script>

<template>
  <section id="journey" class="bg-panel px-6 md:px-12 pt-6 md:pt-8 pb-20 md:pb-28">
    <div class="max-w-page mx-auto">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
      <div>
        <p class="flex items-center gap-2 text-xs text-muted mb-3">
          <span class="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
          Experiences
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold max-w-sm">Explore My Design Journey</h2>
      </div>
      <div class="max-w-xs">
        <p class="text-sm text-muted leading-relaxed">
          Over the past 4+ years, I've had the opportunity to work on a wide range of design
          projects, collaborating with diverse teams and clients to bring creative visions to life.
        </p>
        <a href="#contact" class="mt-3 inline-flex items-center gap-1 text-sm underline underline-offset-4">
          Book A Call
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <div class="divide-y divide-line border-t border-line">
      <div
        v-for="entry in entries"
        :key="entry.company"
        class="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-3 md:gap-10 items-center py-6"
      >
        <div>
          <h3 class="font-medium">{{ entry.company }}</h3>
          <p class="mt-1 flex items-center gap-2 text-xs text-muted">
            <span class="h-1 w-1 rounded-full bg-muted" aria-hidden="true" />
            {{ entry.dates }}
          </p>
        </div>
        <p class="text-sm text-muted">{{ entry.desc }}</p>
        <div class="flex gap-2">
          <span
            v-for="tag in entry.tags"
            :key="tag"
            class="text-xs px-3 py-1.5 rounded-full bg-surface text-ink/80"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="grid md:grid-cols-[auto_minmax(0,1fr)_auto] gap-6 items-center py-8">
        <div class="flex gap-3">
          <img
            v-for="(src, i) in showcaseImages"
            :key="i"
            :src="src"
            alt=""
            class="h-20 w-24 rounded-xl object-cover"
          >
        </div>
        <p class="text-sm text-muted leading-relaxed">
          From crafting seamless user experiences to leading strategic product design initiatives,
          each experience has shaped my approach and strengthened my passion for solving design
          challenges.
        </p>
        <span
          class="hidden md:flex h-11 w-11 rounded-full bg-ink text-white items-center justify-center shrink-0"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>

      <div class="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-3 md:gap-10 items-center py-6">
        <div>
          <h3 class="font-medium">{{ lastEntry.company }}</h3>
          <p class="mt-1 flex items-center gap-2 text-xs text-muted">
            <span class="h-1 w-1 rounded-full bg-muted" aria-hidden="true" />
            {{ lastEntry.dates }}
          </p>
        </div>
        <p class="text-sm text-muted">{{ lastEntry.desc }}</p>
        <div class="flex gap-2">
          <span
            v-for="tag in lastEntry.tags"
            :key="tag"
            class="text-xs px-3 py-1.5 rounded-full bg-surface text-ink/80"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
