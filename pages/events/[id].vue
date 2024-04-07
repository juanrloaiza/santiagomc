<script setup>
const route = useRoute();
const event = await queryContent('events', route.params.id).findOne()

const hasEndDate = event.endDate !== undefined;

</script>

<template>
    <NuxtLayout :title="$t('events')">
        <h1 class="title">{{ event.title }}</h1>

        <b>Fecha:</b> {{ event.startDate }}<span v-if="hasEndDate"> - {{ event.endDate }}</span><br>
        <b>Hora:</b> {{ event.startTime }}<span v:if="{{ event.endTime }}"> - {{ event.endTime }}</span><br>
        <b>Lugar:</b> {{ event.place }}

        <div class=" container mt-5">
            <Markdownify :text="event.description" />
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
</style>