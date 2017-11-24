<template>
  <div @click="handleClick" class="wrap">
    <image :src="ImgUrl" class="icon"></image>
    <text class="content">{{Content}}</text>
  </div>
</template>

<script>
export default {
  name: 'ImgButton',
  props: {
    ImgUrl: String,
    Content: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style scoped>
.icon {
  height: 144px;
  width: 144px;
}

.wrap {
  padding-right:30px;
  padding-left: 25px;
  padding-bottom: 25px;
  align-items: center;
  flex-direction: column;
}

.content {
  margin-top: 10px;
  font-size: 25px;
}
</style>

