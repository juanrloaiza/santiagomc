<script>
const r = useRoute().fullpath;

export default {
    props: ['title']
}
</script>

<template>
    <div class="hero is-medium">
        <div class="hero-body has-text-centered">
            <h1 class="title is-size-1-mobile">{{ title }}</h1>
        </div>
    </div>
</template>

<style scoped>
.hero {
    background-position-y: 30% !important;
    background: linear-gradient(rgba(19, 69, 96, 0.9), rgba(0, 0, 0, 0.9)), url('https://unsplash.com/photos/_0iV9LmPDn0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE3ODU0NDg2fA&force=true&w=1920');
    background-repeat: no-repeat;
    background-size: cover;
}

.hero-body {
    backdrop-filter: blur(1920x1080px);
}

.title {
    font-size: 5rem;
    font-weight: lighter;
    color: white
}
</style>