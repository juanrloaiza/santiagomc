<script setup>
const route = useRoute();
const activity = await queryContent('activities', route.params.id).findOne()
const { locale } = useI18n();
</script>

<template>
    <NuxtLayout :title="$t('activities')">

        <div>
            <h1 class="title">{{ activity.title[locale] }}</h1>
            <h2 class="subtitle">{{ activity.time[locale] }}</h2>
            <Markdownify :text="activity.info[locale]" />
        </div>
    </NuxtLayout>
</template>