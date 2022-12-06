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
          <p class="color-orange">{{ elem.price }}</p>
          <h4>{{ elem.name }}</h4>
          <div class="container color-gray">
            <p><font-awesome-icon icon="fa-regular fa-file-lines" /> {{ elem.lessons }}</p>
            <p><font-awesome-icon icon="fa-regular fa-user" /> {{ elem.students }}</p>
          </div>
        </div>
      </div>
      <button class="orange-button">View all courses <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
    </div>

    <!--* ARTICLES AND TIPS -->
    <div>

    </div>

    <!--* EVENTS -->
    <div></div>
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
  .orange-button{
    font-size: 1.2rem;
    font-weight: bold;
    color: #EF6F31;
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
      padding: 0.8rem .5rem;
    }
    h4{
      width: 80%;
    }
    img {
      max-width: 100%;
    }
  }
}
.color-gray{
  color: gray;
  font-size: .9rem;
}
.color-orange{
  color: orange;
  font-weight: bold;
}
</style>