<script setup>
const links = [
    'members',
    'activities',
    'events',
    'contact'
]

</script>

<script>

export default {
    data() {
        return {
            isActive: false,
            showNavbar: true
        }
    }
}
</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" :href="localePath('/')">
                <h1 class="has-text-weight-bold mr-5">Santiago Mind and Cognition</h1>
            </a>

            <a :aria-expanded="isActive" :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button"
                class="navbar-burger" aria-label="menu" data-target="smcnavbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="smcnavbar" class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start">
                <NuxtLink :to="localePath('/')" class="navbar-item">{{ $t('index') }}</NuxtLink>
                <NuxtLink v-for="link in links" :to="localePath(link)" class="navbar-item">
                    {{ $t(link) }}
                </NuxtLink>

            </div>

            <div class="navbar-end">
                <LanguageSwitcher />
            </div>
        </div>
    </nav>

</template>

<style>
nav {
    font-size: 1rem;
}
</style>