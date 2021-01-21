# random 随机

## randomNum 随机整数

> 随机数范围包括最小值和最大值

```text
randomNum(min, max)
```

- 参数：
    - `min`：最小值
    - `max`：最大值
- 返回值 `number`：随机整数
- 例子：
```js
import { randomNum } from '@hhp1614/utils/lib/common/random'
const x = randomNum(10, 20)
console.log(x) // x >= 10 && x <= 20
```

## randomColor 随机颜色

随机十六进制颜色或 RGB 颜色

```text
randomColor([mode=all], [type=hex])
```

- 参数：
    - `mode`：默认 `all`；`all` 全部颜色中随机，`light` 随机亮色，`dark` 随机暗色
    - `type`：默认 `hex`；`hex` 十六进制，`rgb` RGB
- 返回值 `string`：`#ffffff` 或者 `rgb(255, 255, 255)` 格式的颜色字符串
- 例子：
```js
import { randomColor } from '@hhp1614/utils/lib/common/random'
const x = randomColor('all', 'hex')
console.log(x) // #ffffff
const y = randomColor('all', 'rgb')
console.log(y) // rgb(255, 255, 255)
```

## uuid 生成UUID

随机生成 UUID

```text
uuid()
```

- 返回值 `string`：`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` x 为十六进制数（0-f）
- 例子：
```js
import { uuid } from '@hhp1614/utils/lib/common/random'
const x = uuid()
console.log(x) // 03de6fa1-ac81-4923-b88f-93683c653280
```
