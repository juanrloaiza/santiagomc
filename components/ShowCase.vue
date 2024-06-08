<script setup>
const links = [
    { route: 'members', img: 'https://unsplash.com/photos/eo5Hrzyb4D0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE3ODYzNTcxfA&force=true&w=640' },
    { route: 'events', img: 'https://unsplash.com/photos/2xaF4TbjXT0/download?force=true&w=640' },
    { route: 'activities', img: 'https://unsplash.com/photos/lUaaKCUANVI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nzd8fHN0dWR5fGVufDB8MHx8fDE3MTI0NjkzMzN8Mg&force=true&w=640' },
    { route: 'contact', img: 'https://unsplash.com/photos/2xU7rYxsTiM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8fHwxNzE3ODYzNTkyfDI&force=true&w=640' },

]

</script>

<template>
    <div class="section grid is-col-min-10 is-gap-3 has-text-centered">
        <div v-for="link in  links " class="cell">
            <NuxtLink :to="localePath(link.route)">
                <img :src="link.img" />
                <h2>{{ $t(link.route) }}</h2>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.75rem;
}

img {
    padding: 1rem;
    border-radius: 30px;
}

a:hover {
    opacity: 0.8
}
</style>