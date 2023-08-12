<template lang="pug">
.header
    .container
        nav.navbar
            .navbar-logo
                a(href="")
                    img(src="@/assets/images/logo.png")
            ul.navbar-menu
                li(v-for="link in menu" :key="link.id")
                    router-link.navbar-menu__link(:to="link.link") {{link.name}}
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
                    name: "Главная",
                    link: '/'
                },
                {
                    id: 2,
                    name: "Список желаний",
                    link: '/list'
                },
                {
                    id: 3,
                    name: "Список подарков",
                    link: '/list'
                },
                {
                    id: 4,
                    name: "Войти/Регистрация",
                    link: '/'
                },
            ]
        }
    }
}
</script>