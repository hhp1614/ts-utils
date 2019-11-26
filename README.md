# ts-utils

使用 typescript 开发的一个工具库

## 安装

```shell script
yarn add @hhp1614/utils
# or
npm i @hhp1614/utils
```

[文件下载](https://raw.githubusercontent.com/hhp1614/ts-utils/master/dist/utils.js)

`script` 标签引入（全局变量为 `Utils`，相当于 `import * as Utils from @hhp1614/utils;`）：

```html
<script src="https://raw.githubusercontent.com/hhp1614/ts-utils/master/dist/utils.js"></script>
<script>
console.log(Utils);
</script>
```

## 使用

```js
// 全部引入
import * as Utils from '@hhp1614/utils';

// 按需引入
import { 模块名 } from '@hhp1614/utils';
```

## 模块

- [设备相关](#device)

### device

```js
import { device } from '@hhp1614/utils';

device.getModel(); // 获取移动设备类型
device.getOS(); // 获取操作系统信息
device.getBrowser(); // 获取浏览器信息
device.getOrientationStatus(); // 获取横竖屏状态
device.getResolution(); // 获取屏幕分辨率
device.getNetwork(); // 获取网络信息
device.getLanguage(); // 获取当前语言
```
