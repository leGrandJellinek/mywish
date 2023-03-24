<template lang="pug">
section.gift-finder
    .container
        input.gift-finder__input(v-model="inputSearch")
        button(@click="urlSubmit") отправить
        .gift-finder__list
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { mapActions } from 'vuex'

export default defineComponent({
    data(){
        return {
            inputSearch: ""
        }
    },
    methods:{
        ...mapActions(["parseFromSite"]),
        urlSubmit():void{
            if(this.inputSearch.length > 0){
                this.parseFromSite(this.inputSearch);
                this.inputSearch = "";
            }
        }
    }
})
</script>

<style lang="sass" scoped>
.gift
    &-finder
        padding: 40px 0
        &__input
            width: 100%
            height: 30px
            border: 1px black solid
        button
            padding: 25px

</style>