<script setup>
const { locale } = useI18n();
const otherLang = (locale.value === 'es' ? 'en' : 'es');
</script>

<template>
    <NuxtLink :to="switchLocalePath(otherLang)" class="navbar-item">
        <button class="button">
            {{ otherLang.toUpperCase() }}</button>
    </NuxtLink>
</template>