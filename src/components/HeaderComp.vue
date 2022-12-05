<template>
  <header>
    <CountDown />
    <NavBar :dataNavBar="navbarArray" :dataSocials="socialsArray" />
  </header>
</template>

<script>
import CountDown from './CountDown.vue';
import NavBar from './NavBar.vue'

export default {
  name: "HeaderComp",
  components: {
    CountDown,
    NavBar,
  },
  props: {},
  data(){
    return {
      navbarArray: [
        {
          name: 'Home',
          url: 'google.com'
        },
        {
          name: 'Pages',
          url: 'google.com'
        },
        {
          name: 'Courses',
          url: 'google.com'
        },
        {
          name: 'Features',
          url: 'google.com'
        },
        {
          name: 'Blog',
          url: 'google.com'
        },
        {
          name: 'Shop',
          url: 'google.com'
        },
      ],
      socialsArray: [{
        image_logo: 'fa-brands fa-twitter />',
        url: 'https://www.google.it/'
      },
      {
        image_logo: 'fa-brands fa-facebook-f />',
        url: 'https://www.google.it/'
      },
      {
        image_logo: 'fa-brands fa-instagram />',
        url: 'https://www.google.it/'
      },
      {
        image_logo: 'fa-brands fa-linkedin />',
        url: 'https://www.google.it/'
      },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
</style>