<template>
  <div class="wrapper">
    <back-header PatientInfo="请选择" RightContent="确定" @save="save"></back-header>
    <SelectorItem v-for='(item, index) in parseOptions(DataObj.text)' :key="index" :value="item" :isChecked="parseOptions(DataObj.option)[index]==DataObj.value" @click="select(index)"></SelectorItem>
  </div>
</template>

<script>
import BackHeader from './components/BackHeader.vue'
import SelectorItem from './components/SelectorItem.vue'

const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')

export default {
  name: 'SingleSelector',
  data() {
    return {
      DataObj: {
        key: '',
        value: '',
        option: '',
        text: ''
      }
    }
  },
  mounted() {
    this.getOption()
  },
  methods: {
    getOption() {
      storage.getItem('PushVulues', event => {
        this.DataObj = JSON.parse(event.data)
      })
    },
    select(index) {
      this.DataObj.value = this.parseOptions(this.DataObj.option)[index]
      this.save()
    },
    save() {
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
