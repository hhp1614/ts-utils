# type 类型

## getType 判断数据类型

获取 `value` 的类型，底层使用 `Object.prototype.toString.call`

```text
getType(value);
```

- 参数：
    - `value`：任意值
- 返回值 `string`：参数的数据类型
- 例子：
```js
import { getType } from '@hhp1614/utils/lib/common/type';
getType(''); // "string"
```

## is[Type] 判断类型

判断类型 `value` 的类型是否为 `Type`

```text
is[Type](value);
```

- `is[Type]`：
    - `isString`：是否为字符串
    - `isNumber`：是否为数字
    - `isBoolean`：是否为布尔值
    - `isNull`：是否为 null
    - `isUndefined`：是否为 undefined
    - `isNil`：是否为 null 或 undefined
    - `isSymbol`：是否为 symbol
    - `isBigInt`：是否为 bigint
    - `isObject`：是否为对象
    - `isObjectLike`：是否为类对象
    - `isPlainObject`：是否为普通对象
    - `isEmptyObject`：是否为空对象
    - `isArray`：是否为数组
    - `isEmptyArray`：是否为空数组
    - `isArrayLike`：是否为类数组
    - `isFunction`：是否为函数
    - `isRegExp`：是否为正则表达式
- 参数：
    - `value`：任意值
- 返回值 `boolean`：是否为对应类型
- 例子：
```js
import { isString } from '@hhp1614/utils/lib/common/type';
isString(''); // true
```

## check[Env] 判断环境

判断环境是否为 `Env`

```text
check[Env]([throwError = false], [errorContent]);
```

- `check[Type]`：
    - `checkBrowser`：判断当前环境是否为浏览器
    - `checkNode`：判断当前环境是否为 NodeJS
- 参数：
    - `throwError`：是否抛出异常，默认 `false`
    - `errorContent`：抛出异常时的错误内容
- 返回值 `boolean`：是否为对应环境
- 例子：
```js
import { checkBrowser } from '@hhp1614/utils/lib/common/type';
checkBrowser(); // true
```
