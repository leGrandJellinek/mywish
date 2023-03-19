<template lang="pug">
section.reg-log
    .reg-log__form
        Auth
    .decor-img
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Auth from "@/components/autentification/Auth.vue"

export default defineComponent({
  components:{
    Auth
  },
  data(){
    return{
    }
  },
})
</script>



<style scoped>

</style>