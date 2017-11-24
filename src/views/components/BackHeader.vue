<template>
  <div class="header">
    <div class="imgset" @click="back">
      <image :src="Back" class="img"></image>
    </div>
    <div class="container">
      <text class="title">{{ Content }}</text>
      <text class="title">{{ PatientInfo }}</text>
    </div>
    <text class="title right" @click="handleSave">{{ RightContent }}</text>
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
    RightContent: String,
    PatientInfo: String,
    Content: String
  },
  methods: {
    back() {
      navigator.pop({
        animated: 'true'
      }, event => {
        console.log(event)
      })
    },
    handleSave(event) {
      this.$emit('save', event)
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
  text-align: center;
}

.center {
  width: 350px;
}

.right {
  padding-top: 38px;
  text-align: center;
  width: 120px;
  height: 120px;
}

.right:active {
  padding-top: 38px;
  text-align: center;
  width: 120px;
  height: 120px;
  background-color: #58B7FF;
}

.container {
  justify-content: center;
  width: 450px;
  height: 120px;
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