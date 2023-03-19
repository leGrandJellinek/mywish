<template lang="pug">
form.form-signup(action='' method='post' name='form')
  label(for='fullname') Full name
  input.form-styling(type='text' name='fullname' placeholder='')
  label(for='email') Email
  input.form-styling(type='text' name='email' placeholder='')
  label(for='password') Password
  input.form-styling(type='text' name='password' placeholder='')
  label(for='confirmpassword') Confirm password
  input.form-styling(type='text' name='confirmpassword' placeholder='')
  a.btn-signup(ng-click='checked = !checked') Sign Up
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped></style>
