<template lang="pug">
nav.header__navbar
    .header__navbar-logo LOGO
    ul.header__navbar-menu
        li.header__navbar-link(
                v-for="item in navMenu"
                :key="item.id")
            a(:href="item.link" class="btn-link") {{item.name}}
    .header__navbar-btns
        router-link.btn_primary.header__navbar-login(to="/auth") Log in

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      navMenu: [
        {
          id: 1,
          name: "Списки пожеланий",
          link: "#",
        },
        {
          id: 2,
          name: "Блок о желаниях и подарках",
          link: "#",
        },
        {
          id: 3,
          name: "Идеи подарков",
          link: "#",
        },
        {
          id: 4,
          name: "Профиль",
          link: "#",
        },
        // {
        //     id:5,
        //     name: "",
        //     link: "#"
        // },
      ],
    };
  },
});
</script>

<style lang="sass" scoped></style>
