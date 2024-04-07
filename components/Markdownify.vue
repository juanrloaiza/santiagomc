<script setup>
import { marked } from 'marked';

const props = defineProps({
    text: String
})

const html = marked.parse(props.text);
</script>

<template>
    <span v-html="html"></span>
</template>