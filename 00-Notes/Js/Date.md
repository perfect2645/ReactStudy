```js
//月份
const month = props.date.getMonth() + 1;
//日期
const mydate = props.date.getDate();
// toLocaleString
const month = props.date.toLocaleString("zh-CN", { month: "long" });
>七月
```
