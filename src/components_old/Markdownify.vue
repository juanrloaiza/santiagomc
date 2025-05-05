<script setup>
import { marked } from 'marked';

const props = defineProps({
    text: String
})

const html = marked.parse(props.text);
</script>

<template>
    <div v-html="html"></div>
</template>

<style>
td {
    padding-right: 1rem;
}
table {
    margin-bottom: 1rem
}
</style>