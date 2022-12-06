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
          <img
            class="box-img"
            src="../../assets/images/artist-box-image-01.png"
            alt="image box artist 1"
          />
          <h3>Online Courses</h3>
          <p>
            Online art coaching now offers you a very powerful way to redesign
            your artist mind.
          </p>
        </div>
        <div class="card">
          <img
            class="box-img"
            src="../../assets/images/artist-box-image-02.png"
            alt="image box artist 2"
          />
          <h3>One to One</h3>
          <p>
            Getting the necessary clarity about the current state to help you
            impove your ability.
          </p>
        </div>
        <div class="card">
          <img
            class="box-img"
            src="../../assets/images/artist-box-image-03.png"
            alt="image box artist 3"
          />
          <h3>Anywhere</h3>
          <p>
            Access to valuable and portable program which allow you to setup and
            live anywhere you want.
          </p>
        </div>
        <div class="card">
          <img
            class="box-img"
            src="../../assets/images/artist-box-image-04.png"
            alt="image box artist 4"
          />
          <h3>On Time</h3>
          <p>
            Punctuality is our top priority because it's an essential criteria
            to assess a program quality.
          </p>
        </div>
      </div>
    </div>
    <!--* GARRIX CIT -->
    <div class="container-cit">
      <!-- LEFT SIDE -->
      <div class="width-40">
        <div class="card">
          <img
            class="quote-img"
            src="../../assets/images/artist-quote-icon.png"
            alt="image quote"
          />
          <h1>
            I coach and mentor visual artists, like you, to Create Like You Main
            It
          </h1>
          <h3 class="font-celeste">Martin Garrix</h3>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="width-60">
        <p>
          As a coach and mentor, my ultimate goal is to motivate visual artists
          toward inspired action. I help you get you back on track to being the
          productive, creative, meaningful and authentic artist you truly want
          to be.I support artists in crafting and living a creative life as well
          as feeling good about themselves and their art.
        </p>
        <p>
          As an artist and an educator for nearly 30 years, I understand what it
          takes to create.
        </p>
        <button><h3>Get started today</h3></button>
      </div>
    </div>
    <!--* YT VIDEO -->
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
  justify-content: space-between;
  width: 60%;
  margin: 2rem auto;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem;
  h3 {
    margin: 1rem;
  }
  .box-img {
    width: 8rem;
  }
  .quote-img {
    width: 2.5rem;
    margin-bottom: 1rem;
  }
}

button {
  background-color: #f4f0ef;
  color: #ef6f31;
  border: none;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 0.3rem;
}
.container-cit{
  display: flex;
  width: 60%;
  margin: 5rem auto;
  .width-40{
    width: 40%;
  }
  .width-60{
    width: 60%;
    padding-left: 4rem;
    p {
      margin: 1rem 0;
    }
  }
}
p{
  color: #797979;
}
</style>