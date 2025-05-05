<script setup lang="ts">
const { locale } = useI18n();
const [ member_id ] = useRoute().params.slug;
const { data: member } = await useAsyncData(
    () => queryContent('members', member_id).findOne()
);
</script>

<template>
    <NuxtLayout :title="$t('members')">

        <div class="columns">
            <div class="column is-9-mobile is-4-tablet is-3-desktop">
                <NuxtImg v-if="member.img" :src="`/imgs/${member.img}`" />
                <NuxtImg v-else src="~/assets/default-brain.svg" />
            </div>
            <div class="column">
                <h1 class="title">{{ member.name }}</h1>
                <h2 class="subtitle mb-1">{{ member.role[locale] }}</h2>
                <span v-if="member.socialmedia">
                    <SocialMedia :socialmedia="member.socialmedia" />
                </span>
                <Markdownify class="mt-4" :text="member.info[locale]" />

            </div>

        </div>
    </NuxtLayout>
</template>

<style scoped>

</style>