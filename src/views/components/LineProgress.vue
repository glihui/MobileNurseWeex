<template>
  <div class="wrapper">
    <div class="progress" v-bind:style="{ 'background-color': color }">
      <text class="txtcolor">{{ level }}</text>
      <text class="text">{{ text }}</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineProgress',
  props: {
    color: String,
    level: String,
    text: String
  }
}
</script>

<style scoped>
  .wrapper {
    width: 650;
    height: 60;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .progress {
    width: 650;
    height: 60;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10;
  }

  .text {
    color: #ffffff;
    font-size: 24px;
    font-weight: 200px;
    width: 135;
  }
 .txtcolor{
   color:#ffffff;
 }
</style>
