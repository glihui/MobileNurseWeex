<template>
  <scroller>
    <evaluation-item v-for="(item, index) in List" :colorval="isChange(index)" :key="index" :Time="formatDate(item.CollectionDate)" :Name="item.EmployeeName" @click="toDetail(item.AssessID)" @longclick="deleteItem(item.AssessID)"></evaluation-item>
    <div class="add" @click="toDetail('add')">
      <text>+</text>
    </div>
  </scroller>
</template>

<script>
import EvaluationItem from '../components/EvaluationItem.vue'

const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const globalEvent = weex.requireModule('globalEvent')

import StorageUtil from '@/utils/StorageUtil.js'
import BackServer from '@/BackServer.js'
import ViewServer from '@/ViewServer.js'

export default {
  name: 'GADList',
  data() {
    return {
      List: []
    }
  },
  mounted() {
    console.log('render gadList')
    this.loadData()
    this.addListener()
  },
  methods: {
    loadData() {
      storage.getItem('PatientInfo', event => {
        let Info = JSON.parse(event.data)
        console.log(event.data)
        const url = BackServer.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?HospitalizedHisID=' + Info.ZYH + '&AsstSort=3'
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
    deleteItem(AssessID) {
      StorageUtil.getUserInfo(json => {
        console.log(json)
        const url = BackServer.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?AssessID=' + AssessID + '&UserID=' + json.UserID + '&Status=100'
        modal.confirm({
          message: '是否要删除该条数据',
          okTitle: '确认',
          cancelTitle: '取消',
          duration: 0.3
        }, value => {
          if (value === '确认') {
            stream.fetch({
              method: 'DELETE',
              type: 'json',
              url: url
            }, res => {
              console.log(res)
              modal.alert({ message: '删除成功！' })
              this.loadData()
            })
          }
        })
      })
    },
    toDetail(AssessID) {
      storage.setItem('AssessID', AssessID)
      navigator.push({
        url: ViewServer + 'GAD.weex.js',
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
    },
    addListener() {
      globalEvent.addEventListener('onResume', e => {
        storage.getItem('PopCallback', event => {
          if (event.data === 'update gad list') {
            this.loadData()
            storage.setItem('PopCallback', '')
          }
        })
      })
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
  background-color: #d4d4d4;
  padding: 20;
}

.add:active {
  justify-content: center;
  flex-direction: row;
  background-color: #AAAAAA;
  padding: 20;
}
</style>
