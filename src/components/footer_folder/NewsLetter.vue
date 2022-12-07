<template>
  <div class="bg-purple">
    <div class="width-60 flex">
      <div>
        <h2>Newsletter to get in touch</h2>
      </div>
      <div class="width-50">
        <!-- <label for="email">Enter your email:</label>s -->
        <input class="fs-2" type="email" placeholder="Your e-mail" id="email" name="email" />
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="fs-2" />
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsLetter",
};
</script>

<style lang="scss" scoped>
.width-60 {
  width: 60%;
  margin: auto;
}
.bg-purple {
  background-color: #244186;
  color: white;
}
.flex{
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
input{
  background-color: #244186;
  border: none;
  border-bottom: 1px solid white;
  width: 30rem;
  margin-right: 1rem;
}
::placeholder, textarea:focus, input:focus{
  color: white;
}
.fs-2{
  font-size: 1.5rem;
}
</style>