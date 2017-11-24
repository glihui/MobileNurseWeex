<template>
  <div class="wrap">
    <back-header-new :Title="Title" @clicktitle="showMenu" @clickright="clickRight">
      <!-- <text class="down">V</text> -->
      <div class="imagedown">
        <image :src="Down" class="down"></image>
      </div>
    </back-header-new>
    <slider class="slider" interval="4500" @change="onchange" :index="index">
      <estimate-list></estimate-list>
      <level-list></level-list>
      <phq-list></phq-list>
      <gad-list></gad-list>
    </slider>
    <div class="float" v-if="IsMenuShow">
      <text class="item" @click="switchTo(0)">入院护理评估</text>
      <div class="line"></div>
      <text class="item" @click="switchTo(1)">护理分级评估</text>
      <div class="line"></div>
      <text class="item" @click="switchTo(2)">PHQ-9抑郁量评估</text>
      <div class="line"></div>
      <text class="item" @click="switchTo(3)">广泛性焦虑量表(GAD-7)</text>
      <div class="line"></div>
      <text class="item">膀胱评估</text>
      <div class="line"></div>
      <text class="item">肠道评估</text>
      <div class="line"></div>
      <text class="item">营养评估</text>
      <div class="line"></div>
      <text class="item">危重症患者风险评估</text>
    </div>
  </div>
</template>

<script>
import BackHeader from './components/BackHeader.vue'
import BackHeaderNew from './components/BackHeaderNew.vue'
import LevelList from './tables/LevelList.vue'
import EstimateList from './tables/EstimateList.vue'
import PhqList from './tables/PHQList.vue'
import gadList from './tables/GADList.vue'

import ViewServer from '@/ViewServer.js'

export default {
  name: 'EvaluationList',
  data() {
    return {
      Title: '入院护理评估',
      ItemList: [
        '入院护理评估',
        '护理分级评估',
        'PHQ-9抑郁量评估',
        '广泛性焦虑量表(GAD-7)'
      ],
      index: 0,
      IsMenuShow: false,
      Down: ViewServer + 'img/down.png'
    }
  },
  methods: {
    onchange(event) {
      this.IsMenuShow = false
      this.Title = this.ItemList[event.index]
    },
    showMenu() {
      console.log('showmenu')
      this.IsMenuShow = !this.IsMenuShow
    },
    clickRight() {
      console.log('right')
    },
    switchTo(i) {
      this.index = i
      this.IsMenuShow = false
    }
  },
  components: {
    BackHeader,
    LevelList,
    EstimateList,
    PhqList,
    BackHeaderNew,
    gadList
  }
}
</script>

<style scoped>
.slider {
  background-color: #E5E9F2;
  width: 750px;
  height: 1270px;
}

.down {
  height: 19px;
  width: 21px;
}

.item {
  font-family: Verdana, Geneva, sans-serif;
  width: 310px;
  font-size: 32px;
  line-height: 44px;
  color: #FFFFFF;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}

.sel {
  background-color: #8492A6;
}

.line {
  background-color: #FFFFFF;
  height: 1px;
  width: 330px;
}

.float {
  position: absolute;
  left: 200px;
  top: 100px;
  width: 350px;
  min-height: 250px;
  background-color: #475669;
  border-radius: 10px;
  padding: 10px;
  flex-direction: column;
}
.imagedown {
  padding-left:10px;
  padding-top:4px;
}
</style>