# math 数学

## formatThousands 数字千分位格式化

支持负数和小数，小数部分不会参与格式化

```text
formatThousands(num)
```

- 参数：
  - `num`：数字或可以转换成数字的字符串
- 返回值 `string`：格式化后的字符串
- 例子：

```js
import { formatThousands } from '@hhp1614/utils/lib/common/math';
formatThousands(123456); // "123,456"
```

## add 精确加法运算

如果要做减法，只需第二个参数即被减数传负值即可

```text
add(x, y)
```

- 参数：
  - `x`：加数，`number` 类型
  - `y`：加数，`number` 类型
- 返回值 `number`：相加的结果
- 例子：

```js
import { add } from '@hhp1614/utils/lib/common/math';
// 0.1 + 0.2 => 0.30000000000000004
add(0.1, 0.2); // 0.3
```

## multiply 精确乘法运算

```text
multiply(x, y)
```

- 参数：
  - `x`：因数，`number` 类型
  - `y`：因数，`number` 类型
- 返回值 `number`：相乘的结果
- 例子：

```js
import { multiply } from '@hhp1614/utils/lib/common/math';
// 0.1 * 0.2 => 0.020000000000000004
multiply(0.1, 0.2); // 0.02
```

## divide 精确除法运算

```text
divide(x, y)
```

- 参数：
  - `x`：被除数，`number` 类型
  - `y`：除数，`number` 类型
- 返回值 `number`：相乘的结果
- 例子：

```js
import { divide } from '@hhp1614/utils/lib/common/math';
// 0.02 / 0.2 => 0.09999999999999999
divide(0.02, 0.2); // 0.1
```

## round 四舍五入

```text
round(num, [decimal=0])
```

- 参数：
  - `num`：数字，`number` 类型
  - `decimal`：默认：`0`，保留小数位数，0 或正整数
- 返回值 `string`：四舍五入的结果，会自动补零
- 例子：

```js
import { round } from '@hhp1614/utils/lib/common/math';
round(1.115, 2); // "1.12"
round(1.1, 2); // "1.10"
```
