<script setup>
const route = useRoute();
const member = await queryContent('members', route.params.id).findOne()
const { locale } = useI18n();
</script>

<template>
    <NuxtLayout :title="$t('members')">

        <div class="columns">
            <div class="column is-3">
                <img v-if="member.img" :src="member.img" />
                <img v-else src="~/assets/default-brain.svg" />
            </div>
            <div class="column">
                <h1 class="title">{{ member.name }}</h1>
                <h2 class="subtitle">{{ member.role[locale] }}</h2>
                <Markdownify :text="member.info[locale]" />
            </div>

        </div>
    </NuxtLayout>
</template>