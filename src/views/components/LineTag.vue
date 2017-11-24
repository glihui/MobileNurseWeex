<template>
  <div class="wrapper">
    <div class="circle" v-bind:style="{ 'background-color': color }">
      <text class="text">{{ text }}</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineTag',
  props: {
    color: String,
    text: String,
    txtdata: String
  }
}
</script>

<style scoped>
.wrapper {
  flex-direction: column;
  width: 100;
  height: 500;
}

.circle {
  width: 80;
  height: 80;
  border-radius: 40;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.text {
  text-align: center;
  width: 70;
  height: 30;
  color: #ffffff;
  font-size: 22;
}
</style>
