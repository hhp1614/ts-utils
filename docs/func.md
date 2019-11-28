# func - 常用方法

## 引入

```js
import { func } from '@hhp1614/utils';
```

## 索引

- [`debounce`](#debounce) 函数防抖
- [`throttle`](#throttle) 函数节流

## 方法

### `debounce`

函数防抖

- 参数:
    - `func`: `Function` 需要防抖处理的函数
    - `wait`: `number` 等待时间
    - `options`: `Object` 选项
        - `leading`: `boolean` 是否第一次触发时立即执行
        - `maxWait`: `number` 最长等待时间
        - `trailing`: `boolean` 是否在等待周期结束后执行用户传入的函数
- 返回值: `Function` 防抖函数

### `throttle`

函数节流

- 参数:
    - `func`: `Function` 需要节流处理的函数
    - `wait`: `number` 等待时间
    - `options`: `Object` 选项
        - `leading`: `boolean` 是否第一次触发时立即执行
        - `maxWait`: `number` 最长等待时间
        - `trailing`: `boolean` 是否在等待周期结束后执行用户传入的函数
- 返回值: `Function` 防抖函数
