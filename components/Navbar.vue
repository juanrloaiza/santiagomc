<script setup>
const links = [
    'members',
    'activities',
    'events',
    'contact'
]

const isActive = useState('isActive', () => false)

</script>


<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" :href="localePath('/')">
                <div class="has-text-weight-bold mr-5">Santiago Mind and Cognition</div>
            </a>

            <a :aria-expanded="isActive" 
                @click="isActive = !isActive" 
                role="button"
                class="navbar-burger" 
                aria-label="menu" 
                data-target="smcnavbar">
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

<style scoped>
nav {
    font-size: 1rem;
}
</style>