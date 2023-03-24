<template lang="pug">
div
    Header
    Finder
    Footer
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Finder from "@/components/Finder.vue";

export default defineComponent({
  components:{
    Header,
    Finder,
    Footer
  }
})
</script>

<style lang="sass" scoped>

</style>