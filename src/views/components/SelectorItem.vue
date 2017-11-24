<template>
  <div class="wrap">
    <div class="item" @click="handleClick">
      <text class="check">{{ isChecked?'√':'' }}</text>
      <text class="value">{{ value }}</text>
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
    value: String,
    isChecked: Boolean
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
  justify-content: left;
  flex-direction: row;
  background-color: #FFFFFF;
  width: 750px;
  padding: 20;
}

.item:active {
  justify-content: left;
  flex-direction: row;
  background-color: #C0CCDA;
  padding: 20;
}

.img {
  width: 50px;
  height: 50px;
}

.check {
  color: #13CE66;
  margin-right: 6px;
  width: 30px;
}

</style>
