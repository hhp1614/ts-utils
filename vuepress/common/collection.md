# collection 集合

### 引入

> 注：`fn` 为需要使用的方法名

```js
import * as collection from '@hhp1614/utils/lib/common/collection';
// or
import { collection } from '@hhp1614/utils/lib/common';

// 使用
type.fn();


import { fn } from '@hhp1614/utils/lib/common/collection';
// 单独引入方法
// import { fn } from '@hhp1614/utils/lib/common/collection/fn';
fn();
```

## each 遍历

遍历数组，类数组，字符串，对象

> 对象的 `length` 属性也会被遍历

```text
each(collection, callback);
```

- 参数：
    - `collection`：需要遍历的数组、类数组和对象
    - `callback`：回调函数，有两个参数：`(value, index|key)`
- 例子：
```js
import { each } from '@hhp1614/utils/lib/common/collection';
each(['a', 'b', 'c'], (value, index) => {
  console.log(index, value);
});
/* 输出
0 "a"
1 "b"
2 "c"
*/
```
