<template>
  <div>
    <div class="text-center">
      <h1 class="font-celeste">Testimonials</h1>
      <h1>Why do people love me?</h1>
    </div>

    <!-- CAROSEL -->
    <carousel class="carousel-center">
      <slide class="card" v-for="(elem, index) in dataPhotos" :key="index">
        <h3>{{ elem.titolo }}</h3>
        <p>{{ elem.paragrafo }}</p>
        <div class="img-part">
          <img :src="require(`../../assets/images/${elem.image}`)" alt="" />
          <h3>{{ elem.name }}</h3>
          <p>/ {{ elem.work }}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "CaroselComp",
  components: {
    Carousel,
    Slide,
  },
  props: {
    dataPhotos: Array,
  },
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
  margin-top: 3rem;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.margin-2 * {
  margin: 2rem;
}
.carousel-center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 3rem auto 0;
  .card {
    padding: 2rem 1rem;
    text-align: center;
    img {
      width: 20%;
      border-radius: 50%;
      margin: 1rem;
    }
    .img-part {
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }
}
</style>