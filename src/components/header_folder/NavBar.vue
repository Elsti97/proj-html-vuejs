<template>
  <nav class="navbar_fix">
    <img src="../../assets/images/dark-logo.png" alt="logo sito" />
    <div>
      <ul>
        <li v-for="(elem, index) in dataNavBar" :key="index" :dataNavBar="elem">
          {{ elem.name }} <font-awesome-icon icon="fa-solid fa-angle-down" />
        </li>
      </ul>
    </div>
    <div>
      <a
        v-for="(elem, index) in dataSocials2"
        :key="index"
        :dataSocials2="elem"
        :href="elem.url"
      >
        <span class="socials"
          ><font-awesome-icon :icon="elem.image_logo"
        /></span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    dataNavBar: Array,
    dataSocials2: Array,
  },
};
</script>

<style lang="scss" scoped>
.navbar_fix {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  img {
    width: 200px;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0 1rem;
    }
  }
  .socials {
    padding: 0 0.5rem;
    color: #797979;
  }
}
</style>