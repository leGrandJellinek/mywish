<template lang="pug">
header.header
    .container
        nav.navbar
            .navbar-logo
                router-link(to="/")
                    img(src="@/assets/images/Mywish_logo.svg")
            .navbar-menu__wrapper
                ul.navbar-menu
                    li(v-for="link in menu" :key="link.id")
                        a.navbar-menu__link(:href="link.link") {{link.name}}
                .my-profile__wrapper
                    a.my-profile__link(href="")
                        img(src="@/assets/svg/iconoir_user-love.svg")
            button.burger-btn
                img(src="@/assets/svg/bars.svg")

</template>

<script>
export default {
    data(){
        return {
            menu: [
                {
                    id: 1,
                    name: "Желания",
                    link: '#'
                },
                {
                    id: 2,
                    name: "Мои списки",
                    link: '#'
                },
                {
                    id: 3,
                    name: "Подарки",
                    link: '#'
                },
                {
                    id: 4,
                    name:"Профиль",
                    link: "#"
                }
            ]
        }
    }
}
</script>