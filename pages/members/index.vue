<script setup>
const members = await queryContent('members').find()
const { locale } = useI18n();
</script>

<template>
    <NuxtLayout :title="$t('members')">

        <div class="grid is-col-min-10 is-gap-5">
            <div v-for="member in members" :key="member._path" class="cell has-text-centered">
                <NuxtLinkLocale :to="member._path">
                    <img v-if="member.img" :src="member.img" />
                    <img v-else src="~/assets/default-brain.svg" />
                    <h2>{{ member.name }}</h2>
                    {{ member.role[locale] }}
                    <div>
                        <div class="tag" v-for="area in member.areas">{{ area[locale] }}</div>
                    </div>
                </NuxtLinkLocale>
            </div>

        </div>
    </NuxtLayout>
</template>

<style scoped>
img {
    max-width: 15rem;
    height: 18rem;
    border-radius: 15px;
}

a>img:hover {
    opacity: 0.8
}
</style>
