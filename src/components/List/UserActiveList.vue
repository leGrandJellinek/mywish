<template lang="pug">
section.list
    .list-header
        .list-header__profile
            .list-header__profile-icon
                img(src="@/assets/svg/iconoir_user-love.svg")
            .list-header__profile-content
                h2.list-header__profile-listname Активный список
                p.list-header__profile-listdescr Описание списка
        .list-header__filter
        .list-content
            .list-content__header
                h2.list-content__title  Dобавьте свой первый подарок
                p.list-content__descr Просто создайте карту подарка и пусть все узнают ваши желания
                .list-content__search-wrapper
                    .list-content__search-block
                        input.list-content__search-input(type="text" placeholder="Поиск...")
                        .list-content__search-icon
                            img(src="@/assets/svg/material-symbols_search.svg")
            .list-block
                Present(v-for="n in 8" :key="n")
                
</template> 

<script>
import Present from "@/components/List/Present.vue"
export default {
    components: {
        Present,

    }
}
</script>
