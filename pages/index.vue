<script setup>
const content = await queryContent('home').findOne();
const { locale } = useI18n();
</script>

<template>
    <NuxtLayout title="Santiago Mind and Cognition">
        <Header :title="$t('about')" />
        <Markdownify :text="content[locale]" />
        <ShowCase />
    </NuxtLayout>
</template>