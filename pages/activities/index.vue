<script setup>
const activities = await queryContent('activities').find()
const { locale } = useI18n();
</script>

<template>
    <NuxtLayout :title="$t('activities')">

        <div class="section grid is-col-min-9 is-gap-5 has-text-centered">
            <div v-for="activity in activities" :key="activity._path" class="cell">
                <NuxtLinkLocale :to="activity._path">
                    <h2>{{ activity.title[locale] }}</h2>
                    <p>{{ activity.time[locale] }}</p>
                    <img :src="activity.img" />
                </NuxtLinkLocale>
            </div>

        </div>
    </NuxtLayout>
</template>

<style scoped>
img {
    max-width: 20rem;
    width: 80%;
    border-radius: 15px;
    margin: 1rem;
}

a>img:hover {
    opacity: 0.8
}
</style>
