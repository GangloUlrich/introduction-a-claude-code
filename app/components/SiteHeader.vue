<script setup lang="ts">
const links = [
  { label: 'About Me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#journey' },
  { label: 'Blog', href: '#blog' }
]
</script>

<template>
  <header class="flex items-center justify-between py-6">
    <a href="#" class="flex items-center gap-2" aria-label="D.Nova home">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 8l4 3-4 3 9 8 9-8-4-3 4-3-9-6z" fill="#141414" />
      </svg>
    </a>

    <nav class="hidden md:flex items-center gap-8 text-sm text-ink/80">
      <a v-for="link in links" :key="link.label" :href="link.href" class="hover:text-ink transition-colors">
        {{ link.label }}
      </a>
    </nav>

    <a
      href="#contact"
      class="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 decoration-ink/30 hover:decoration-ink transition-colors"
    >
      Book A Call
      <span aria-hidden="true">↗</span>
    </a>
  </header>
</template>
