<template>
  <div class="header">
    <image :src="Menu" class="menu" @click="clickMenu" v-bind:class="[isActive ? active : '']"></image>
    <text class="title">{{ PatientInfo }}</text>
    <image :src="Setting" class="setting" @click="clickSetting"></image>
  </div>
</template>

<script>
var navigator = weex.requireModule('navigator')

import ViewServer from '../../ViewServer.js'

export default {
  name: 'AppHeader',
  data() {
    return {
      Menu: ViewServer + 'img/menu.png',
      Setting: ViewServer + 'img/setting.png',
      isActive: false,
      active: 'white'
    }
  },
  props: {
    PatientInfo: String,
    initActive: Boolean
  },
  watch: {
    PatientInfo(val, old) {
      console.log('PatientInfo = ' + val)
    },
    initActive (val, old) {
      console.log('initActive = ' + val)
      this.isActive = val
    }
  },
  methods: {
    clickMenu(evt) {
      this.isActive = !this.isActive
      this.$emit('menuClick', this.isActive)
    },
    clickSetting(evt) {
      this.$emit('settingClick', evt)
    },
    back() {
      navigator.pop({
        animated: 'true'
      }, event => {
        console.log(event)
      })
    }
  }
}
</script>


<style scoped>
.header {
  position: relative;
  height: 120px;
  margin-bottom: 3px;
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
  font-size: 32px;
  line-height: 44px;
  color: #FFFFFF;
}

.setting {
  width: 100px;
  height: 100px;
  padding: 10px;
}

.menu {
  width: 100px;
  height: 100px;
  padding: 10px;
}

.white {
  background-color: #58B7FF;
}
</style>
