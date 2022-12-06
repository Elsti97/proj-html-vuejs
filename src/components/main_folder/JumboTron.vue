<template>
  <div class="jumbotron width-3 relative">
    <div class="left-j jumbo absolute">
      <img
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
    <div class="right-j jumbo absolute">
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  background-color: #fbf9f6;
  // background-color: black;
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
    width: 100px;
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
.jumbo {
  display: flex;
}
.center-j {
  // display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 10rem 0;
  button{
    background-color: #EF6F31;
    border: none;
    margin-top: 3rem;
    padding: 1rem 3rem;
    border-radius: .3rem;
    color: white;
  }

}
// .left-j, .right-j{
//   display: none;
// }
</style>