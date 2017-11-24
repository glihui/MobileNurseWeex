// 后端服务器数据
const IsTest = true

const OfficialServer = {
  his: '',
  kf: ''
}

const TestServer = {
  his: '',
  kf: ''
  // kf: ''
}

// const LocalServer = {
//   his: '',
//   kf: ''
// }

let BackServer = IsTest ? TestServer : OfficialServer

export default BackServer

