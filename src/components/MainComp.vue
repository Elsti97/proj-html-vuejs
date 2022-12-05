<template>
  <main>
    <JumboTron />
    <ContComp1 />
    <CaroselComp />
    <ContComp2 />
    <ArticlesComp />
  </main>
</template>

<script>
import JumboTron from './main_folder/JumboTron.vue'
import ContComp1 from './main_folder/ContComp1.vue'
import CaroselComp from './main_folder/CaroselComp.vue'
import ContComp2 from './main_folder/ContComp2.vue'
import ArticlesComp from './main_folder/ArticlesComp.vue'

export default {
  name: "MainComp",
  components: {
    JumboTron,
    ContComp1,
    CaroselComp,
    ContComp2,
    ArticlesComp
  },
  props: {},
};
</script>

<style lang="scss" scoped>
</style>