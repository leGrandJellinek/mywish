<template lang="pug">
.home-page
  Header
  main.main
    Banner(
      :banner="firstBanner"
    )
    WhyService
    Banner(:banner="secondBanner", bannerClass="row-reverse")
    Instruction
  Footer
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Mainpage/Banner.vue'
import WhyService from '@/components/Mainpage/WhyService.vue'
import Instruction from '@/components/Mainpage/Instruction.vue'
export default {
  components: {
    Header,
    Banner,
    WhyService,
    Instruction,
    Footer,
  },
  data() {
    return {
      firstBanner: {
        text: 'Вы знали, что мощь ваших желаний может воплотиться в реальность?',
        btnText: 'Создать список подарков',
      },
      secondBanner: {
        text: 'Создание списка подарков на нашем сайте - это просто и удобно.',
        btnText: 'Регистрация',
      },
    }
  },
}
</script>
