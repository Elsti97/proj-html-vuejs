<template>
  <div>
    <!--* CARD COACHING -->
    <div class="text-center width-80">
      <h1 class="font-celeste">Artist coaching</h1>
      <h1>Latest Online Courses</h1>
      <div class="container">
        <div
          class="card"
          v-for="(elem, index) in dataCards"
          :key="index"
          dataCards="elem"
        >
          <img
            :src="require(`../../assets/images/${elem.image}`)"
            alt="photo courses"
          />
          <div class="card-hover">
            <p class="color-orange">{{ elem.price }}</p>
            <h4>{{ elem.name }}</h4>
            <div class="container color-gray">
              <p>
                <font-awesome-icon icon="fa-regular fa-file-lines" />
                {{ elem.lessons }}
              </p>
              <p>
                <font-awesome-icon icon="fa-regular fa-user" />
                {{ elem.students }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="orange-button">
        View all courses <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>

    <!--* ARTICLES AND TIPS -->
    <div class="bg-celestino">
      <div class="text-center width-80">
        <h1 class="font-celeste">Articles and Tips</h1>
        <h1>Latest From The Blog</h1>
        <div class="flex-card">
          <div class="card-left">
            <img
              src="../../assets/images/artist-blog-03-480x356.jpeg"
              alt="photo blog left"
            />
            <div class="text-better">
              <p>Artist</p>
              <h3>Brush Strokes Enrgize Trees in Paintings</h3>
              <div class="m-1">
                <font-awesome-icon
                  icon="fa-regular fa-calendar"
                  class="mx-half"
                />
                <span>May 15, 2020</span>
                <font-awesome-icon icon="fa-solid fa-eye" class="mx-half" />
                <span>688 views</span>
              </div>
            </div>
          </div>
          <div class="card-center">
            <div class="relative">
              <img
                class="m-5 relative"
                src="../../assets/images/artist-blog-02-500x680.jpg"
                alt="photo blog cx"
              />
              <div class="absolute text-better">
                <h3>Artist</h3>
                <h1>Connection Between Self-Portaits and Identity</h1>
                <div class="m-1">
                  <font-awesome-icon
                    icon="fa-regular fa-calendar"
                    class="mx-half"
                  />
                  <span>May 15, 2020</span>
                  <font-awesome-icon icon="fa-solid fa-eye" class="mx-half" />
                  <span>397 views</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-right">
            <img
              src="../../assets/images/artist-blog-01-480x356.jpg"
              alt="photo blog cx"
            />
            <div class="text-better">
              <p>Artist</p>
              <h3>Pocket-Sized Notebooks Hold Miniature Paintings</h3>
              <div class="m-1">
                <font-awesome-icon
                  icon="fa-regular fa-calendar"
                  class="mx-half"
                />
                <span>May 15, 2020</span>
                <font-awesome-icon icon="fa-solid fa-eye" class="mx-half" />
                <span>603 views</span>
              </div>
            </div>
          </div>
        </div>
        <p>Get into details now? <a href="#" class="c-orange">View all posts <font-awesome-icon icon="fa-solid fa-arrow-right" /></a></p>
      </div>
    </div>

    <!--* EVENTS -->
    <div class="text-center width-80">
      <h1 class="font-celeste">Upcoming Events</h1>
      <h1>Let's Work Together</h1>
      <div>

        <!-- FIRST ROW -->
        <div class="row">
          <img src="../../assets/images/artist-event-04-250x300.jpg" alt="photo events">
          <div class="text-better">
            <p>NOV 22, 2020</p>
            <h3>Storytelling Workshop</h3>
            <p><font-awesome-icon icon="fa-solid fa-location-dot" /> Texas, US</p>
          </div>
          <img src="../../assets/images/artist-event-03-250x300.jpg" alt="photo events">
          <div class="text-better">
            <p>OCT 10, 2020</p>
            <h3>Painting Art Contest 2020</h3>
            <p><font-awesome-icon icon="fa-solid fa-location-dot" /> New York, US</p>
          </div>
        </div>
        <!-- SECOND ROW -->
        <div class="row">
          <div class="text-better">
            <p>NOV 23, 2020</p>
            <h3>International Art Fair 2020</h3>
            <p><font-awesome-icon icon="fa-solid fa-location-dot" /> Hamburg, Germany</p>
          </div>
          <img src="../../assets/images/artist-event-02-250x300.jpg" alt="photo events">
          <div class="text-better">
            <p>NOV 22, 2020</p>
            <h3>Street Performance: Call for Artist</h3>
            <p><font-awesome-icon icon="fa-solid fa-location-dot" /> Illinois, US</p>
          </div>
          <img src="../../assets/images/artist-event-01-250x300.jpg" alt="photo events">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContComp2",
  props: {
    dataCards: Array,
  },
};
</script>

<style lang="scss" scoped>
.width-80 {
  width: 80%;
  margin: 3rem auto;
  .orange-button {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ef6f31;
    background-color: lightgray;
    border: none;
    margin-top: 3rem;
    padding: 1rem 3rem;
    border-radius: 0.3rem;
  }
}
.text-center {
  text-align: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: calc(100% / 4 - 1rem);
    margin: 2rem 0.5rem;
    text-align: start;
    p,
    h4 {
      padding: 0.8rem 0.5rem;
    }
    h4 {
      width: 80%;
    }
    img {
      max-width: 100%;
    }
  }
}
.color-gray {
  color: gray;
  font-size: 0.9rem;
}
.color-orange {
  color: orange;
  font-weight: bold;
}
.bg-celestino {
  background-color: #f5f7fa;
  padding: 1rem 0;
}
.m-5 {
  margin: 5rem 0;
}
.flex-card {
  display: flex;
  justify-content: center;
  align-items: center;
  .card-left,
  .card-right {
    width: 40%;
    background-color: white;
    img {
      max-width: 100%;
    }
  }
  .card {
    display: flex;
    align-items: flex-start;
  }
}
.relative {
  position: relative;
  .absolute {
    position: absolute;
    color: white;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 2rem 10rem;
  }
}
.card-center {
  padding: 2rem;
}
.card-right{
  margin-bottom: 15rem;
}
.text-better {
  padding: 1rem;
  text-align: left;
  line-height: 2rem;
}
.mx-half {
  margin: 0 0.5rem;
}
.m-1{
  margin: 1rem 0;
}
.c-orange{
  color: orange;
  font-size: 1.2rem;
}
.row{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
}
.card-hover{
  transition: transform .3s ease-out;
  display: inline-block;
  
}
.card-hover:hover{
  border: 2px solid red;
  transform: translate(0, -2rem);
  background-color: white;
}
</style>