<script>
export default {
    props: ['title']
}
</script>

<template>
    <Navbar />
    <Hero :title="title" />
    <div class="container">
        <section class="section">
            <slot />
        </section>
    </div>
</template>

<style>
a {
    color: rgb(86, 86, 187);

    :hover {
        color: rgb(77, 77, 255);
    }
}
</style>
