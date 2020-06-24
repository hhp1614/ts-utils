# object 对象

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
