<template lang="pug">
form.form-signin(action="" method="post" name="form")
  label(for="username") Username
  input.form-styling(type="text" name="username" placeholder="")
  label(for="password") Password
  input.form-styling(type="text" name="password" placeholder="")
  input(type="checkbox" id="checkbox")
  label(for="checkbox")
    span.ui Keep me signed in
  .btn-animate
    a.btn-signin Sign in

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  
})
</script>

<style lang="scss" scoped></style>

/*   <!--  <form class="form-signin" action="" method="post" name="form">
  <label for="username">Username</label>
  <input class="form-styling" type="text" name="username" placeholder="" />
  <label for="password">Password</label>
  <input class="form-styling" type="text" name="password" placeholder="" />
  <input type="checkbox" id="checkbox" />
  <label for="checkbox"><span class="ui"></span>Keep me signed in</label>
  <div class="btn-animate">
    <a class="btn-signin">Sign in</a>
  </div>
</form>   --> */