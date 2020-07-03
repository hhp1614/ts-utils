# time 时间

## timeFormat 时间格式化

```text
timeFormat([time = new Date()], [format = 'YYYY-MM-DD hh:mm:ss']);
```

- 参数：
    - `time`：默认：`new Date()`，时间对象、时间戳、可转换为时间对象的字符串
    - `format`：默认：`YYYY-MM-DD hh:mm:ss`，显示格式
- 格式说明：
    - `YY`：两位数的年份
    - `YYYY`：四位数的年份
    - `M`：月份，从 1 开始
    - `MM`：月份，两位数
    - `D`：月份里的一天
    - `DD`：月份里的一天，两位数
    - `h`：小时
    - `hh`：小时，两位数
    - `m`：分钟
    - `mm`：分钟，两位数
    - `s`：秒
    - `ss`：秒，两位数
    - `S`：毫秒
    - `SS`：毫秒，三位数
- 例子：
```js
import { timeFormat } from '@hhp1614/utils/lib/common/time';
console.log(timeFormat('2020-01-01 01:01:01.001', 'YYYY年MM月DD日 hh时mm分ss秒 SS毫秒'));
// '2020年01月01日 01时01分01秒 001毫秒'
```
