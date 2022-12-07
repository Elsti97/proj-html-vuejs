<template>
  <div class="jumbotron width-3">
    <div class="left-j jumbo relative">
      <img
        class="absolute"
        v-for="(elem, index) in imageJumboLeft"
        :key="index"
        imageJumboLeft="elem"
        :src="require(`../../assets/images/${elem.image}`)"
        alt="backgroung-image"
        :class="elem.class"
      />
    </div>

    <div class="center-j jumbo">
      <h1 class="font-celeste">Hello, Im Matin</h1>
      <h1>Artist Coaching And Mentoring Might Be for You.</h1>
      <button>Get started today</button>
    </div>

    <div class="right-j jumbo relative">
      <img
        class="absolute"
        v-for="(elem, index) in imageJumboRight"
        :key="index"
        imageJumboRight="elem"
        :src="require(`../../assets/images/${elem.image}`)"
        alt="backgroung-image"
        :class="elem.class"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboTron",
  props: {
    imageJumboLeft: Array,
    imageJumboRight: Array,
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  display: flex;
  justify-content: space-around;
  padding: 10rem 0;
  background-color: #fbf9f6;
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
    width: 200px;
  }
  .a-0 {
    z-index: -1;
  }
  .a-1 {
    z-index: 1;
  }
  .a-2 {
    z-index: 2;
  }
  .a-3 {
    z-index: 3;
  }
  .a-4 {
    z-index: 4;
  }
}
.center-j {
  text-align: center;
}
.jumbo{
  width: calc(100% / 3 - 1rem);
}
button {
  background-color: #ef6f31;
  border: none;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border-radius: 0.3rem;
  color: white;
}
</style>