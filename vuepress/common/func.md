# func 方法

## debounce 函数防抖

限制事件的频繁触发

将需要延迟执行的函数(`func`)在函数(`debounce`)最后一次调用时的 `wait` 毫秒后执行

```text
debounce(func, wait, [immediate = false])
```

- 参数：
    - `func`：需要防抖处理的函数
    - `wait`：延迟执行的时间，单位毫秒
    - `immediate`：是否立即执行，默认 `false`
- 例子：
- 返回值 `Function`：防抖函数 `debounced`
    - `debounced.cancel()`：取消防抖
```js
import { debounce } from '@hhp1614/utils/lib/common/func'
let counter = 0
const add = () => counter++
const debouncedAdd = debounce(add, 32)
debouncedAdd()
debouncedAdd()
console.log(counter) // 1
// 取消防抖
debouncedAdd.cancel()
```

## throttle 函数节流

创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 `wait` 毫秒调用一次该函数

对于想控制一些触发频率较高的事件有帮助

默认情况下，`throttle` 将在调用的第一时间尽快执行这个 `func`（第一次和最后一次都执行 `func`）

```text
throttle(func, wait, [options = {}])
```

- 参数：
    - `func`：需要节流处理的函数
    - `wait`：延迟执行的时间，单位毫秒
    - `options`：选项，默认 `{}`
        - `leading`：如果想禁用第一次首先执行的话，传递 `{ leading: false }`
        - `trailing`：如果想禁用最后一次执行的话，传递 `{ trailing: false }`
- 返回值 `Function`：节流函数 `throttled`
    - `throttled.cancel()`：取消节流
- 例子：
```js
import { throttle } from '@hhp1614/utils/lib/common/func'
let counter = 0
const add = () => counter++
const throttledAdd = throttle(add, 32)
throttledAdd()
throttledAdd()
console.log(counter) // 1
// 取消节流
throttledAdd.cancel()
```
