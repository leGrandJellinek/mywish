<template lang="pug">
.user-lists
    .user-lists__header
        .user-lists__header-content
            .user-lists__header-icon
                img(src="@/assets/svg/solar_bill-list-linear.svg")
        button.user-lists__header-btn
            .user-lists__header-icon
                img(src="@/assets/svg/ic_round-plus.svg")
    .user-lists__block 
        .user-lists__block-item.active
            .lists-item__inner
                .lists-item__icon
                    img(src="@/assets/svg/solar_bill-list-linear.svg")
                h2.lists-item__title Активный список
                .lists-item__type открытый
                .lists-item__options
                    .lists-item__settings
                        img(src="@/assets/svg/material-symbols_settings.svg")
                    .lists-item__delete
                        img(src="@/assets/svg/ic_baseline-delete.svg")
                    
        .user-lists__block-item
            .lists-item__inner
                .lists-item__icon
                    img(src="@/assets/svg/solar_bill-list-linear.svg")
                h2.lists-item__title Обычный список
                .lists-item__type закрытый 
                .lists-item__options
                    .lists-item__settings
                        img(src="@/assets/svg/material-symbols_settings.svg")
                    .lists-item__delete
                        img(src="@/assets/svg/ic_baseline-delete.svg")
                    

</template>

<script>
export default {

}
</script>
