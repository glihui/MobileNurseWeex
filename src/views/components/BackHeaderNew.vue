<template>
  <div class="header">
    <div class="imgset" @click="back">
    <image :src="Back" class="img"></image>
    </div>
    <div class="center" @click="handleTitle">
      <text class="title">{{ Title }}</text>
      <slot></slot>
    </div>
    <text class="title right" @click="handleRight"></text>
  </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
import ViewServer from '@/ViewServer.js'

export default {
  name: 'BackHeader',
  data() {
    return {
      Back: ViewServer + 'img/back.png'
    }
  },
  props: {
    Title: String
  },
  methods: {
    back() {
      navigator.pop({
        animated: 'true'
      }, event => {
        console.log(event)
      })
    },
    handleRight (event) {
      this.$emit('clickright', event)
    },
    handleTitle (event) {
      this.$emit('clicktitle', event)
    }
  }
}
</script>


<style scoped>
.header {
  position: relative;
  height: 120px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #DDDDDD;
  background-color: #287098;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.title {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 40px;
  line-height: 44px;
  color: #FFFFFF;
  min-width: 200px;
}

.left {
  padding-left: 15px;
  text-align: left;
  width:100px;
}

.center {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 510px;
}

.right {
  padding-right: 15px;
  text-align: right;
  width:100px;
}

.img {
  width: 30px;
  height: 48px;
}

.imgset {
  width: 120px;
  height: 120px;
  padding: 40px;
}

.imgset:active {
  width: 120px;
  height: 120px;
  background-color: #58B7FF;
}
</style>