<script setup lang="ts">
useSeoMeta
  ({
    title: 'Santiago Mind and Cognition',
    description: 'Somos Santiago Mind and Cognition, un grupo de investigación enfocado en filosofía de la mente y ciencia cognitiva.',
    ogImage: 'https://unsplash.com/photos/2xU7rYxsTiM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8fHwxNzE3ODYzNTkyfDI&force=true&w=640'
  })
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
}

p {
  margin-bottom: 0.5rem;
}
</style>