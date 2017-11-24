<template>
  <div class="wrapper">
    <div class="item">
      <div class="imgval">
        <image class="ImgBackground" :src="ImgBackground"></image>
      </div>
      <div class="tags">
        <div class="sitea">
          <line-tag text="入院" color="#FE0002"></line-tag>
        </div>
        <text class="txtdata f">{{ StepA }}</text>
        <div class="siteb">
          <line-tag text="初期" color="#EA6101"></line-tag>
        </div>
        <text class="txtdata a">{{ StepB }}</text>
        <div class="sitec">
          <line-tag text="中期" color="#B7AB00"></line-tag>
        </div>
        <text class="txtdata b">{{ StepC }}</text>
        <div class="sited">
          <line-tag text="末期" color="#22AD36"></line-tag>
        </div>
        <text class="txtdata c">{{ StepD }}</text>
        <div class="sitef">
          <line-tag text="出院" color="#13B7B0"></line-tag>
        </div>
        <text class="txtdata d">{{ StepE }}</text>
      </div>
    </div>
  </div>
</template>

<script>
import LineTag from 'views/components/LineTag.vue'
import LineProgress from 'views/components/LineProgress.vue'
import ViewServer from '@/ViewServer.js'

export default {
  name: 'TimeLine',
  data() {
    return {
      ImgBackground: ViewServer + 'img/zqbg.png'
    }
  },
  props: {
    Circle: String,
    StepA: String,
    StepB: String,
    StepC: String,
    StepD: String,
    StepE: String
  },
  components: {
    LineTag,
    LineProgress
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 750;
  height: 500;
  position: relative;
  background-color:#f2f2f2;
}

.tags {
  width: 550;
  flex-direction: column;
  position: absolute;
  left: 50px;
  top: 10px;
}

.item {
  width: 650;
  margin-left: 50;
  margin-right: 50;
  margin-bottom: 10;
  margin-top: 10;
}

.sitec {
  position: absolute;
  top: 15px;
  left: 235px;
}

.txtdata {
  position: absolute;
  left: 210px;
  top: 110px;
  font-size: 24px;
  font-weight: 700px;
}

.a {
  position: absolute;
  left: 70px;
  top: 230px;
}

.siteb {
  position: absolute;
  left: 100px;
  top: 140px;
}

.sited {
  position: absolute;
  left: 360px;
  top: 140px;
}

.b {
  position: absolute;
  left: 360px;
  top: 230px;
}

.sitea {
  position: absolute;
  left: 140px;
  top: 325px;
}

.f {
  position: absolute;
  left: 120px;
  top: 415px;
}

.sitef {
  position: relative;
  left: 335px;
  top: 325px;
}

.d {
  position: absolute;
  left: 320px;
  top: 415px;
}

.set {
  margin-bottom: 70px;
}

.ImgBackground {
  width: 650;
  height: 480;
}
</style>
