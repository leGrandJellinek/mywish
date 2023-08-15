<template lang="pug">
.header(:class="{ 'fixed-header': isHeaderFixed }")
    .container
        nav.navbar()
            .navbar-logo
                a(href="")
                    img(src="@/assets/images/mywish_logo.svg")
            ul.navbar-menu
                li(v-for="link in menu" :key="link.id")
                    router-link.navbar-menu__link(:to="link.link") {{link.name}}
            button.burger-btn
                img(src="@/assets/svg/bars.svg")
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 1,
          name: 'Главная',
          link: '/',
        },
        {
          id: 2,
          name: 'Желания и подарки',
          link: '/indevelope',
        },
        {
          id: 3,
          name: 'Идеи подарков',
          link: '/indevelope',
        },
        {
          id: 4,
          name: 'Войти/Регистрация',
          link: '/indevelope',
        },
      ],
      isHeaderFixed: false,
    }
  },
  methods: {
    handleScroll() {
      // Здесь вы можете реализовать логику для определения, нужно ли фиксировать заголовок
      // Например, вы можете проверять значение window.scrollY и решать, когда задавать фиксированную позицию
      if (window.scrollY > 100) {
        this.isHeaderFixed = true
      } else {
        this.isHeaderFixed = false
      }
    },
  },
  mounted() {
    // Добавляем прослушивание события прокрутки окна при монтировании компонента
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    // Удаляем прослушивание события при уничтожении компонента
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
