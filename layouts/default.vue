<template lang="pug">
.container.is-fluid
  b-navbar
    template(#brand='')
      b-navbar-item(tag='router-link' :to="{ path: '/' }")
        img(src='https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png' alt='Lightweight UI components for Vue.js based on Bulma')
    template(#start='')
      b-navbar-item(href='#')
        | Home
      b-navbar-item(href='#')
        | Documentation
      b-navbar-dropdown(label='Info')
        b-navbar-item(href='#')
          | About
        b-navbar-item(href='#')
          | Contact
    template(#end='')
      b-navbar-item(tag='div')
        .buttons
          a.button.is-primary
            strong Sign up
          a.button.is-light
            | Log in

  nuxt
</template>

<script>
import Logo from "~/components/Logo";

export default {
  components: { Logo }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2e495e;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html,
body,
#__nuxt,
#__layout,
.container,
.news__container {
  height: 100%;
}
</style>
