# 文本编辑页面

用于编辑表单中有文本的部分。

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
value 类型：string  数据内容，填写到文本框中用于之后的编辑。

## 返回值

原样返回数据，通过`PopCallback`字段类获取数据:`storage.getItem('PopCallback', event => { ... })`

### 参数

key 类型：string  数据字段名称。
value 类型：string  返回的数据内容结果。