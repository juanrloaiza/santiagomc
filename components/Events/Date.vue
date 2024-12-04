<template>
    {{ date.getDate() }}/{{ date.getMonth() +1 }}/{{ date.getFullYear() }}
</template>

<script>
export default {
    props: ['date']
}
</script>
