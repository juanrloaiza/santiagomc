<script setup>
const route = useRoute();
const activity = await queryContent('activities', route.params.id).findOne()
const { locale } = useI18n();

</script>

<template>
    <NuxtLayout :title="$t('activities')">
        <div>
            <h1 class="title mb-3">{{ activity.title[locale] }}</h1>
            <h2 class="subtitle">{{ activity.time[locale] }}</h2>
            <Markdownify :text="activity.info['es']" />
        </div>
    </NuxtLayout>
</template>

<style>
h2 {
    margin-top: 1rem;
}

table {
    th {
        background-color: #eee
    }

    td,
    th {
        padding: 0.5rem;
        border-collapse: collapse;
        border: 1px solid #eee;
    }
}
</style>