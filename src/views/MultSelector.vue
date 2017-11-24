<template>
  <div class="wrapper">
    <back-header PatientInfo="请选择" @save="save" RightContent="确定"></back-header>
    <SelectorItem v-for='(item, index) in DataArr' :key="index" :value="item.text" :isChecked="item.checked==1" @click="toCheck(index)"></SelectorItem>
  </div>
</template>

<script>
import BackHeader from './components/BackHeader.vue'
import SelectorItem from './components/SelectorItem.vue'

const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')

export default {
  name: 'MultSelector',
  data() {
    return {
      DataObj: {
        key: '',
        value: '',
        option: '',
        text: ''
      },
      DataArr: []
    }
  },
  mounted() {
    this.getOption()
  },
  methods: {
    getOption() {
      storage.getItem('PushVulues', event => {
        this.DataObj = JSON.parse(event.data)
        let arr1 = this.parseOptions(this.DataObj.option)
        let arr2 = this.parseOptions(this.DataObj.text)
        let arr3 = this.parseOptions(this.DataObj.value)
        console.log(arr1)
        console.log(arr2)
        console.log(arr3)
        this.DataArr = []
        for (let i = 0; i < arr1.length; i++) {
          this.DataArr.push({
            value: arr1[i],
            text: arr2[i],
            checked: arr3[i]
          })
        }
        console.log(this.DataArr.length)
        console.log(this.DataArr[0])
      })
    },
    save() {
      let value = ''
      for (let i = 0; i < this.DataArr.length; i++) {
        value += this.DataArr[i].checked
        if (i !== (this.DataArr.length - 1)) {
          value += ','
        }
      }
      this.DataObj.value = value
      storage.setItem('PopCallback', JSON.stringify(this.DataObj), event => {
        let json = eval('(' + event.data + ')')
        console.log(json)
        navigator.pop({
          animated: 'true'
        }, event => {
          console.log(event)
        })
      })
    },
    parseOptions(str) {
      if (str.length === 0) {
        return []
      } else {
        return str.split(',')
      }
    },
    toCheck(index) {
      let checkedValue = this.DataArr[index].checked
      console.log(checkedValue)
      if (checkedValue === '0') {
        this.DataArr[index].checked = '1'
      }
      if (checkedValue === '1') {
        this.DataArr[index].checked = '0'
      }
    }
  },
  components: {
    BackHeader,
    SelectorItem
  }
}
</script>

<style scoped>
.wrapper {
  flex-direction: column;
}
</style>
