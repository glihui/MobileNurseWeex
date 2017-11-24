<template>
  <div>
    <div class="btn-group">
      <div class="row" v-for="m in 3" :key="m">
        <icon-button :ImgUrl="getImg(m, n).ImgUrl" :Content="getImg(m, n).Content" v-for="n in 3" :key="n" @click="selectPage(m, n)"></icon-button>
      </div>
    </div>
  </div>
</template>
<script>

import IconButton from '../components/IconButton.vue'
import ViewServer from '@/ViewServer.js'

// const navigator = weex.requireModule('navigator')
// const storage = weex.requireModule('storage')

export default {
  name: 'Menu',
  data() {
    return {
      ImgArr: [
        { ImgUrl: ViewServer + 'img/icon01.png', Content: '康复护理' },
        { ImgUrl: ViewServer + 'img/icon02.png', Content: '康复计划' },
        { ImgUrl: ViewServer + 'img/icon03.png', Content: '康复随访' },
        { ImgUrl: ViewServer + 'img/icon04.png', Content: '监测统计' },
        { ImgUrl: ViewServer + 'img/icon05.png', Content: '异常处理' },
        { ImgUrl: ViewServer + 'img/icon06.png', Content: '重点关注病人' },
        { ImgUrl: ViewServer + 'img/icon07.png', Content: '出院信息' },
        { ImgUrl: ViewServer + 'img/icon08.png', Content: '智能输液' },
        { ImgUrl: ViewServer + 'img/icon09.png', Content: '输液记录' }
      ]
    }
  },
  methods: {
    getImg(m, n) {
      let i = (m - 1) * 3 + n - 1
      return this.ImgArr[i]
    },
    selectPage (m, n) {
      let i = (m - 1) * 3 + n - 1
      this.$emit('selectPage', i)
    }
  },
  components: {
    IconButton
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
  background-color: #006699;
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
</style>
