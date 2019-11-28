# type - 类型检查方法

## 引入

```js
import { type } from '@hhp1614/utils';
```

## 索引

- [`isDate`](#isDate) 检查是否为时间
- [`isElement`](#isElement) 检查是否为 `DOM` 元素
- [`isEmpty`](#isEmpty) 检查是否为空的对象，集合，`Map` 或者 `Set` 对象
- [`isError`](#isError) 检查是否为 `Error` 对象
- [`isFunction`](#isFunction) 检查是否为函数
- [`isLength`](#isLength) 检查是否为长度
- [`isMap`](#isMap) 检查是否为 `Map` 对象
- [`isNil`](#isNil) 检查是否为 `null` 或者 `undefined`
- [`isNull`](#isNull) 检查是否为 `null`
- [`isObject`](#isObject) 检查是否为对象
- [`isObjectLike`](#isObjectLike) 检查是否为类对象
- [`isPlainObject`](#isPlainObject) 检查是否为普通对象
- [`isRegExp`](#isRegExp) 检查是否为 `RegExp` 对象
- [`isSet`](#isSet) 检查是否为 `Set` 对象
- [`isString`](#isString) 检查是否为字符串或者字符串对象
- [`isSymbol`](#isSymbol) 检查是否为 `Symbol` 对象
- [`isTypedArray`](#isTypedArray) 检查是否为 `WeakMap` 对象
- [`isWeakMap`](#isWeakMap) 检查是否为 `WeakSet` 对象

### `isDate`

检查是否为时间

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isDate(new Date);
    // => true
    type.isDate('Wed Nov 27 2019');
    // => false
    ```
    
### `isElement`

检查是否为 `DOM` 元素

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isElement(document.body);
    // => true
    type.isElement('<body>');
    // => false
    ```

### `isEmpty`

检查是否为 `DOM` 元素

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isEmpty(null);
    // => true
    type.isEmpty(true);
    // => true
    type.isEmpty(1);
    // => true
    type.isEmpty([1, 2, 3]);
    // => false
    type.isEmpty('abc');
    // => false
    type.isEmpty({ 'a': 1 });
    // => false
    ```
    
### `isError`

检查是否为 `Error` 对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isError(new Error);
    // => true
    type.isError(Error);
    // => false
    ```

### `isFunction`

检查是否为函数

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isFunction(class Any{});
    // => true
    type.isFunction(() => {});
    // => true
    type.isFunction(async () => {});
    // => true
    type.isFunction(function * Any() {});
    // => true
    type.isFunction(Math.round);
    // => true
    type.isFunction(/abc/);
    // => false
    ```
    
### `isLength`

检查是否为长度

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isLength(3);
    // => true
    type.isLength(Number.MIN_VALUE);
    // => false
    type.isLength(Infinity);
    // => false
    type.isLength('3');
    // => false
    ```
    
### `isMap`

检查是否为 `Map` 对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isMap(new Map);
    // => true
    type.isMap(new WeakMap);
    // => false
    ```
    
### `isNil`

检查是否为 `null` 或者 `undefined`

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isNil(null);
    // => true
    type.isNil(void 0);
    // => true
    type.isNil(NaN);
    // => false
    ```
    
### `isNull`

检查是否为 `null`

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isNull(null);
    // => true
    type.isNull(void 0);
    // => false
    ```
    
### `isObject`

检查是否为对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isObject({});
    // => true
    type.isObject([1, 2, 3]);
    // => true
    type.isObject(Function);
    // => true
    type.isObject(null);
    // => false
    ```
    
### `isObjectLike`

检查是否为类对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isObjectLike({});
    // => true
    type.isObjectLike([1, 2, 3]);
    // => true
    type.isObjectLike(Function);
    // => false
    type.isObjectLike(null);
    // => false
    ```
    
### `isPlainObject`

检查是否为普通对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    function Foo() { this.a = 1; }
    type.isPlainObject(new Foo);
    // => false
    type.isPlainObject([1, 2, 3]);
    // => false
    type.isPlainObject({ 'x': 0, 'y': 0 });
    // => true
    type.isPlainObject(Object.create(null));
    // => true
    ```
    
### `isRegExp`

检查是否为 `RegExp` 对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isRegExp(/abc/);
    // => true
    type.isRegExp('/abc/');
    // => false
    ```
    
### `isSet`

检查是否为 `Set` 对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isSet(new Set);
    // => true
    type.isSet(new WeakSet);
    // => false
    ```
    
### `isString`

检查是否为字符串或者字符串对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isString('abc');
    // => true
    type.isString(1);
    // => false
    ```
    
### `isSymbol`

检查是否为 `Symbol` 对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isSymbol(Symbol.iterator);
    // => true
    type.isSymbol('abc');
    // => false
    ```
    
### `isTypedArray`

检查是否为类型数组

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isTypedArray(new Uint8Array);
    // => true
    type.isTypedArray([]);
    // => false
    ```
    
### `isWeakMap`

检查是否为 `WeakMap` 对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isWeakMap(new WeakMap);
    // => true
    type.isWeakMap(new Map);
    // => false
    ```
    
### `isWeakSet`

检查是否为 `WeakSet` 对象

- 参数:
    - `value`: `any` 要检查的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isWeakSet(new WeakSet);
    // => true
    type.isWeakSet(new Set);
    // => false
    ```
