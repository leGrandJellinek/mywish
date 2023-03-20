<template lang="pug">
header.header
    .container
        Navbar
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
    components: {
        Navbar
    }
})
</script>

<style scoped>

</style>