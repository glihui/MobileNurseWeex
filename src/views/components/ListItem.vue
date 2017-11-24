<template>
  <div class="wrap">
    <div class="item" @click="handleClick">
      <text class="text">{{ title }}</text>
      <div class="right">
        <text class="value">{{ value }}</text>
        <text v-if="isLink">&rsaquo;</text>
      </div>
      <!-- <image class="img" :src="right"></image> -->
    </div>
    <div class="line">
    </div>
  </div>
</template>

<script>
// import ViewServer from '../../view-server.js'

export default {
  name: 'ListItem',
  data() {
    return {
      // right: ViewServer + 'img/right.png'
    }
  },
  props: {
    title: String,
    value: String,
    isLink: Boolean
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
.wrap {
  flex-direction: column;
  align-items: center;
}

.line {
  width: 730px;
  border-style: solid;
  border-top-width: 1px;
}

.item {
  justify-content: space-between;
  flex-direction: row;
  background-color: #FFFFFF;
  width: 750px;
  padding: 20;
}

.item:active {
  justify-content: space-between;
  flex-direction: row;
  background-color: #C0CCDA;
  padding: 20;
}

.img {
  width: 50px;
  height: 50px;
}

.text {
  width: 460;
}

.right {
  width: 240;
  flex-direction: row;
  justify-content: flex-end;
}

.value {
  color: #8492A6;
  margin-right: 5px;
}
</style>
