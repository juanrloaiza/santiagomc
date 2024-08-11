<script setup>
const { data: activities } = await useAsyncData('activities', 
    () => queryContent('activities').find());

const { locale } = useI18n();
</script>

<template>
    <NuxtLayout :title="$t('activities')">

        <div class="section grid is-col-min-9 is-gap-5 has-text-centered">
                <NuxtLinkLocale to="/activities/readinggroup">
                    <h2>{{ $t('reading_group')}}</h2>
                    <NuxtImg src="imgs/readingroup.jpg" />
                </NuxtLinkLocale>
                <NuxtLinkLocale to="/activities/wip">
                    <h2>Work-in-Progress (WIP)</h2>
                    <NuxtImg src="imgs/wip.jpg" />
                </NuxtLinkLocale>
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

a:hover {
    text-decoration: none;
}

a>img:hover {
    opacity: 0.8
}
</style>
