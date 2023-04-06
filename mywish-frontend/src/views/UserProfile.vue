<template lang="pug">
Header
section.user-profile
    .container.profile-content
        form.user-info(action="")
          .user-info-top
            .profile-img-input
              .profile-img-prev
                <i class="fa-regular fa-user"></i>
              //- input(ref="user-foto" type="file" @input="pickFile")
            .profile-img-text
              h3.profile-img-title Add your photo
              p.profile-img-body Put a friendly face on your Giftster lists, groups and search results.
          .user-info-bottom
            .profile-text-inputs
              .profile-input-label
                label(for="user-name" class="profile-label") Name
                input(type="text" id="user-name" placeholder="Insert your name" class="profile-input" name="user_name")
              .profile-input-label
                label(for="user-surname" class="profile-label") Surname
                input(type="text" id="user-surname" placeholder="Insert your surname" class="profile-input" name="user_surname")
            .profile-input-label.profile-input-mail
              label(for="user-name" class="profile-label") Mail
              input( type="email" placeholder="Insert your email" class="profile-input" name="user_mail")
            .profile-input-label.profile-input-date
              label(for="user-date" class="profile-label") Birthday
              select(id="user-date" class="user-date")
                option(value="" selected) Choose year pls
                option( v-for="year in years" :key="year" :value="year" class="user-date__year") {{ year }} year
              select(id="user-date" class="user-date")
                option(value="" selected) Choose mounth pls
                option( v-for="mounth in mounths" :key="mounth" :value="mounth" class="user-date__year") {{ mounth }}
              select(id="user-date" class="user-date")
                option(value="" selected) Choose day pls
                option( v-for="year in years" :key="year" :value="year" class="user-date__year") {{ year }} year
            .profile-vis
              h3.profile-vis_title Member search settings
              p Тут должен быть checkbox с тексктом: Let find me in search
              p Тут должен быть checkbox с тексктом: Show my photo in search
            button save 
            .profile-resset
              a(href="") Change password
              a(href="") Delete Account





Footer
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default defineComponent({
  components:{
    Header,
    Footer
  },
  data(){
    return{
      years: this.range(1900,2023),
      mounths: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
    }
  },
  methods: {
    range(start: number, end: number): number[] { // определяем метод range, который возвращает массив чисел
      const length = end - start + 1;
      return Array.from({ length }, (_, i) => start + i);
    }
  }
})
</script>

<style lang="scss" scoped></style>
