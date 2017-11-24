<template>
  <div>
    <app-header :PatientInfo="PatientInfo"></app-header>
    <div class="wrap">
      <div>
        <text>入院时间：{{Time}} {{Days}}</text>
        <div class="row">
          <text>归属时间：</text>
          <text>11天</text>
        </div>
        <div class="row">
          <text>录入时间：</text>
          <text>{{InputTime}}</text>
          <text>历史</text>
        </div>
        <div>
          <text class="warn">体温测量：应测4次，已测0次</text>
        </div>
        <div class="row">
          <text class="th fl01">类别</text>
          <text class="th fl01">方式</text>
          <text class="th fl02">检查值</text>
          <text class="th fl01">管理</text>
        </div>
        <div class="row">
          <text class="td fl01">血压</text>
          <text class="td fl01">收缩压</text>
          <text class="td fl02">126 mmHg</text>
          <text class="td fl01">删除</text>
        </div>
        <div class="row">
          <text class="td fl01">呼吸</text>
          <text class="td fl01">自由呼吸</text>
          <text class="td fl02">11 次/分</text>
          <text class="td fl01">删除</text>
        </div>
      </div>
      <div class="row">
        <text class="fl01">工具</text>
        <text class="fl02">通用</text>
        <text class="fl02">添加体征</text>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/app-header.vue'

const storage = weex.requireModule('storage')

export default {
  data() {
    return {
      Time: '2017-07-05 16:59',
      Days: '365天',
      InputTime: '2017-07-08 20:34',
      PatientInfo: ''
    }
  },
  mounted() {
    storage.getItem('PatientInfo', event => {
      this.PatientInfo = event.data
    })
  },
  components: {
    AppHeader
  }
}
</script>

<style>
text {
  font-size: 50px;
}

.row {
  flex-direction: row;
  justify-content: space-between;
}

.col {
  flex-direction: column;
}

.warn {
  color: red;
}

.th {
  color: white;
  background-color: black;
  border-width: 1px;
  border-color: white;
  text-align: center;
}

.td {
  color: black;
  background-color: white;
  border-width: 1px;
  border-color: black;
  text-align: center;
}

.fl01 {
  flex: 1;
}

.fl02 {
  flex: 2;
}

.wrap {
  height: 1100px;
  justify-content: space-between
}
</style>
