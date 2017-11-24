<template>
  <scroller>
    <evaluation-item v-for="(item, index) in List" :colorval="isChange(index)" :key="index" :Time="formatDate(item.CollectionDate)" :Name="item.EmployeeName" @click="toDetail(item.AdmissionID)"></evaluation-item>
    <div class="add" @click="toDetail('add')">
      <text>+</text>
    </div>
  </scroller>
</template>

<script>
import EvaluationItem from '../components/EvaluationItem.vue'

const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')

import BackServer from '../../BackServer.js'
import ViewServer from '../../ViewServer.js'

export default {
  name: 'EstimateList',
  data() {
    return {
      List: []
    }
  },
  mounted() {
    console.log('render LevelList')
    this.loadData()
  },
  methods: {
    loadData() {
      storage.getItem('PatientInfo', event => {
        let Info = JSON.parse(event.data)
        console.log(event.data)
        let url = BackServer.kf + 'api/v1/Hospitalized/NursingAssessment/NursAsstAdmission?HospitalizedHisID=' + Info.ZYH
        console.log(url)
        stream.fetch({
          method: 'GET',
          type: 'json',
          url: url
        }, res => {
          let json = eval('(' + res.data + ')')
          this.List = json
        })
      })
    },
    toDetail(AssessID) {
      storage.setItem('AssessID', AssessID)
      navigator.push({
        url: ViewServer + 'Estimate.weex.js',
        animated: 'true'
      }, event => {
        console.log('successful entry')
      })
    },
    formatDate(date) {
      if (date === null || date === '' || date === 'NaN-aN-aN aN:aN') {
        return ''
      }
      let arr = date.split('T')
      return arr[0]
    },
    isChange(index) {
      if (index % 2 === 0) {
        return '#f2f2f2'
      } else {
        return '#FFFFFF'
      }
    }
  },
  components: {
    EvaluationItem
  }
}
</script>

<style scoped>
.add {
  justify-content: center;
  flex-direction: row;
  background-color: #D4D4D4;
  padding: 20;
}

.add:active {
  justify-content: center;
  flex-direction: row;
  background-color: #AAAAAA;
  padding: 20;
}
</style>
