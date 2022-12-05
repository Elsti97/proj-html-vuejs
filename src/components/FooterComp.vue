<template>
  <footer>
    <NewsLetter />
    <LinksComp />
  </footer>
</template>

<script>
import NewsLetter from './footer_folder/NewsLetter.vue'
import LinksComp from './footer_folder/LinksComp.vue'

export default {
  name: "FooterComp",
  components:{
    NewsLetter,
    LinksComp
  },
  props: {},
};
</script>

<style lang="scss" scoped>
</style>