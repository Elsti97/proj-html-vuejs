<template>
  <footer>
    <NewsLetter />
    <LinksComp :dataSocials2="dataSocials" :dataExplore="exploreArray" :dataInfo="infoArray" :dataInsta="instaArray"/>
  </footer>
</template>

<script>
import NewsLetter from './footer_folder/NewsLetter.vue'
import LinksComp from './footer_folder/LinksComp.vue'

export default {
  name: "FooterComp",
  components:{
    NewsLetter,
    LinksComp
  },
  props: {
    dataSocials: Array,
  },
  data(){
    return{
      exploreArray: [
        {
          explore: 'Start here',
        },
        {
          explore: 'Success story',
        },
        {
          explore: 'Blog',
        },
        {
          explore: 'Courses',
        },
        {
          explore: 'Contact us',
        },
      ],
      infoArray: [
        {
          information: 'Membership'
        },
        {
          information: 'Purchase guise'
        },
        {
          information: 'Privacy policy'
        },
        {
          information: 'Terms of services'
        },
      ],
      instaArray: [
        {
          photo: '120084500_197897808368764_8114555493043279565_n.jpg',
          url: 'https://www.google.com/'
        },
        {
          photo: '120012142_177596140500760_8623485824101406058_n.jpg',
          url: 'https://www.instagram.com/'
        },
        {
          photo: '120099363_364334431619755_7198812647386067017_n.jpg',
          url: 'https://www.instagram.com/'
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
</style>