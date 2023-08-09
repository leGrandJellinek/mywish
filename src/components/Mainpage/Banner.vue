<template lang="pug">
.bg
    .container 
        section.banner(:class="bannerClass")
            .banner-left
                h2.banner-title  {{banner.text}}
                a.banner-btn(href="/") {{banner.btnText}}
            .banner-right 
                .banner-img 
</template>

<script>
export default {
    props: {
        banner: {
            type: Object,
            required: true
        },
        bannerClass: {
            type: String,
            required: false,
        }
    }
}
</script>
