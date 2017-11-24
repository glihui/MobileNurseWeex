// 工具类，常用写法总结到一起

export default {
  formatDate(date) {
    if (date === null || date === '' || date === 'NaN-aN-aN aN:aN' || date === undefined) {
      return ''
    }
    let arr = date.split('T')
    return arr[0]
  }
}