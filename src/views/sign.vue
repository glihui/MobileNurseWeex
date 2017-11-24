<template>
  <div class="wrapper">
    <div class="title-wrapper">
      <image class="imgbackgr" :src="imgbackgr"></image>
      <text class="title">医院移动护理平台</text>
    </div>
    <div class="bckcolor">
      <image class="loginfont" :src="imgfont"></image>
    </div>
    <delete-input type="text" placeholder="请输入账号" :icon="user" @input="inputWorkerNO" :value="WorkerNO"></delete-input>
    <div class="line"></div>
    <delete-input type="password" placeholder="请输入密码" :icon="psd" @input="inputPassword" @return="signIn" :value="Password"></delete-input>
    <div class="button-container">
      <text class="button" @click="signIn">登&nbsp;录</text>
    </div>
    <div class="footers" @click="hid()">
      <div>
        <image v-if="actionimg == true" class="check" :src="checkimg"></image>
        <div v-else class="check"></div>
      </div>
      <text class="value">{{ value }}</text>
    </div>
    <div class="footcolor">
    </div>
  </div>
</template>

<script>
import BackServer from '@/BackServer.js'
import ViewServer from '@/ViewServer.js'
import DeleteInput from 'views/components/DeleteInput.vue'

const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')

module.exports = {
  data: function () {
    return {
      WorkerNO: '',
      Password: '',
      user: ViewServer + 'img/user.png',
      psd: ViewServer + 'img/psd.png',
      imgbackgr: ViewServer + 'img/login.png',
      imgfont: ViewServer + 'img/loginfont.png',
      value: '记住密码',
      checkimg: ViewServer + 'img/check.png',
      actionimg: true
    }
  },
  mounted() {
    console.log('Render Sign')
    this.getAccountInfo()
  },
  methods: {
    getAccountInfo() {
      storage.getItem('AccountInfo', event => {
        const AccountInfo = JSON.parse(event.data)
        console.log(AccountInfo)
        this.WorkerNO = AccountInfo.WorkerNO
        this.Password = AccountInfo.Password
        this.actionimg = Boolean(AccountInfo.Remember)
        console.log(this.WorkerNO)
        console.log(this.actionimg)
      })
    },
    signIn() {
      if (this.WorkerNO === '' || this.Password === '') {
        modal.alert({
          message: '用户名和密码不能为空',
          duration: 0.3
        }, function (value) {
        })
        return
      }

      if (this.actionimg) {
        const AccountInfo = { WorkerNO: this.WorkerNO, Password: this.Password, Remember: this.actionimg }
        storage.setItem('AccountInfo', JSON.stringify(AccountInfo))
      } else {
        const AccountInfo = { WorkerNO: this.WorkerNO, Password: '', Remember: this.actionimg }
        storage.setItem('AccountInfo', JSON.stringify(AccountInfo))
      }

      let url = BackServer.kf + 'api/v1/SystemBusiness/UserInfo?userName=' + this.WorkerNO + '&password=' + this.Password
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: url
      }, res => {
        if (res.data !== '') {
          console.log('login log' + res.data)
          storage.setItem('UserInfo', res.data)
          // let json = eval('(' + res.data + ')')
          // storage.setItem('CurWard', json.DepartmentName)
          // console.log('CurWard = ' + json.DepartmentName)
          // modal.toast({ message: '登录成功' })
          navigator.push({
            url: ViewServer + 'Home.weex.js',
            animated: 'true'
          })
        } else {
          modal.toast({ message: '登录失败,请检查用户名、密码和网络！' })
        }
      })
    },
    inputWorkerNO(val) {
      this.WorkerNO = val
    },
    inputPassword(val) {
      this.Password = val
    },
    hid() {
      this.actionimg = !this.actionimg
    }
  },
  components: {
    DeleteInput
  }
}
</script>

<style>
.wrapper {
  flex-direction: column;
  width: 750px;
  height: 1300px;
}

.title-wrapper,
.imgbackgr {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 750px;
}

.imgbackgr {
  height: 400px;
}

.title {
  position: absolute;
  left: 200px;
  top: 135px;
  font-size: 55px;
  font-weight: 150;
  text-align: center;
  color: #ffffff;
  width: 350px;
}

.input {
  height: 80px;
  width: 600px;
}

.button-container {
  justify-content: center;
  flex-direction: row;
  width: 750px;
  margin-top: 40px;
  height: 150px;
  text-align: center;
  align-items: center;
}

.button {
  width: 600px;
  text-align: center;
  font-size: 50px;
  color: #717171;
  padding: 20px;
  border-radius: 75%;
  border-style: solid;
  border-width: 1px;
  border-color: #99A9BF;
  background-color: #ffffff;
}

.button:active {
  width: 600px;
  text-align: center;
  font-size: 50px;
  color: #717171;
  padding: 20px;
  border-radius: 75%;
  border-style: solid;
  border-width: 1px;
  border-color: #99A9BF;
  background-color: #EFF2F7;
}

.line {
  height: 1px;
}

.bckcolor {
  width: 750px;
  height: 120px;
  background-color: #DEEBF3;
  border: 2px solid #DEEBF3;
  margin-bottom: 10px;
}

.footers {
  flex-direction: row;
  margin-left: 460px;
  font-size: 40px;
  color: #606060;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 13px;
  width: 230px;
}

.footers:active {
  background-color: #C0CCDA;
  justify-content: left;
  flex-direction: row;
}

.loginfont {
  width: 315px;
  height: 85px;
  padding-left: 160px;
  padding-top: 30px;
}

.check {
  color: #13CE66;
  margin-right: 6px;
  width: 56px;
  height: 56px;
  border-width: 1px;
  border-color: #606060;
}

.value {
  font-size: 40px;
  color: #606060;
  padding-left: 10px;
}

.footcolor {
  background-color: #336699;
  width: 750px;
  height: 120px;
  position: relative;
  left: 0px;
  top: 70px;
}
</style>
