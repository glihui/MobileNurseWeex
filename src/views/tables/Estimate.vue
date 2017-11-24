<template>
  <div>
    <back-header PatientInfo="入院评定表" RightContent="保存"></back-header>
    <scroller class="scroller">
      <list-item title="评估时间" :value="formatDate(DataObj.value01)" @click="pickDate" is-link></list-item>
      <list-item title="文本" :value="DataObj.value04" @click="toEdit(1, 'value04', DataObj.value04)" is-link></list-item>      
      <list-item title="单选" :value="DataObj.value02==-1?'请选择':DataObj.value02" @click="toEdit(2, 'value02', DataObj.value02, '-1,0,5,10', '请选择,0,5,10')" is-link></list-item>
      <list-item title="多选" :value="DataObj.value03" @click="toEdit(3, 'value03', DataObj.value03, '1,2,3,4,5', '一,二,三,四,五')" is-link></list-item>
    </scroller>
  </div>
</template>

<script>
import BackHeader from '../components/BackHeader.vue'
import ListItem from '../components/ListItem.vue'

const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
const globalEvent = weex.requireModule('globalEvent')
const picker = weex.requireModule('picker')

import ViewServer from '../../ViewServer.js'

export default {
  name: 'Level',
  data() {
    return {
      DataObj: {
        value01: '2017-08-10',
        value02: '-1',
        value03: '1,0,1,0,0',
        value04: '请输入内容'
      }
    }
  },
  mounted() {
    this.addListener()
  },
  methods: {
    addListener() {
      globalEvent.addEventListener('onResume', e => {
        storage.getItem('PopCallback', event => {
          if (event.data !== '') {
            let json = eval('(' + event.data + ')')
            console.log('callback')
            console.log(json)
            this.DataObj[json.key] = json.value
            storage.setItem('PopCallback', '')
          }
        })
      })
    },
    pickDate() {
      picker.pickDate({
        value: this.DataObj.value01
      }, event => {
        console.log(event)
        if (event.result === 'success') {
          this.DataObj.value01 = event.data
        }
      })
    },
    // module 跳转的模块名称：1. 文本 2. 单选 3. 多选
    // key 数据字段名称
    // value 数据字段的内容
    // option 选项value内容
    // text 选项的文本显示内容
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
  height: 1270px;
}
</style>
