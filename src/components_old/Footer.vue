<script setup>
const date = new Date().toLocaleDateString("de-DE", { // you can use undefined as first argument
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
})

</script>

<template>
    <footer class="is-size-6 has-text-grey-light has-text-centered mb-5">
        Última actualización: {{ date }}
    </footer>
</template>