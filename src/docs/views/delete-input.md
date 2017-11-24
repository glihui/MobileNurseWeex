# delete-input

左侧带有图标，右侧带有删除按钮的文本输入框。

## 参数

icon: `String`文本类型，左侧图标URL地址
type: `String`文本类型，默认值是`text`。`type`值可以是`text`，`password`，`url`，`email`，`tel` ，`number` 。每个 `type`值都符合 W3C 标准。
placeholder: `String`文本类型，用户提示输入信息。
value: `String`文本类型，用户输入文本框的数据，默认为''空字符串。

## 事件

input: 文本框文本发生变化时触发事件。参数`val`为当前输入文本框的内容。
return: 当文本框点击返回键时触发事件。