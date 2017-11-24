<template>
  <div>
    <back-header PatientInfo="护理分级评定表" RightContent="保存" @save="commitData"></back-header>
    <scroller class="scroller">
      <list-item title="评估时间" :value="formatDate(DataObj.CollectionDate)" @click="pickDate" is-link></list-item>
      <list-item title="1.进食" :value="DataObj.Assessment1==-1?'请选择':DataObj.Assessment1" @click="toEdit(2, 'Assessment1', DataObj.Assessment1, '-1,0,5,10', '请选择,0,5,10')" is-link></list-item>
      <list-item title="2.洗澡" :value="DataObj.Assessment2==-1?'请选择':DataObj.Assessment2" @click="toEdit(2, 'Assessment2', DataObj.Assessment2, '-1,0,5', '请选择,0,5')" is-link></list-item>
      <list-item title="3.修饰" :value="DataObj.Assessment3==-1?'请选择':DataObj.Assessment3" @click="toEdit(2, 'Assessment3', DataObj.Assessment3, '-1,0,5', '请选择,0,5')" is-link></list-item>
      <list-item title="4.穿衣" :value="DataObj.Assessment4==-1?'请选择':DataObj.Assessment4" @click="toEdit(2, 'Assessment4', DataObj.Assessment4, '-1,0,5,10', '请选择,0,5,10')" is-link></list-item>
      <list-item title="5.控制大便" :value="DataObj.Assessment5==-1?'请选择':DataObj.Assessment5" @click="toEdit(2, 'Assessment5', DataObj.Assessment5, '-1,0,5,10', '请选择,0,5,10')" is-link></list-item>
      <list-item title="6.控制小便" :value="DataObj.Assessment6==-1?'请选择':DataObj.Assessment6" @click="toEdit(2, 'Assessment6', DataObj.Assessment6, '-1,0,5,10', '请选择,0,5,10')" is-link></list-item>
      <list-item title="7.如厕" :value="DataObj.Assessment7==-1?'请选择':DataObj.Assessment7" @click="toEdit(2, 'Assessment7', DataObj.Assessment7, '-1,0,5,10', '请选择,0,5,10')" is-link></list-item>
      <list-item title="8.床椅移动" :value="DataObj.Assessment8==-1?'请选择':DataObj.Assessment8" @click="toEdit(2, 'Assessment8', DataObj.Assessment8, '-1,0,5,10,15', '请选择,0,5,10,15')" is-link></list-item>
      <list-item title="9.平地行走" :value="DataObj.Assessment9==-1?'请选择':DataObj.Assessment9" @click="toEdit(2, 'Assessment9', DataObj.Assessment9, '-1,0,5,10,15', '请选择,0,5,10,15')" is-link></list-item>
      <list-item title="10.上下楼梯" :value="DataObj.Assessment10==-1?'请选择':DataObj.Assessment10" @click="toEdit(2, 'Assessment10', DataObj.Assessment10, '-1,0,5,10', '请选择,0,5,10')" is-link></list-item>
      <list-item title="B1总分" :value="DataObj.AssessScore"></list-item>
      <list-item title="自理能力程度" :value="DataObj.SelfCare==-1?'请选择':DataObj.SelfCare" @click="toEdit(2, 'SelfCare', DataObj.SelfCare, '-1,1,2,3,4', '请选择,1,2,3,4')" is-link></list-item>
      <list-item title="病情等级" :value="DataObj.IncidenceLevel" @click="toEdit(2, 'IncidenceLevel', DataObj.IncidenceLevel, '请选择,1,2,3', '请选择,1,2,3')" is-link></list-item>
      <list-item title="护理等级" :value="showLevel(DataObj.NursingLevel)" @click="toEdit(2, 'NursingLevel', DataObj.NursingLevel, '0,1,2,3,4', '请选择,特级护理,一级护理,二级护理,三级护理')" is-link></list-item>
    </scroller>
  </div>
</template>

<script>
import BackHeader from 'views/components/BackHeader.vue'
import ListItem from 'views/components/ListItem.vue'
import StorageUtil from 'utils/StorageUtil.js'

const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')
const globalEvent = weex.requireModule('globalEvent')
const picker = weex.requireModule('picker')

import BackServer from '@/BackServer.js'
import ViewServer from '@/ViewServer.js'

export default {
  name: 'Level',
  data() {
    return {
      Type: 'add',
      AssessID: '',
      DataObj: {},
      UserInfo: {}
    }
  },
  mounted() {
    this.initData()
    this.getData()
    this.addListener()
  },
  methods: {
    getData() {
      let that = this
      storage.getItem('AssessID', event => {
        let AssessID = event.data
        console.log('AssessID = ' + AssessID)
        if (AssessID !== 'add' && AssessID) {
          that.Type = 'edit'
          const url = BackServer.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs?AssessID=' + AssessID
          stream.fetch({
            method: 'GET',
            type: 'json',
            url: url
          }, res => {
            let json = eval('(' + res.data + ')')
            that.DataObj = json
          })
        }
      })
    },
    commitData() {
      if (this.DataObj.CollectionDate === '') {
        modal.alert({ message: '评估时间不能为空' })
        return
      }

      this.DataObj['UserID'] = this.UserInfo.UserID
      this.DataObj['EmployeeID'] = this.UserInfo.EmployeeID
      const url = BackServer.kf + 'api/v1/Hospitalized/NursingAssessment/AssessNurs'

      let StreamType = 'POST'
      if (this.Type === 'edit') {
        StreamType = 'PUT'
      }

      stream.fetch({
        method: StreamType,
        type: 'json',
        headers: {
          'Content-Type': 'application/json'
        },
        url: url,
        body: JSON.stringify(this.DataObj)
      }, res => {
        console.log(res)
        let json = eval('(' + res.data + ')')
        modal.alert({
          message: json.Message
        }, event => {
          storage.setItem('PopCallback', 'update level list', event => {
            navigator.pop({ animated: 'true' })
          })
        })
      })
    },
    initData() {
      let that = this
      StorageUtil.getUserInfo(user => {
        console.log(user)
        this.UserInfo = user
        StorageUtil.getPatientInfo(info => {
          that.DataObj = {
            HospitalizedID: '',
            HospitalizedHisID: info.ZYH,
            PatientID: '',
            PatientHisID: info.ZYHM,
            PatientName: info.PaientName,
            AsstSort: '1',
            Assessment1: -1,
            Assessment2: -1,
            Assessment3: -1,
            Assessment4: -1,
            Assessment5: -1,
            Assessment6: -1,
            Assessment7: -1,
            Assessment8: -1,
            Assessment9: -1,
            Assessment10: -1,
            AssessScore: 0,
            IncidenceLevel: '请选择',
            SelfCare: -1,
            NursingLevel: 0,
            CollectionDate: '',
            EmployeeID: user.EmployeeId,
            UserID: user.UserId
          }
          console.log(that.DataObj)
        })
      })
    },
    addListener() {
      globalEvent.addEventListener('onResume', e => {
        storage.getItem('PopCallback', event => {
          if (event.data !== '') {
            let json = eval('(' + event.data + ')')
            console.log('callback')
            console.log(json)
            this.DataObj[json.key] = json.value

            // 计算总分
            let count = 0
            for (let i = 1; i <= 10; i++) {
              const val = parseInt(this.DataObj['Assessment' + i])
              if (val !== -1) {
                count += val
              }
            }

            this.DataObj.AssessScore = count

            storage.setItem('PopCallback', '')
          }
        })
      })
    },
    pickDate() {
      picker.pickDate({
        value: this.DataObj.CollectionDate
      }, event => {
        console.log(event)
        if (event.result === 'success') {
          console.log(event.data)
          this.DataObj.CollectionDate = this.formatPicker(event.data)
        }
      })
    },
    formatPicker(data) {
      const arr = data.split('-')
      let result = arr[0] + '-' + arr[1] + '-'
      if (arr[2].length === 1) {
        result += '0' + arr[2]
      } else {
        result += arr[2]
      }
      return result
    },
    toEdit(module, key, value, option, text) {
      let obj = { key: key, value: value, option: option, text: text }
      var ModuleName = ''
      switch (module) {
        case 1:
          ModuleName = 'Editor'
          break
        case 2:
          ModuleName = 'SingleSelector'
          break
        case 3:
          ModuleName = 'MultSelector'
          break
      }
      if (ModuleName !== '') {
        storage.setItem('PushVulues', JSON.stringify(obj), event => {
          navigator.push({
            url: ViewServer + ModuleName + '.weex.js',
            animated: 'true'
          }, event => {
            // TODO 页面跳转获取数据详情。
          })
        })
      }
    },
    formatDate(date) {
      if (date === null || date === '' || date === 'NaN-aN-aN aN:aN' || date === undefined) {
        return ''
      }
      let arr = date.split('T')
      return arr[0]
    },
    showLevel(jsonResult) {
      let text = ''
      let key = parseInt(jsonResult)
      switch (key) {
        case 0:
          text = '请选择'
          break
        case 1:
          text = '特级护理'
          break
        case 2:
          text = '一级护理'
          break
        case 3:
          text = '二级护理'
          break
        case 4:
          text = '三级护理'
          break
      }
      return text
    }
  },
  components: {
    BackHeader,
    ListItem
  }
}
</script>

<style scoped>
.scroller {
  height: 1300px;
}
</style>
