<template>
  <div class="jumbotron width-3">
    <div class="left-j jumbo">
    </div>

    <div class="center-j jumbo">
      <h1 class="font-celeste">Hello, Im Matin</h1>
      <h1>Artist Coaching And Mentoring Might Be for You.</h1>
      <button>Get started today</button>
    </div>

    <div class="right-j jumbo">
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboTron",
};
</script>

<style lang="scss" scoped>
.jumbotron {
  display: flex;
  justify-content: space-around;
  // align-items: center;
  padding: 10rem 0;
  // height: 30rem;
  background-color: #fbf9f6;
}
.jumbo{
  width: calc(100% / 3 - 1rem);
}
.center-j {
  text-align: center;
  // padding: 10rem 0;
}
button {
  background-color: #ef6f31;
  border: none;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border-radius: 0.3rem;
  color: white;
}
.left-j {
  background-image:
    url("../../assets/images/artist-hero-image-01.jpg"),
    url("../../assets/images/artist-hero-image-02.jpg"),
    url("../../assets/images/artist-shape-02.png"),
    url("../../assets/images/artist-shape-03.png"),
    url("../../assets/images/artist-hero-image-03.png");
  background-repeat: no-repeat;
  background-position: bottom left, top right, top, left center, bottom right;
  background-size: contain;
}
.right-j {
  background-image: 
    url("../../assets/images/artist-hero-image-04.jpg"),
    url("../../assets/images/artist-shape-01.png"),
    url("../../assets/images/artist-shape-04.png"),
    url("../../assets/images/artist-shape-05.png");
    
  background-repeat: no-repeat;
  background-position: bottom left, top,top right, bottom right;
  background-size: contain;
}
</style>