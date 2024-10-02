<script setup lang="ts">
useSeoMeta
  ({
    title: 'Santiago Mind and Cognition',
    description: 'Somos Santiago Mind and Cognition, un grupo de investigación enfocado en filosofía de la mente y ciencia cognitiva.',
    ogImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  });

useHead({
  htmlAttrs: {
    'data-theme': 'light'
  }
});
</script>

<template>
  <NuxtPage />
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Nunito+Sans:wght@500;700;800&display=swap');

.title,
.subtitle {
  font-family: 'Montserrat';
}

body {
  font-size: 1.2rem;
  font-family: 'Nunito Sans';
}

h2 {
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

p {
  margin-bottom: 0.5rem;
}
</style>