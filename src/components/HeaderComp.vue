<template>
  <header>
    <CountDown />
    <NavBar :dataNavBar="navbarArray" :dataSocials2="dataSocials" />
  </header>
</template>

<script>
import CountDown from "./header_folder/CountDown.vue";
import NavBar from "./header_folder/NavBar.vue";

export default {
  name: "HeaderComp",
  components: {
    CountDown,
    NavBar,
  },
  props: {
    dataSocials: Array,
  },
  data() {
    return {
      navbarArray: [
        {
          name: "Home",
          url: "google.com",
        },
        {
          name: "Pages",
          url: "google.com",
        },
        {
          name: "Courses",
          url: "google.com",
        },
        {
          name: "Features",
          url: "google.com",
        },
        {
          name: "Blog",
          url: "google.com",
        },
        {
          name: "Shop",
          url: "google.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>