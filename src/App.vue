<template>
  <div id="app">
    <HeaderComp :dataSocials="socialsArray"/>
    <MainComp />
    <FooterComp :dataSocials="socialsArray"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
  },
  data(){
    return{
      socialsArray: [
        {
          image_logo: "fa-brands fa-twitter />",
          url: "https://www.twitter.com/",
        },
        {
          image_logo: "fa-brands fa-facebook-f />",
          url: "https://www.facebook.com/",
        },
        {
          image_logo: "fa-brands fa-instagram />",
          url: "https://www.instagram.com/",
        },
        {
          image_logo: "fa-brands fa-linkedin />",
          url: "https://www.linkedin.com/",
        },
      ],
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
