<script setup>
const [ activity_id ] = useRoute().params.slug;

const { data: activity } = await useAsyncData(
    () => queryContent('activities', activity_id).findOne()
);

const { locale } = useI18n();

</script>

<template>
    <NuxtLayout :title="$t('activities')">
        <div>
            <h1 class="title mb-3">{{ activity.title[locale] }}</h1>
            <h2 class="subtitle">{{ activity.time[locale] }}</h2>
            <Markdownify class="activity" :text="activity.info['es']" />
        </div>
    </NuxtLayout>
</template>

<style>
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