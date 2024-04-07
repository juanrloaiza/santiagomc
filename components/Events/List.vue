<template>
    <div v-for="event in events">
        <NuxtLinkLocale :to="event._path">
            <h2>{{ event.title }}</h2>
        </NuxtLinkLocale>
        <p class="is-size-6">
            <EventsDate :date="event.startDate" />
            <span v-if="typeof event.endDate !== 'undefined'">
                -
                <EventsDate :date="event.endDate" />
            </span>
        </p>
    </div>
</template>

<script>
export default {
    props: ['events']
}
</script>