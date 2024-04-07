<script setup>
const content = await queryContent('contact').findOne();
const { locale } = useI18n();

</script>

<template>
    <NuxtLayout :title="$t('contact')">
        <div class="columns">
            <div class="column is-3"><img src="https://unsplash.com/photos/cCmY8YnYrGY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHNhbnRpYWdvJTIwY2hpbGV8ZW58MHx8fHwxNzEwMzYyNjU3fDA&force=true&w=500"/>
            <p class="is-size-6 has-text-grey">Photo by <a href="https://unsplash.com/photos/running-vehicles-on-road-cCmY8YnYrGY">Caio Silva</a>.</p></div>
            <div class="column"><Markdownify :text="content[locale]"/></div>
        </div>
        
    </NuxtLayout>
</template>