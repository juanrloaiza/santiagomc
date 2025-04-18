<script setup lang="ts">
import Markdownify from '~/components/Markdownify.vue';

const dayjs = useDayjs()
const { locale } = useI18n();

dayjs.locale(locale.value)

const activeSemester = '2025-I';

const { data: activeGroup } = await useAsyncData(
    () => queryContent('activities/reading-group')
    .where({semester: {$eq: activeSemester}})
    .findOne()
);

const { data: otherGroups } = await useAsyncData(
    () => queryContent('activities/reading-group')
    .where({semester: {$ne: activeSemester}})
    .sort({startDate: -1})
    .find()
);

const parseDate = function(dateString: string){
    return dayjs(dateString).format('MMMM DD')
}

const dayOfWeek = function(dateString: string){
    return dayjs(dateString).format('dddd')
}

</script>

<template>
<NuxtLayout :title="$t('activities')">
    <h1 class="title mb-5">{{ $t('reading_group') }}</h1>

    <div class="columns">
        <div class="column is-one-quarter">
            <img :src="activeGroup.img"/>
        </div>
        <div class="column">
            <h3 class="is-size-3">{{ activeGroup.title }}</h3>
            <h4 class="subtitle mb-4">{{ activeGroup.author }}</h4>
            <div class="is-size-6">
            <p class="capitalized">{{ dayOfWeek(activeGroup.startDate) }} {{ activeGroup.time }}<br>{{ parseDate(activeGroup.startDate) }} - {{ parseDate(activeGroup.endDate) }}</p>
            <p>{{ activeGroup.place }}</p>
        </div>
        <div>
            <Markdownify :text=activeGroup.info.es />
            <p>Para más información o registrarte en la lista de correos, puedes escribir a Francisco Pedreros (fpedreros@uahurtado.cl).</p>
        </div>
</div>
</div>

    <h2 class="is-size-3 mt-5">{{ $t('previous_readings') }}</h2>
    <div class="columns">
    <div v-for="group in otherGroups" class="column is-one-quarter is-flex is-flex-direction-column is-align-items-center has-text-centered">
    <img :src="group.img" class="p-3 bookcover"/>
    {{ group.author }}<br>
    <em>{{ group.title }}</em>
    <p class="is-size-6">{{ group.semester }}</p>
    </div>
</div>
</NuxtLayout>
</template>

<style scoped>
.capitalized {
    text-transform: capitalize
}

.bookcover {
    width: 80%
}
</style>