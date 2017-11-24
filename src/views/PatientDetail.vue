<template>
  <div class="wraper">
    <back-header-slot>
      <text class="title">{{ PatientName }}</text>
      <!-- <text class="title" slot="right">{{ BedNO }}</text> -->
      <div class="txtsex">
        <text class="fontsiz">{{Sex}}</text>
      </div>
      <div class="txtage">
        <text class="fontsiz">{{getAge(DateOfBirth)}}</text>
      </div>
    </back-header-slot>
    <div class="topinfor">
      <div class="topleft">
        <text class="txtbedno">{{BedNO}}</text>
        <text class="datashow">入院日期：{{formatDate(InTime)}}</text>
      </div>
      <div class="btm">
        <text class="txtinfo">诊断：{{MSZD}}</text>
        <text class="txtinfo">过敏药物：{{YWGM}}</text>
      </div>
    </div>
    <div class="timeline">
      <time-line 
        Circle="初期"
        StepA="2017-05-01" 
        StepB="2017-05-02" 
        StepC="2017-05-12" 
        StepD="2017-05-28" 
        StepE="2017-06-18"></time-line>
    </div>
    <div class="row">
      <img-button :ImgUrl="item.ImgUrl" :Content="item.Content" v-for="(item,index) in ImgArr" :key="index" @click="jump(item,index)">
      </img-button>
    </div>
  </div>
</template>
<script>
import BackHeaderSlot from 'views/components/BackHeaderSlot.vue'
import TimeLine from 'views/components/TimeLine.vue'
import BackServer from '@/BackServer.js'
import ViewServer from '@/ViewServer.js'
import ImgButton from './components/ImgButton.vue'

const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')
const navigator = weex.requireModule('navigator')
export default {
  data() {
    return {
      BedNO: '',
      PatientName: '',
      DeptID: '',
      ZYHM: '',
      MSZD: '',
      ZLMB: '',
      BQ: '',
      team: '松江乐都医院康复中心',
      ContactPersion: '崔新河',
      ContactPersionPhone: '13917459463',
      DateOfBirth: '',
      Sex: '',
      YWGM: '',
      indextitem: '',
      InTime: '',
      ImgArr: [
        { ImgUrl: ViewServer + 'img/img01.png', Content: '护理评估' },
        { ImgUrl: ViewServer + 'img/img02.png', Content: '护理记录' },
        { ImgUrl: ViewServer + 'img/img03.png', Content: '体征录入' },
        { ImgUrl: ViewServer + 'img/img04.png', Content: '康复宣教' },
        { ImgUrl: ViewServer + 'img/img05.png', Content: '安全告知' },
        { ImgUrl: ViewServer + 'img/img06.png', Content: '知识库' }
      ]
    }
  },
  mounted() {
    this.getpaientinfo()
    this.getitem()
  },
  methods: {
    getpaientinfo() {
      storage.getItem('PatientInfo', event => {
        console.log('get value:', event.data)
        let patintattr = eval('(' + event.data + ')')
        console.log(patintattr)
        let url = BackServer.kf + 'api/v1/Hospitalized/NursStation/NursesViewList?ZYH=' + patintattr.ZYH + '&type=1'
        console.log(url)
        stream.fetch({
          method: 'GET',
          type: 'json',
          url: url
        }, res => {
          console.log(res.data)
          let json = eval('(' + res.data + ')')
          let patintinfo = eval('(' + json.Message + ')')
          console.log(patintinfo)
          this.PatientName = patintinfo[0].PaientName
          console.log(patintinfo[0].PaientName)
          this.BedNO = patintinfo[0].BedNO
          this.DeptID = patintinfo[0].DeptID
          this.ZYHM = patintinfo[0].ZYHM
          this.MSZD = patintinfo[0].MSZD
          this.Sex = patintinfo[0].Sex
          this.DateOfBirth = patintinfo[0].DateOfBirth
          this.YWGM = patintinfo[0].YWGM
          this.InTime = patintinfo[0].InTime
          // this.BQ = patintinfo[0].BQ
        })
      })
    },
    getitem() {
      storage.getItem('PatientInfo', event => {
        console.log('get', event.data)
        let patintattr = eval('(' + event.data + ')')
        console.log(patintattr)
        let uri = BackServer.his + 'api/HospitalizedPatientInfo?HisPaientD=' + patintattr.ZYH
        console.log(uri)
        stream.fetch({
          method: 'GET',
          type: 'json',
          url: uri
        }, res => {
          console.log('item', res.data)
          let jsonObj = eval('(' + res.data.msg + ')')
          // let paintnews = eval('(' + json.msg + ')')
          console.log('jsonObj')
          console.log(jsonObj[0])
          this.ContactPersion = jsonObj[0].ContactPersion
          this.ContactPersionPhone = jsonObj[0].ContactPersionPhone
        })
      })
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
    jump(item, index) {
      if (index === 0) {
        navigator.push({
          url: ViewServer + 'EvaluationList.weex.js',
          animated: 'true'
        }, event => {
          console.log('successful entry')
        })
      }
    },
    formatDate(date) {
      if (!date) {
        return ''
      }
      const arr = date.split('T')
      return arr[0]
    }
    /*  getImg(m, n) {
       let i = (m - 1) * 3 + n - 1
       return this.ImgArr[i]
     } */
  },
  components: {
    BackHeaderSlot,
    ImgButton,
    TimeLine
  }
}
</script>

<style scoped>
.title {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 40px;
  line-height: 44px;
  color: #FFFFFF;
  text-align: center;
}

.wraper {
  flex-direction: column;
}

.topinfor {
  background-color: #e6df9b;
  flex-direction: column;
  width: 750px;
  height: 200px;
  padding-left: 40px;
  padding-right: 40px;
}

.topleft {
  flex-direction: row;
}

.btm {
  flex-direction: column;
}


/* .topright {
  flex-direction: row;
  margin-right: 40px;
  margin-top: 10px;
  margin-left: 5px;
} */

.txtsex,
.txtage {
  background-color: #fe0060;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.txtsex {
  margin-left: 56px;
}

.fontsiz {
  font-size: 26px;
  color: #ffffff;
}

.txtbedno {
  font-size: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 200px;
}

.datashow {
  margin-top: 15px;
  font-size: 25px;
  margin-left: 280px;
}

.txtinfo {
  width: 750px;
  line-height: 33px;
  font-size: 25px;
  font-weight: 200px;
}

.footsite {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.row {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  top: 38px;
}

.timeline {
  width: 750px;
  height: 500px;
  background-color: #F2F1F1;
}
</style>