# type - 类型

判断类型的方法

## 引入

```js
import { type } from '@hhp1614/utils';
```

## 索引

- [`isArguments`](#isArguments) 判断是否为 `arguments` 对象
- [`isArray`](#isArray) 判断是否为数组
- [`isArrayBuffer`](#isArrayBuffer) 判断是否为 `ArrayBuffer` 对象
- [`isArrayLike`](#isArrayLike) 判断是否为类数组
- [`isArrayLikeObject`](#isArrayLikeObject) 判断
- [`isBoolean`](#isBoolean) 判断11
- [`isDate`](#isDate) 判断是否为时间
- [`isElement`](#isElement) 判断是否为 `DOM` 元素
- [`isEmpty`](#isEmpty) 判断是否为空的对象，集合，`Map` 或者 `Set` 对象
- [`isError`](#isError) 判断是否为 `Error` 对象
- [`isFunction`](#isFunction) 判断是否为函数
- [`isLength`](#isLength) 判断是否为长度
- [`isMap`](#isMap) 判断是否为 `Map` 对象
- [`isNil`](#isNil) 判断是否为 `null` 或者 `undefined`
- [`isNull`](#isNull) 判断是否为 `null`
- [`isObject`](#isObject) 判断是否为对象
- [`isObjectLike`](#isObjectLike) 判断是否为类对象
- [`isPlainObject`](#isPlainObject) 判断是否为普通对象
- [`isRegExp`](#isRegExp) 判断是否为 `RegExp` 对象
- [`isSet`](#isSet) 判断是否为 `Set` 对象
- [`isString`](#isString) 判断是否为字符串或者字符串对象
- [`isSymbol`](#isSymbol) 判断是否为 `Symbol` 对象
- [`isTypedArray`](#isTypedArray) 判断是否为 `WeakMap` 对象
- [`isUndefined`](#isUndefined) 检判断是否为 `undefined`
- [`isWeakMap`](#isWeakMap) 判断是否为 `WeakMap` 对象
- [`isWeakSet`](#isWeakSet) 判断是否为 `WeakSet` 对象

### `isArguments`

判断是否为 `arguments` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isArguments(function() { return arguments }());
    // => true
    type.isArguments([1, 2, 3]);
    // => false
    ```

### `isArray`

判断是否为数组

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isArray([]);
    // => true
    type.isArray({});
    // => false
    ```

### `isArrayBuffer`

判断是否为 `ArrayBuffer` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isArrayBuffer(new ArrayBuffer(2));
    // => true
    type.isArrayBuffer(new Array(2));
    // => false
    ```

### `isArrayLike`

判断是否为类数组

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isArrayLike([1, 2, 3]);
    // => true
    type.isArrayLike(document.body.children);
    // => true
    type.isArrayLike('abc');
    // => true
    type.isArrayLike(Function);
    // => false
    ```

### `isArrayLikeObject`

判断是否为对象类型的类数组

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isArrayLikeObject([1, 2, 3]);
    // => true
    type.isArrayLikeObject(document.body.children);
    // => true
    type.isArrayLikeObject('abc');
    // => false
    type.isArrayLikeObject(Function);
    // => false
    ```

### `isBoolean`

判断是否为布尔值

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isBoolean(false);
    // => true
    type.isBoolean(null);
    // => false
    ```

### `isDate`

判断是否为时间

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isDate(new Date);
    // => true
    type.isDate('Wed Nov 27 2019');
    // => false
    ```

### `isElement`

判断是否为 `DOM` 元素

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isElement(document.body);
    // => true
    type.isElement('<body>');
    // => false
    ```

### `isEmpty`

判断是否为 `DOM` 元素

- 参数:
    - `value`: `any` 要判断的值
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

判断是否为 `Error` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isError(new Error);
    // => true
    type.isError(Error);
    // => false
    ```

### `isFunction`

判断是否为函数

- 参数:
    - `value`: `any` 要判断的值
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

判断是否为长度

- 参数:
    - `value`: `any` 要判断的值
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

判断是否为 `Map` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isMap(new Map);
    // => true
    type.isMap(new WeakMap);
    // => false
    ```
    
### `isNil`

判断是否为 `null` 或者 `undefined`

- 参数:
    - `value`: `any` 要判断的值
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

判断是否为 `null`

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isNull(null);
    // => true
    type.isNull(void 0);
    // => false
    ```
    
### `isObject`

判断是否为对象

- 参数:
    - `value`: `any` 要判断的值
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

判断是否为类对象

- 参数:
    - `value`: `any` 要判断的值
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

判断是否为普通对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isPlainObject({ 'x': 0, 'y': 0 });
    // => true
    type.isPlainObject(Object.create(null));
    // => true
    function Foo() { this.a = 1; }
    type.isPlainObject(new Foo);
    // => false
    type.isPlainObject([1, 2, 3]);
    // => false
    ```
    
### `isRegExp`

判断是否为 `RegExp` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isRegExp(/abc/);
    // => true
    type.isRegExp('/abc/');
    // => false
    ```
    
### `isSet`

判断是否为 `Set` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isSet(new Set);
    // => true
    type.isSet(new WeakSet);
    // => false
    ```
    
### `isString`

判断是否为字符串或者字符串对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isString('abc');
    // => true
    type.isString(1);
    // => false
    ```
    
### `isSymbol`

判断是否为 `Symbol` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isSymbol(Symbol.iterator);
    // => true
    type.isSymbol('abc');
    // => false
    ```
    
### `isTypedArray`

判断是否为类型数组

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isTypedArray(new Uint8Array);
    // => true
    type.isTypedArray([]);
    // => false
    ```

### `isUndefined`

判断是否为 `null`

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isUndefined(void 0);
    // => true
    type.isUndefined(null);
    // => false
    ```
    
### `isWeakMap`

判断是否为 `WeakMap` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isWeakMap(new WeakMap);
    // => true
    type.isWeakMap(new Map);
    // => false
    ```
    
### `isWeakSet`

判断是否为 `WeakSet` 对象

- 参数:
    - `value`: `any` 要判断的值
- 返回值: `boolean`
- 例子:
    ```js
    type.isWeakSet(new WeakSet);
    // => true
    type.isWeakSet(new Set);
    // => false
    ```
