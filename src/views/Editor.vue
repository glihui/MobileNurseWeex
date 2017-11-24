<template>
  <div class="wrapper">
    <back-header PatientInfo="编辑简介" RightContent="确定" @save="save"></back-header>
    <textarea class="textarea" :value="DataObj.value" placeholder="介绍下自己" rows="8" @input="inputValue"></textarea>
  </div>
</template>

<script>
import BackHeader from './components/BackHeader.vue'

const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')

export default {
  name: 'Editor',
  data() {
    return {
      DataObj: {
        key: '',
        value: ''
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
    inputValue(event) {
      this.DataObj.value = event.value
    }
  },
  components: {
    BackHeader
  }
}
</script>

<style scoped>
.wrapper {
  flex-direction: column;
}

.textarea {
  border-width: 1px;
  border-color: #8492A6;
}
</style>
