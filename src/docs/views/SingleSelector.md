# 单选编辑页面

单选页面

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
value 类型：string  数据内容，内容为单选选项的某个value值。如`2`。
option 类型：string 单选数据的选项value，通过`,`来分割。如`1,2,3,4,5`。
text 类型：string 单选数据的选项文本内容显示，通过`,`来分割。如`one,two,three,four,five`。

## 返回值

原样返回数据，通过`PopCallback`字段类获取数据:`storage.getItem('PopCallback', event => { ... })`

### 参数

key 类型：string  数据字段名称。
value 类型：string  返回的单选选项内容。如`3`
option 类型：string 单选数据的选项value，通过`,`来分割。如`1,2,3,4,5`。
text 类型：string 单选数据的选项文本内容显示，通过`,`来分割。如`one,two,three,four,five`。