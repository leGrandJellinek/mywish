<template lang="pug">
.footer__center-item
    h3.footer__center-item__title {{item.title}}
    ul.footer__center-item__menu
        li.footer__center-item__li(
            v-for="station in item.items"
            :key="station.id")
            a.footer__center-item__link(v-if="station.link" :href="station.link") {{station.name}}
            a.footer__center-item__text(v-else href="https://goo.gl/maps/dCC12x9mWWMz9wHK8" target="_blank") {{station.name}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        item: {
            type: Object,
        }
    },
})
</script>

<style lang="sass" scoped>

</style>
