<template lang="pug">
footer.footer
    .container
        .footer-block
            .footer__top
                a.footer__top-email(href="mailto:info@mywish.uz") INFO@MYWISH.UZ
            .footer__center
                .footer__center-block
                    FooterCenterItem(
                        v-for="(item, index) in getFooterList"
                        :key="index"
                        :item="item"
                    )
            .footer__bottom
                p.footer__bottom-compname Mywish © 2023

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapGetters} from "vuex"
import FooterCenterItem from "@/components/Footer/FooterCenterItem.vue";

export default defineComponent({
    data(){
        return {
        }
    },
    components: {
        FooterCenterItem
    },
    computed:{
        ...mapGetters(["getFooterList"]),
    },
    getters: {
    }
})
</script>
