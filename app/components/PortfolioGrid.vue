<script setup lang="ts">
interface PortfolioItem {
  title: string
  credit: string
  image: string
}

withDefaults(
  defineProps<{
    items: PortfolioItem[]
    compact?: boolean
  }>(),
  { compact: false }
)
</script>

<template>
  <div class="grid sm:grid-cols-3 gap-4">
    <a
      v-for="item in items"
      :key="item.title + item.credit"
      href="#"
      class="group block"
    >
      <div
        class="relative rounded-2xl overflow-hidden"
        :class="compact ? 'h-44' : 'h-64'"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        >
        <span
          class="absolute inset-0 m-auto h-11 w-11 rounded-full bg-ink text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
      <p class="mt-3 text-sm">
        {{ item.title }}
        <span class="text-muted">{{ item.credit }}</span>
      </p>
    </a>
  </div>
</template>
