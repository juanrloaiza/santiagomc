<template>
    {{ date.getDate() }}/{{ date.getMonth() }}/{{ date.getFullYear() }}
</template>

<script>
export default {
    props: ['date']
}
</script>
