<template>
  <div>
    <div class="width-80 flex">
      <!-- ADRESS -->
      <div>
        <h3>Address</h3>
        <ul>
          <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
          <li>+1(305)547-9909(9am - 5pm EST, Monday - Friday)</li>
          <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
          <span
            class="socials"
            v-for="(elem, index) in dataSocials2"
            :key="index"
            :dataSocials2="elem"
            ><font-awesome-icon :icon="elem.image_logo"
          /></span>
        </ul>
      </div>

      <!-- EXPLORE -->
      <div>
        <h3>Explore</h3>
        <ul>
          <li
            v-for="(elem, index) in dataExplore"
            :key="index"
            :dataExplore="elem"
          >
            {{ elem.explore }}
          </li>
        </ul>
      </div>

      <!-- INFORMATION -->
      <div>
        <h3>Information</h3>
        <ul>
          <li v-for="(elem, index) in dataInfo" :key="index" :dataInfo="elem">
            {{ elem.information }}
          </li>
        </ul>
      </div>

      <!-- INSTAGRAM -->
      <div class="insta">
        <h3>Instagram <a href="https://www.instagram.com/">@maxcoach</a></h3>
        <img
          v-for="(elem, index) in dataInsta"
          :key="index"
          :dataInsta="elem"
          :src="require(`../../assets/images/${elem.photo}`)"
          alt="photo insta"
        />
      </div>
    </div>
    <p class="copyright">© 2020 Maxcoach. All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: "LinksComp",
  props: {
    dataSocials2: Array,
    dataExplore: Array,
    dataInfo: Array,
    dataInsta: Array,
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.width-80 {
  width: 80%;
  margin: 5rem auto 2rem;
  ul {
    line-height: 2.5rem;
    color: #797979;
  }
  li {
    list-style: none;
    font-size: 0.8rem;
  }
  .socials {
    padding: 0 0.5rem;
    font-size: 1.3rem;
    color: #bcbcbc;
  }
  a {
    color: red;
    text-decoration: none;
  }
  .insta img {
    width: 8rem;
    margin: 2rem 1rem 0 0;
  }
}

.copyright {
  color: #bcbcbc;
  text-align: center;
  margin-bottom: 1rem;
}
</style>