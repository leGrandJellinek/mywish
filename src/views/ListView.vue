<template lang="pug">
div 
  SecondHeader
  main 
    ListComponent
  Footer
</template>

<script>
import SecondHeader from "@/components/SecondHeader.vue";
import ListComponent from "@/components/List/ListComponent.vue";
import Footer from "@/components/Footer.vue"
export default {
  components: {
    SecondHeader,
    ListComponent,
    Footer
  },
}
</script>