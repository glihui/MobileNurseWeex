# Storage 关键字存储文件

UserInfo      用户信息      json字符串
`{"EmployeeNumber":"085","EmployeeName":"陆奕","EmployeeID":"de01baa0-679e-464e-97e4-a95b786e10a0","DepartmentID":"3c192802-8698-474c-bc98-a6ee9b4ab72d","DepartmentName":"三病区","RegisterDepartmentID":null,"RolesName":"护士","RolesID":"3811ee3f-c406-43d2-879e-c085dc9c92da","RolesURL":"../portal/Nurses","UserID":"2a48b5ca-66b0-4012-8712-cd1db3e62776","HisID":"8385"}`
CurWard       当前病区      字符串
`三病区`
PatientInfo   当前病人信息  json字符串
`{"BedNO":"3-06","WardNO":1266,"ZYH":51926,"DeptID":"三病区","Sex":"男","HLJB":"二级护理","ZYHM":"151233","PaientName":"范仁华","DateOfBirth":"1953-11-20T00:00:00","TelePhone":null,"InTime":"2015-12-09T10:15:00","BQ":"病重","YSLX":null,"CYPB":0,"ZYYS":"8363","ZZYS":"8363","ZSYS":"8363","MSZD":"脑梗死","YWGM":"","CYZD":"","MonitorFall":0,"MonitorCatheter":0,"MonitorUlcer":2,"MonitorSwallow":0,"leaveState":0,"SuggestionState":0,"AnomalyState":0,"HighRiskState":0}`
AssessID      表单ID        GUID字符串
`72cc02c7-8a1e-450f-80c3-996a333a56c7`
PushVulues    Navigator跳转到下一页面传值 json字符串
**注意：**传值后需要将数据清空，否则会出错。
`{ 'Assessment1': '1'}`
PopCallback   返回上一页面回调参数 json字符串
`{ 'Time': '2017-08-01' }`
AccountInfo    记住密码,保存账户密码,记住密码。
`{ 'WorkerNO':'085', 'PassWord':'123', Remember: true }`

## 非常不优雅的页面跳转数据传输

现在两个Activity之间的传递数据是通过 `storage` 模块来进行存取的，**注意存取完成后把数据清空以免出错**。

**传递给下一页面**

```
storage.setItem('PushVulues', JSON.stringify(obj), event => {
  navigator.push({
    url: ViewServer + ModuleName + '.weex.js',
    animated: 'true'
  })
})
```

**返回给上一页面**

```
storage.setItem('PopCallback', 'update level list', event => {
  navigator.pop({ animated: 'true' })
})
```