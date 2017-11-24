<template>
  <div class="wrapper">
    <web ref="webview" :src="url" class="webview"></web>
  </div>
</template>

<script>
// 这个是确费补费的网页
const globalEvent = weex.requireModule('globalEvent')
const storage = weex.requireModule('storage')

import ViewServer from '../view-server.js'

export default {
  data() {
    return {
      url: ViewServer + '/html/default.html',
      WorkerNO: '',
      Password: ''
    }
  },
  mounted() {
    let that = this
    storage.getItem('WorkerNO', event => {
      that.WorkerNO = event.data
    })
    storage.getItem('Password', event => {
      that.Password = event.data
    })

    globalEvent.addEventListener('geolocation', e => {
      console.log(e.ScanResult)
      // const ViewAddress = 'http://192.168.12.192/'
      const ViewAddress = 'http://192.168.1.28:8083/'
      that.url = ViewAddress + 'Hospitalized/Therapist/Home?QRCode=' + e.ScanResult +
        '&WorkerNO=' + that.WorkerNO +
        '&PassWord=' + that.Password
    })
  },
  methods: {
  }
}
</script>
<style scoped>
.group {
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
}

.input {
  width: 600px;
  font-size: 36px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: #BBBBBB;
}

.button {
  width: 225px;
  text-align: center;
  background-color: #D3D3D3;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 30px;
  font-size: 30px;
}

.webview {
  width: 750px;
  height: 1300px;
}
</style>
