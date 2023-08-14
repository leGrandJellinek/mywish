<template lang="pug">
footer.footer
    .footer-block
        .container
            .footer-up
                .footer-up__block
                    .footer-up__left
                        .footer-logo__wrapper
                            .footer-logo
                                a(href="")
                                    img(src="@/assets/images/logo.png", alt="alt")
                    .footer-up__right
                        .footer-menu__wrapper(v-for="menu in footerMenu" :key="menu.id")
                            h2.footer-menu__title {{menu.name}}
                            ul.footer-menu
                                li.footer-menu__li(v-for="secondLevel in menu.secondLevel" :key="secondLevel.id")
                                    a(:href="secondLevel.link" v-if="secondLevel.title") {{secondLevel.title}}
                                    a(:href="secondLevel.link")
                                        i(v-if="secondLevel.icon" :class="secondLevel.icon")
                .footer-up__block.isMobile
                    .footer-logo__wrapper
                        .footer-logo
                            a(href="/")
                                img.logo(src="@/assets/images/logo.png")
                    .footer-menu__wrapper(v-for="menu in footerMenu" :key="menu.id")
                        h2.footer-menu__title {{menu.name}}
                        ul.footer-menu
                            li(v-for="secondLevel in menu.secondLevel" :key="secondLevel.id")
                                a(v-if="secondLevel.title") {{secondLevel.title}}
                                i(v-if="secondLevel.icon" :class="secondLevel.icon")
        .footer-bottom
            .container
                .footer-bottom__block
                    .footer-bottom__item
                        .footer-bottom__text  {{  new Date().getFullYear() }} Mywish All Rights Reserved.
                    .footer-bottom__item
                        p.footer-bottom__text  Политика конфиденциальности
                        p.footer-bottom__text  Условия эксплуатации
    .footer-bg
</template>

<script>
export default {
  data() {
    return {
      footerMenu: [
        {
          name: 'Поддержка',
          secondLevel: [
            { id: 1, title: 'Помощь', link: '#' },
            { id: 2, title: 'Связаться с нами', link: '#' },
            { id: 3, title: 'Отзывы', link: '#' },
            { id: 4, title: 'Обратная связь', link: '#' },
          ],
        },
        {
          name: 'О нас',
          secondLevel: [
            { id: 1, title: 'История', link: '#' },
            { id: 2, title: 'Наша цель', link: '#' },
            { id: 3, title: 'Новости', link: '#' },
            { id: 4, title: 'Партнеры', link: '#' },
          ],
        },
        {
          name: 'Мы тут',
          secondLevel: [
            { id: 1, icon: 'fa-brands fa-instagram fa-shake', link:'/' },
            { id: 2, icon: 'fa-brands fa-telegram fa-shake', link:'/' },
            { id: 3, icon: 'fa-solid fa-envelope fa-shake', link:'/' },
          ],
        },
      ],
      mobileFooterMenu: [
        {
          name: 'Мы тут',
          secondLevel: [
            { id: 1, icon: 'fa-brands fa-instagram fa-shake', link:'/' },
            { id: 2, icon: 'fa-brands fa-telegram fa-shake', link:'/' },
            { id: 3, icon: 'fa-solid fa-envelope fa-shake', link:'/' },
          ],
        },
        {
          name: 'О нас',
          secondLevel: [
            { id: 1, title: 'История', link: '#' },
            { id: 2, title: 'Наша цель', link: '#' },
            { id: 3, title: 'Новости', link: '#' },
            { id: 4, title: 'Партнеры', link: '#' },
          ],
        },
        {
          name: 'Поддержка',
          secondLevel: [
            { id: 1, title: 'Помощь', link: '#' },
            { id: 2, title: 'Связаться с нами', link: '#' },
            { id: 3, title: 'Отзывы', link: '#' },
            { id: 4, title: 'Обратная связь', link: '#' },
          ],
        },
      ],
    }
  },
}
</script>
