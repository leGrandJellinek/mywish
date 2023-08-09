<template lang="pug">
.container 
    .list-component__wrapper
        UserLists
        UserActiveList
</template>

<script>
import UserLists from "@/components/List/UserLists.vue"
import UserActiveList from "@/components/List/UserActiveList.vue"
export default {
    components: {
        UserLists,
        UserActiveList
    }
}
</script>
