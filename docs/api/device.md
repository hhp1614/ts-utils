# device - 设备

获取设备信息

## 引入

```js
import { device } from '@hhp1614/utils';
```

## 索引

- [`setUA`](#setUA) 设置 `device` 内其他方法使用的 `userAgent`
- [`getUA`](#) 获取 `device` 内其他方法使用的 `userAgent`
- [`getOS`](#) 获取操作系统信息
- [`getBrowser`](#) 获取浏览器信息
- [`getOrientationStatus`](#) 获取横竖屏状态
- [`getResolution`](#) 获取屏幕分辨率
- [`getModel`](#) 获取设备型号
- [`getLanguage`](#) 获取当前语言
- [`getNetwork`](#) 获取网络状态


## 方法

### `setUA`

设置 `device` 内其他方法使用的 `userAgent`

- 参数:
    - `ua`: `string` `userAgent`

### `getUA`

获取 `device` 内其他方法使用的 `userAgent`

- 返回值: `string` `userAgent`

### `getOS`

获取操作系统信息

- 返回值: `Object` 操作系统信息
    - `type`: `string` 系统类型
    - `version`: `string` 系统版本
    
### `getBrowser`

获取浏览器信息

- 返回值: `Object` 浏览器信息
    - `engine`: `Object` 内核
        - `type`: `string` 内核类型
        - `version`: `string` 内核版本
    - `supporter`: `Object` 载体
        - `type`: `string` 载体类型
        - `version`: `string` 载体版本
    - `shell`: `Object` 外壳
        - `type`: `string` 外壳类型
        - `version`: `string` 外壳版本

### `getOrientationStatus`

获取横竖屏状态

- 返回值: `string` 竖屏(`vertical`) | 横屏(`horizontal`)

### `getResolution`

获取屏幕分辨率

- 返回值: `string` 长边x短边
- 例子: 
    ```js
    device.getResolution();
    // => 1920x1080
    ```

### `getModel`

获取设备型号

- 返回值: `string` 设备型号 获取不到则返回 `unknown`

### `getLanguage`

获取当前语言

- 返回值: `string` 当前语言 比如: `zh_CN`

### `getNetwork`

获取网络状态

- 返回值: `string` 当前网络状态 比如: `4g`
