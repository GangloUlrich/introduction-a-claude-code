<script setup lang="ts">
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#journey' },
  { label: 'Blog', href: '#blog' }
]
</script>

<template>
  <footer class="bg-ink text-white px-6 md:px-12 py-8">
    <div class="max-w-page mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
      <nav class="flex flex-wrap gap-6 text-sm text-white/70">
        <a v-for="link in links" :key="link.label" :href="link.href" class="hover:text-white transition-colors">
          {{ link.label }}
        </a>
      </nav>
      <a href="mailto:hello@dnova.com" class="text-2xl sm:text-3xl font-medium">
        hello@dnova.com
      </a>
    </div>
  </footer>
</template>
