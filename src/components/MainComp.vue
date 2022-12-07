<template>
  <main>
    <JumboTron />
    <ContComp1 />
    <CaroselComp :dataPhotos="photosArray" />
    <ContComp2 :dataCards="cardsArray"/>
    <ArticlesComp />
  </main>
</template>

<script>
import JumboTron from "./main_folder/JumboTron.vue";
import ContComp1 from "./main_folder/ContComp1.vue";
import CaroselComp from "./main_folder/CaroselComp.vue";
import ContComp2 from "./main_folder/ContComp2.vue";
import ArticlesComp from "./main_folder/ArticlesComp.vue";

export default {
  name: "MainComp",
  components: {
    JumboTron,
    ContComp1,
    CaroselComp,
    ContComp2,
    ArticlesComp,
  },
  props: {},
  data() {
    return {
      photosArray: [
        { 
          image: "artist-testimonial-avatar-01.jpg",
          titolo: "High level of efficiency and scientific teaching methods",
          paragrafo: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
          name: "Mina Hollace",
          work: "Freelancer",
        },
        { 
          image: "artist-testimonial-avatar-02.jpg",
          titolo: "High level of efficiency and scientific teaching methods",
          paragrafo: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.2",
          name: "Mina Hollace",
          work: "Freelancer",
        },
        { 
          image: "artist-testimonial-avatar-03.jpg",
          titolo: "High level of efficiency and scientific teaching methods",
          paragrafo: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.3",
          name: "Mina Hollace",
          work: "Freelancer",
        },
        { 
          image: "artist-testimonial-avatar-04.jpg",
          titolo: "High level of efficiency and scientific teaching methods",
          paragrafo: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.4",
          name: "Mina Hollace",
          work: "Freelancer",
        },
      ],
      cardsArray: [
        {
          image: "artist-course-01-480x480.jpg",
          price: "$18.00",
          name: "The Acrylic Painting Academy",
          lessons: "4 Lessons",
          students: "50 Students"
        },
        {
          image: "artist-course-02-480x480.jpg",
          price: "$21.00",
          name: "Drawing and Shading: Complete Course",
          lessons: "14 Lessons",
          students: "50 Students"
        },
        {
          image: "artist-course-03-480x480.jpg",
          price: "$19.00",
          name: "The Color Theory for Digital Artist",
          lessons: "7 Lessons",
          students: "50 Students"
        },
        {
          image: "artist-course-04-480x480.jpg",
          price: "$35.00",
          name: "Ultimate Guide to Digital Sketching fot Beginner",
          lessons: "14 Lessons",
          students: "50 Students"
        },
        {
          image: "artist-course-05-480x480.jpg",
          price: "$19.00",
          name: "Portait Drawing The Smart Way",
          lessons: "2 Lessons",
          students: "50 Students"
        },
        {
          image: "artist-course-06-480x480.jpg",
          price: "$19.00",
          name: "Mastering Watercolor Painting from Beginner",
          lessons: "9 Lessons",
          students: "50 Students"
        },
        {
          image: "artist-course-07-480x480.jpg",
          price: "$25.00",
          name: "The Art & Science of Drawing",
          lessons: "4 Lessons",
          students: "50 Students"
        },
        {
          image: "artist-course-08-480x480.jpg",
          price: "$22.00",
          name: "The Colored Pencil Drawing Course",
          lessons: "6 Lessons",
          students: "50 Students"
        },
      ]
    };
  },
};
</script>

<style lang="scss">
.font-celeste {
  font-family: "La Belle Aurore", cursive;
  font-size: 3rem;
  color: #69a0fd;
}
</style>