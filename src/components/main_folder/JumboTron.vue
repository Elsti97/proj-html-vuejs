<template>
  <div class="jumbotron">
    <div class="left-jumbo"></div>
    <div class="center-jumbo"></div>
    <div class="right-jumbo"></div>

  </div>
</template>

<script>
export default {
  name: "JumboTron",
};
</script>

<style lang="scss" scoped>
.jumbotron {
  // background-color: #FBF9F6;
  background-color: black;
  position: relative;
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