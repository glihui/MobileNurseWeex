<template>
  <scroller class="scroller">
    <div class="list-content">
      <block class="block" :Sex="item.Sex" :medic="item.YWGM" :pressure="item.MonitorUlcer" :Age="getAge(item.DateOfBirth)" :BedNo="item.BedNO" :Name="item.PaientName" :DataShow="formatDate(item.InTime)" :MSZD="item.MSZD" :IconUrl="TestIconUrl" v-for="(item, index) in PatientArr" :key="index" @click="jump(item, index)">
      </block>
    </div>
  </scroller>
</template>
<script>
import Block from '../components/Block.vue'

import ViewServer from '@/ViewServer.js'
import BackServer from '@/BackServer.js'
import EncodeUtf8 from '@/utils/Utf8.js'

const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')
const navigator = weex.requireModule('navigator')

export default {
  name: 'Bed',
  data() {
    return {
      PatientArr: [],
      UserInfo: ''
    }
  },
  props: {
    Ward: {
      type: String,
      default: '三病区'
    }
  },
  mounted() {
    console.log('Render Bed')
    this.getUserInfo()
  },
  watch: {
    Ward(val) {
      this.PatientArr = []
      this.UserInfo = ''
      this.getUserInfo()
    }
  },
  methods: {
    getUserInfo() {
      let that = this
      // storage.getItem('CurWard', event => {
      //   console.log('get CurWard:', event.data)
      let DepartmentName = this.Ward
      if (!DepartmentName) {
        DepartmentName = '三病区'
      }
      let url = BackServer.kf + 'api/v1/Hospitalized/NursStation/NursesViewList?ZYH=' + EncodeUtf8(DepartmentName) + '&type=2'
      // let url = BackServer.kf + 'api/v1/Hospitalized/NursStation/NursesViewList?ZYH=三病区&type=2'
      console.log('NurseViewUrl = ' + url)
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: url
      }, res => {
        let json = eval('(' + res.data + ')')
        let PatientList = eval('(' + json.Message + ')')

        that.PatientArr = PatientList

        if (that.PatientArr.length % 2 === 0) {
          that.LineCount = that.PatientArr.length / 2
        } else {
          that.LineCount = Math.floor(that.PatientArr.length / 2) + 1
        }
      })
      // })
    },
    getAge(date) {
      if (!date) {
        return ''
      }
      let returnAge

      let mDate = date.split('T')[0]

      let strBirthdayArr = mDate.split('-')
      let birthYear = strBirthdayArr[0]
      let birthMonth = strBirthdayArr[1]
      let birthDay = strBirthdayArr[2]
      let Now = new Date()
      let nowYear = Now.getFullYear()
      let nowMonth = Now.getMonth() + 1
      let nowDay = Now.getDate()

      if (nowYear === birthYear) {
        returnAge = 0 // 同年则为0岁
      } else {
        let ageDiff = nowYear - birthYear // 年之差
        if (ageDiff > 0) {
          if (nowMonth === birthMonth) {
            var dayDiff = nowDay - birthDay // 日之差
            if (dayDiff < 0) {
              returnAge = ageDiff - 1
            } else {
              returnAge = ageDiff
            }
          } else {
            var monthDiff = nowMonth - birthMonth // 月之差
            if (monthDiff < 0) {
              returnAge = ageDiff - 1
            } else {
              returnAge = ageDiff
            }
          }
        } else {
          returnAge = -1 // 返回-1 表示出生日期输入错误 晚于今天
        }
      }
      return returnAge // 返回周岁年龄
    },
    formatDate(date) {
      if (!date) {
        return ''
      }
      const arr = date.split('T')
      return arr[0]
    },
    jump(item, index) {
      console.log('Bed Jump:' + item)
      let itemStr = JSON.stringify(item)
      storage.setItem('PatientInfo', itemStr, event => {
        console.log('sucessful save')
      })
      navigator.push({
        url: ViewServer + 'PatientDetail.weex.js',
        animated: 'true'
      }, event => {
        console.log('successful entry')
      })
    }
  },
  components: {
    Block
  }
}
</script>
<style scoped>
.list-content {
  width: 750px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
}

.block {
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 12px;
  margin-right: 12px;
  width: 350px;
  height: 350px;
}

.row {
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
}

.scroller {
  width: auto;
}
</style>

