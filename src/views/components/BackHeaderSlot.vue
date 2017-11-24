<template>
  <div class="header">
    <div class="imgset" @click="back">
      <image :src="Back" class="img"></image>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right lr">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
// 返回标题栏重写方案
// 除了返回功能，全部改为slot。定制化更强。
// 参考 https://cn.vuejs.org/v2/guide/components.html#具名-Slot
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
  background-color:#287098;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.title {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 32px;
  line-height: 44px;
  color: #FFFFFF;
  text-align: center;
}

.center {
  justify-content: center;
  flex-direction: row;
  width: 510px;
}

.lr {
  justify-content: center;
  flex-direction: row;
  width: 120px;
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
