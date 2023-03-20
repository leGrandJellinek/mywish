<template lang="pug">
nav.header__navbar
    .header__navbar-logo LOGO 
    ul.header__navbar-menu
        li.header__navbar-link(
                v-for="item in navMenu"
                :key="item.id") 
            a(:href="item.link") {{item.name}}
    .header__navbar-btns
        router-link.header__navbar-login(to="/auth") Log in

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            navMenu: [
                {
                    id:1,
                    name: "Home",
                    link: "#"
                },
                {
                    id:2,
                    name: "About us",
                    link: "#"
                },
                {
                    id:3,
                    name: "Contacts",
                    link: "#"
                },
                {
                    id:4,
                    name: "More",
                    link: "#"
                },
                // {
                //     id:5,
                //     name: "",
                //     link: "#"
                // },
            ]
        }
    }
})
</script>

<style lang="sass" scoped>
</style>
