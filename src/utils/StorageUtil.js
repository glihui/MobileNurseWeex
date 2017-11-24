// 存储工具类，写一些简单的存储问题。
const storage = weex.requireModule('storage')

export default {
  getCurWard(callback) {
    storage.getItem('CurWard', event => {
      callback(event.data)
    })
  },
  setCurWard(data) {
    storage.setItem('CurWard', data)
  },
  getUserInfo(callback) {
    storage.getItem('UserInfo', event => {
      // let json = eval('(' + event.data + ')')
      let json = JSON.parse(event.data)
      callback(json)
    })
  },
  setUserInfo(data) {
    storage.setItem('UserInfo', data)
  },
  getPatientInfo(callback) {
    storage.getItem('PatientInfo', event => {
      let json = JSON.parse(event.data)
      callback(json)
    })
  },
  setPatientInfo(data) {
    storage.setItem('PatientInfo', data)
  }
}