<script setup>
const content = await queryContent('home').findOne();
const { locale } = useI18n();
</script>

<template>
    <NuxtLayout title="Santiago Mind and Cognition">
        <Header :title="$t('about')" />
        {{ content[locale] }}
        <ShowCase />
    </NuxtLayout>
</template>