<script setup>
const route = useRoute();
const member = await queryContent('members', route.params.id).findOne()
const { locale } = useI18n();
</script>

<template>
    <NuxtLayout :title="$t('members')">

        <div class="columns">
            <div class="column is-3">
                <img v-if="member.img" :src="'/imgs/' + member.img" />
                <img v-else src="~/assets/default-brain.svg" />
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

<style>
i {
    font-size: 2rem;
    margin-right: 1rem;
}
</style>