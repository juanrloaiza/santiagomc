<script setup>
const props = defineProps(['socialmedia'])
const i18n = useI18n();

const socialMedia = props["socialmedia"]

const names = {
    url: i18n.t('url')
}

const length = Object.keys(socialMedia).length
</script>

<template>
    <div class="mb-4">
        <a class="mr-1 is-uppercase is-size-7" v-for="(value, key, index) in socialMedia" :href="value">{{ i18n.t(key)
            }}
            <span v-if="index < length - 1"> · </span></a>
    </div>

</template>