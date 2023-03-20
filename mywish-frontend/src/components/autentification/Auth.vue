<template lang="pug">
.frame(:class="{'frame-long' : !signIn}")
    .nav
      ul.sign-btns
        li.signin-active(:class="{'signin-inactive': !signIn}" @click="signIn = true")
          a.btn Sign in
        li.signup-inactive(:class="{'signup-active' : !signIn}" @click="signIn = false")
          a.btn Sign up 
    div(ng-app="", ng-init="checked = false")
      form.form-signin(:class="{'form-signin-left': !signIn}" action="", method="post", name="form")
        label(for="username") Username
        input.form-styling(type="text", name="username", placeholder="")
        label(for="password") Password
        input.form-styling(type="text", name="password", placeholder="")
        input#checkbox(type="checkbox")
        label(for="checkbox")
          span.ui Keep me signed in
        .btn-animate
          a.btn-signin Sign in
      form.form-signup(:class="{'form-signup-left ': !signIn}" action="", method="post", name="form")
        label(for="username") Username
        input.form-styling(type="text", name="username", placeholder="")
        label(for="email") Email
        input.form-styling(type="text", name="email", placeholder="")
        label(for="password") Password
        input.form-styling(type="text", name="password", placeholder="")
        label(for="confirmpassword") Confirm password
        input.form-styling(type="text", name="confirmpassword", placeholder="")
        a.btn-signup(ng-click="checked = !checked") Sign Up
      //- .success
        svg#check(
          width="270",
          height="270",
          xmlns="http://www.w3.org/2000/svg",
          xmlns:xlink="http://www.w3.org/1999/xlink",
          x="0px",
          y="0px",
          viewbox="0 0 60 60",
          ng-class="checked ? 'checked' : ''"
        )
          path(
            fill="#ffffff",
            d="M40.61,23.03L26.67,36.97L13.495,23.788c-1.146-1.147-1.359-2.936-0.504-4.314\
                      c3.894-6.28,11.169-10.243,19.283-9.348c9.258,1.021,16.694,8.542,17.622,17.81c1.232,12.295-8.683,22.607-20.849,22.042\
                      c-9.9-0.46-18.128-8.344-18.972-18.218c-0.292-3.416,0.276-6.673,1.51-9.578"
          )
        .successtext
          p Thanks for signing up! Check your email for confirmation.
    .forgot(:class="{'forgot-left' : !signIn}")
      a(href="#") Forgot your password?
    div
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data(){
      return {
        signIn: true,
      }
    },
    methods: {
    
  }
});
</script>


<style lang="sass" scoped>
</style>