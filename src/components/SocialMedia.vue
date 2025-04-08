<script setup lang="ts">
const props = defineProps(['socialmedia'])
const i18n = useI18n();

const socialMedia: {k: string; v: string} = props["socialmedia"]

const translateSocialMediaKey = (key: string) => {
    if (key == 'url') return i18n.t('url')
    return key
}

const length = Object.keys(socialMedia).length
</script>

<template>
    <div class="mb-4">
        <a class="mr-1 is-uppercase is-size-7" 
        v-for="(value, key, index) in socialMedia" 
        :href="value">
            
        {{ translateSocialMediaKey(key) }}
        
        <span v-if="index < length - 1"> · </span></a>
    </div>

</template>