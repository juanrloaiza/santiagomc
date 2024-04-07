<script setup>
const links = [
    'members',
    'activities',
    'events',
    'contact'
]

</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" :href="localePath('/')">
                <h1 class="has-text-weight-bold mr-5">Santiago Mind and Cognition</h1>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="smcnavbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="smcnavbar" class="navbar-menu">
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