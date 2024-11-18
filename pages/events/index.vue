<script setup>
function parseDate(dateString) {
    const [day, month, year] = dateString.split('.').map(Number)
    return new Date(year, month - 1, day)
}

function isFutureEvent(event) {
    const now = new Date()
    return event.startDate.getTime() > now.getTime()
}

const events = await queryContent('events').sort({ startDate: -1 }).find()

const parsedEventsWithDates = events.map((e) => {
    let parsedEvent = { ...e }
    parsedEvent.startDate = parseDate(e.startDate)

    if (typeof e.endDate !== 'undefined') {
        parsedEvent.endDate = parseDate(e.endDate)
    }

    return parsedEvent
})

const pastEvents = parsedEventsWithDates.filter((e) => !isFutureEvent(e)).reverse()
const futureEvents = parsedEventsWithDates.filter(isFutureEvent)

</script>

<template>
    <NuxtLayout :title="$t('events')">
        <div v-if="futureEvents.length > 0">
            <Header :title="$t('upcoming_events')" />
            <EventsList :events="futureEvents" />
        </div>

        <div>
            <Header :title="$t('past_events')" />
            <EventsList :events="pastEvents" />
        </div>
    </NuxtLayout>
</template>
