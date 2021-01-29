# collection 集合

## each 遍历

遍历数组，类数组，字符串，对象

> 对象的 `length` 属性也会被遍历

```text
each(collection, callback)
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

## sort 排序

支持排序 `item` 为 `number` 或 `string` 的数组

支持排序对象数组

支持排序对象

```text
each(value, [order=asc], [key])
```

> 使用快速排序

- 参数：
  - `value`：需要排序的数组或对象
  - `order`：`asc`：升序，`desc`：降序，默认 `asc`
  - `key`：排序对象数组时，指定排序的 `key`
- 例子：

```js
import { sort } from '@hhp1614/utils/lib/common/collection';

const a = [2, 4, 1, 3];
sort(a);
console.log(a); // [1, 2, 3, 4]

const b = { b: 2, d: 4, a: 1, c: 3 };
sort(b);
console.log(b); // { a: 1, b: 2, c: 3, d: 4 }

const c = [
  { id: 2, value: 2 },
  { id: 4, value: 4 },
  { id: 1, value: 1 },
  { id: 3, value: 3 }
];
sort(c, 'asc', 'id');
console.log(c);
/* 输出
[
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 }
]
*/
```
