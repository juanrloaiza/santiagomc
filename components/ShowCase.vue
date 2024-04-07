<script setup>
const links = [
    { route: 'members', img: 'https://source.unsplash.com/rompecabezas-blanco-y-negro-aYPtEknQmXE' },
    { route: 'events', img: 'https://source.unsplash.com/lote-de-sillas-negras-2xaF4TbjXT0' },
    { route: 'contact', img: 'https://source.unsplash.com/teclado-de-computadora-blanco-2xU7rYxsTiM' },
]

</script>

<template>
    <div class="section columns has-text-centered">
        <div v-for="link in  links " class="column">
            <NuxtLink :to="localePath(link.route)">
                <h2>{{ $t(link.route) }}</h2>
                <img :src="link.img" />
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 2rem;
}

img {
    padding: 1rem;
    border-radius: 30px;
}

a:hover {
    opacity: 0.8
}
</style>