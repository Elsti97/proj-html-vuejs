<template>
  <div>
    <!--* COACHING -->
    <div>
      <!-- TITOLO -->
      <div class="flex-center">
        <h1 class="font-celeste">Artist coaching</h1>
        <h2>I understand what it takes to create. I can help you with</h2>
      </div>
      <!-- 4 CARDS -->
      <div class="container">
        <div class="card">
          <img src="../../assets/images/artist-box-image-01.png" alt="image box artist 1" />
          <h3>Online Courses</h3>
          <p>Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
        </div>
        <div class="card">
          <img src="../../assets/images/artist-box-image-02.png" alt="image box artist 2" />
          <h3>One to One</h3>
          <p>Getting the necessary clarity about the current state to help you impove your ability.</p>
        </div>
        <div class="card">
          <img src="../../assets/images/artist-box-image-03.png" alt="image box artist 3" />
          <h3>Anywhere</h3>
          <p>Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
        </div>
        <div class="card">
          <img src="../../assets/images/artist-box-image-04.png" alt="image box artist 4" />
          <h3>On Time</h3>
          <p>Punctuality is our top priority because it's an essential criteria to assess a program quality.</p>
        </div>
      </div>
    </div>
    <!-- GARRIX CIT -->
    <div></div>
    <!-- YT VIDEO -->
    <div></div>
  </div>
</template>

<script>
export default {
  name: "ContComp1",
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  flex-direction: column;
}
.container {
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: auto;
  .card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1rem;
    h3{
      margin: 1rem;
    }
    img{
      width: 8rem;
    }
  }
}
</style>