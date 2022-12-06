<template>
  <div class="jumbotron width-3">
    <div class="left-jumbo relative">
      <img
        v-for="(elem, index) in imageJumboLeft"
        :key="index"
        imageJumboLeft="elem"
        :src="require(`../../assets/images/${elem.image}`)"
        alt="backgroung-image"
        :class="elem.class"
      />
    </div>
    <div class="center-jumbo">
      <h1>Hello here</h1>
    </div>
    <div class="right-jumbo relative">
      <img
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
  height: 30rem;
  background-color: #FBF9F6;
  // background-color: black;
  .width-3{
    display: flex;
    justify-content: center;
    width: calc(100% / 3);
    h1{
      color: red;
    }
  }
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
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
</style>