# ts-utils

使用 typescript 开发的一个浏览器端工具库

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

// 模块引入
import { 模块名 } from '@hhp1614/utils';
```

## 模块

- [设备方法](./docs/device.md)
- [常用方法](./docs/func.md)
- [类型检查方法](./docs/type.md)

