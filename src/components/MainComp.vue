<template>
  <main>
    <JumboTron :imageJumboLeft="JumboArrayLeft" :imageJumboRight="JumboArrayRight"/>
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
  data(){
    return{
      JumboArrayLeft: [
        {
          image: "artist-shape-02.png",
          class: "absolute a-0"
        },
        {
          image: "artist-shape-03.png",
          class: "absolute a-0"
        },
        {
          image: "artist-hero-image-01.jpg",
          class: "absolute a-4"
        },
        {
          image: "artist-hero-image-02.jpg",
          class: "absolute a-0"
        },
        {
          image: "artist-hero-image-03.png",
          class: "absolute a-0"
        },
      ],
      JumboArrayRight: [
        {
          image: "artist-shape-01.png",
          class: "absolute a-0"
        },
        {
          image: "artist-shape-01-300x288.png",
          class: "absolute a-0"
        },
        {
          image: "artist-shape-03.png",
          class: "absolute a-2"
        },
        {
          image: "artist-shape-05.png",
          class: "absolute a-3"
        },
        {
          image: "artist-hero-image-04.jpg",
          class: "absolute a-4"
        },
      ]
    }
  }
};
</script>

<style lang="scss">
.font-celeste{
    font-family: 'La Belle Aurore', cursive;
    font-size: 3rem;
    color: #69a0fd;
}
</style>