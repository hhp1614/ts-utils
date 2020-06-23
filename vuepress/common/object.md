# object 对象

### 引入

> 注：`fn` 为需要使用的方法名

```js
import * as object from '@hhp1614/utils/lib/common/object';
// or
import { object } from '@hhp1614/utils/lib/common';

// 使用
object.fn();


import { fn } from '@hhp1614/utils/lib/common/object';
// 单独引入方法
// import { fn } from '@hhp1614/utils/lib/common/object/fn';
fn();
```

## clone 深拷贝

```text
clone(value);
```

- 参数：
    - `value`：需要拷贝的对象
- 返回值 `any`：拷贝结果
- 例子：
```js
import { clone } from '@hhp1614/utils/lib/common/object';
const x = { a: { b: 'c' } };
const y = clone(a);
x.a.b = 'x';
console.log(y); // { a: { b: 'c' } }
```
