<template>
  <nav class="navbar_fix">
    <img src="../assets/images/dark-logo.png" alt="logo sito">
    <div>
      <ul>
        <li v-for="(elem, index) in dataNavBar" :key="index" :dataNavBar="(elem)">{{elem.name}}</li>
      </ul>
    </div>
    <div>Socials</div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      dataNavBar: Array,
    }
  }
</script>

<style lang="scss" scoped>
.navbar_fix{
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 200px;
  }
  ul{
    list-style: none;
    display: flex;
    li{
      padding: 0 1rem;
    }
  }
}

</style>