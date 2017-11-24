<template>
  <div @click="handleClick" class="wrap">
    <image :src="ImgUrl" class="icon"></image>
    <text class="content">{{Content}}</text>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
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
      height: 200px;
      width: 200px;
  }

  .wrap {
    margin:10px;
    align-items: center;
    flex-direction: column;
  }

  .content {
    margin-top: 10px;
    font-size: 40px;
  }
</style>
