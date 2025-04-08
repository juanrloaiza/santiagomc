<script setup lang="ts">
const route = useRoute();
const slug: string = "events/" + route.params.slug;
</script>

<template>
    <NuxtLayout :title="$t('events')">
        <div class="event">
            <ContentDoc :path="slug" v-slot="{ doc }">
                <h1 class="title mb-3">{{ doc.title }}</h1>
                <div class="is-size-6 mb-5">
                    {{ doc.startDate }} · {{ doc.startTime }} - {{ doc.endTime }}<br>
                    <Markdownify :text="doc.place" />

                </div>
                <ContentRenderer :value="doc" />
            </ContentDoc>
        </div>
    </NuxtLayout>
</template>

<style>
h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

h4 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;
}

td {
    padding-right: 2rem;
    padding-bottom: 0.5rem;
}

blockquote {
    border-left: 0.25rem solid #cfcfcf;
        padding-left: 1rem;

    @media (min-width: 800px) {
        margin-left: 2rem;
        margin-top: 1rem;
        
    }
}

img {
    @media (max-width: 800px) {
        max-width: 20rem;        
    } 
}

</style>