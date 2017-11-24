# 单选编辑页面

多选页面

## 传入值

### 获取方式

根据`PushVulues`字段来获取`navigator`跳转携带过来的数据。
```
storage.getItem('PushVulues', event => {
  this.DataObj = JSON.parse(event.data)
})
```

### 参数

key 类型：string  数据字段名称。
value 类型：string  数据内容，内容为多选的每个选项的value值的拼接，`1`代表选中，`0`代表未选中，用`,`分割。如`0,1,0,0,1`。
option 类型：string 多选选数据的选项value，通过`,`来分割。如`1,2,3,4,5`。（在多选中`value`值好像没用到）
text 类型：string 多选数据的选项文本内容显示，通过`,`来分割。如`one,two,three,four,five`。

## 返回值

原样返回数据，通过`PopCallback`字段类获取数据:`storage.getItem('PopCallback', event => { ... })`

### 参数

key 类型：string  数据字段名称。
value 类型：string  返回数据结果，内容为多选的每个选项的value值的拼接，`1`代表选中，`0`代表未选中，用`,`分割。如`0,1,0,0,1`。
option 类型：string 多选选数据的选项value，通过`,`来分割。如`1,2,3,4,5`。
text 类型：string 多选数据的选项文本内容显示，通过`,`来分割。如`one,two,three,four,five`。