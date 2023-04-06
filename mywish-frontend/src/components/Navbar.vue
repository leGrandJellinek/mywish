<template lang="pug">
nav.header__navbar
    .header__navbar-logo LOGO
    ul.header__navbar-menu
        li.header__navbar-link(
                v-for="item in navMenu"
                :key="item.id")
            router-link(:to="item.link" class="btn-link") {{item.name}}
    .header__navbar-btns
        router-link.btn_primary.header__navbar-login(to="/auth" v-if="!getAuth") Log in
        router-link.btn_primary.header__navbar-login(to="/profile" v-if="getAuth") Профиль

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
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
<<<<<<< HEAD
=======
        {
          id: 4,
          name: "Профиль",
          link: "#",
        },
        {
          id: 5,
          name: "Поиск тест",
          link: "/search",
        },
>>>>>>> 8ce8864307a5b3a15c00cae5b2fabf70138c2685
        // {
        //     id:5,
        //     name: "",
        //     link: "#"
        // },
      ],
    };
  },
  computed:{
    ...mapGetters(['getAuth'])
  },
});
</script>