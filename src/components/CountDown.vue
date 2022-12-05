<template>
  <div class="bg-silver">
    <div class="width-50">
      <div>Stars TOMORROW! Our biggest event of the year...</div>
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
    name: "CountDown"
  }
</script>

<style lang="scss" scoped>
.bg-silver{
  background-color: #f4f0ef;
  padding: .5rem 0;
}
.width-50{
  width: 50%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .count{
    margin: 0 1rem;
    .strong{
      font-weight: bold;
      padding-left: 1rem;
    }
  }

  button{
    background-color: #EF6F31;
    border: none;
    padding: .5rem;
    border-radius: .5rem;
    color: white;
  }
}
</style>