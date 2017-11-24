<template>
  <div>
    <!-- <app-header v-bind:PatientInfo="Name" v-bind:initActive="Active"  @menuClick="toMenu" @settingClick="Page = 2"></app-header> -->
    <div class="header">
      <image :src="Menu" class="menu" @click="toMenu" v-bind:class="[isActive ? 'white' : '']"></image>
      <text class="title">{{ Title }}</text>
      <div class="clickarea">
      <image :src="Switch" class="switch" @click="showMenu"></image>
      </div>
    </div>
    <menu v-if="Page == 0" @selectPage="toPage"></menu>
    <bed v-if="Page == 1" :Ward="Ward"></bed>
    <test v-if="Page == 2" title="Page02"></test>
    <test v-if="Page == 3" title="Page03"></test>
    <test v-if="Page == 4" title="Page04"></test>
    <test v-if="Page == 5" title="Page05"></test>
    <test v-if="Page == 6" title="Page06"></test>
    <test v-if="Page == 7" title="Page07"></test>
    <test v-if="Page == 8" title="Page08"></test>
    <test v-if="Page == 9" title="Page09"></test>
    <test v-if="Page == 10" title="Page10"></test>
    <test v-if="Page == 11" title="Page11"></test>
    <test v-if="Page == 12" title="Page12"></test>
    <div class="float" v-if="IsMenuShow">
      <text class="item" @click="switchWard('三病区')">三病区</text>
      <div class="line"></div>
      <text class="item" @click="switchWard('四病区')">四病区</text>
      <div class="line"></div>
      <text class="item" @click="switchWard('五病区')">五病区</text>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import Bed from './home/Bed.vue'
import Menu from './home/Menu.vue'
import Test from './home/Test.vue'

import ViewServer from '../ViewServer.js'

const storage = weex.requireModule('storage')

export default {
  data() {
    return {
      Menu: ViewServer + 'img/menu.png',
      Switch: ViewServer + 'img/switch.png',
      isActive: false,
      Title: '',
      TitleArr: ['请选择模块', '床位图', '确费补费', '模块一', '模块二', '模块三', '模块四', '模块五', '模块六', '模块七', '模块八', '模块九', '模块十'],
      Page: 1,
      old: 1,
      IsMenuShow: false,
      Ward: '三病区'
    }
  },
  mounted() {
    console.log('Render Home')
    this.getUserInfo()
    this.toPage(0)
  },
  methods: {
    switchWard(ward) {
      this.Ward = ward
      storage.setItem('CurWard', ward)
      this.IsMenuShow = false
    },
    showMenu() {
      this.IsMenuShow = !this.IsMenuShow
    },
    getUserInfo() {
      storage.getItem('UserInfo', event => {
        let Info = eval('(' + event.data + ')')
        console.log('Home-UserInfo:' + Info)
      })
    },
    toMenu() {
      console.log('toMenu')
      this.IsMenuShow = false
      this.isActive = !this.isActive
      if (this.isActive) {
        this.old = this.Page
        this.Page = 0
      } else {
        this.Page = this.old
      }
      this.showTitle()
    },
    toPage(i) {
      console.log('toPage')
      this.isActive = false
      this.Page = i + 1
      this.showTitle()
    },
    showTitle() {
      this.Title = this.TitleArr[this.Page]
    }
  },
  components: {
    AppHeader,
    Bed,
    Menu,
    Test
  }
}
</script>

<style scoped>
.button {
  font-size: 60px;
  width: 450px;
  text-align: center;
  margin-top: 30px;
  margin-left: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-style: solid;
  color: #666666;
  border-color: #DDDDDD;
  background-color: #F5F5F5
}

.btn-group {
  height: 1000px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
}

.row {
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
}

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
  font-size: 40px;
  line-height: 44px;
  color: #FFFFFF;
}
.clickarea{
  width:160px;
  height: 120px;
  padding-left: 40px;
}

.switch {
  width: 120px;
  height: 120px;
  padding: 40px;
}

.switch:active {
  width: 120px;
  height: 120px;
  padding: 40px;
  background-color: #58B7FF;
}

.menu {
  width: 120px;
  height: 120px;
  padding: 40px;
}

.white {
  background-color: #58B7FF;
}

.float {
  position: absolute;
  right: 10px;
  top: 100px;
  width: 200px;
  min-height: 200px;
  background-color: #475669;
  border-radius: 10px;
  padding-top: 10ox;
  padding-bottom: 10px;
  flex-direction: column;
}

.item {
  font-family: Verdana, Geneva, sans-serif;
  width: 200px;
  font-size: 32px;
  line-height: 44px;
  color: #FFFFFF;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}

.item-sel {
  background-color: #ABCDEF;
}

.line {
  background-color: #FFFFFF;
  height: 1px;
  width: 330px;
}
</style>