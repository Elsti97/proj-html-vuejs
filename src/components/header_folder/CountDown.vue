<template>
  <div class="bg-silver">
    <div class="width-50">
      <div class="c-gray">Stars TOMORROW! Our biggest event of the year...</div>
      <div class="count">
        <font-awesome-icon icon="fa-regular fa-clock" />
        <span class="strong">00:00:00:00</span>
      </div>
      <div>
        <button>Get ticket</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDown",
};
</script>

<style lang="scss" scoped>
.bg-silver {
  background-color: #f4f0ef;
  padding: 0.5rem 0;
}
.width-50 {
  width: 50%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .c-gray {
    color: gray;
  }

  .count {
    margin: 0 1rem;
    .strong {
      font-weight: bold;
      padding-left: 1rem;
    }
  }

  button {
    background-color: #ef6f31;
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: white;
  }
}
button:hover{
  background-color: blue;
  color: white;
}
</style>