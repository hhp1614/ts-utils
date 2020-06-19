---
sidebar: true
---

# 开始

## 安装

```shell script
yarn add @hhp1614/utils
# or
npm i @hhp1614/utils
```

## 使用

> 层级关系为：platform.module.fn()

- platform: 按平台区分的大模块，通用的方法整合在 `common` 这个大模块里
- module: 小模块
- fn: 方法

```js
// 全部引入
import * as utils from '@hhp1614/utils';

// 使用
utils.platform.module.fn();
```

```js
// 大模块引入
import * as platform from '@hhp1614/utils/lib/platform';
import { module } from '@hhp1614/utils/lib/platform';

// 使用
platform.module.fn();
module.fn();
```

```js
// 小模块引入
import { fn } from '@hhp1614/utils/lib/platform/module';

// 使用
fn();
```

```js
// 单个方法引入
import fn from '@hhp1614/utils/lib/platform/module/fn';

// 使用
fn();
```
