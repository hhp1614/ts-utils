# device 设备

## getUA 获取UA

获取浏览器的 `userAgent`

```text
getUA()
```

- 返回值 `string`：当前浏览器UA
- 例子：
```js
import { getUA } from '@hhp1614/utils/lib/common/device'
getUA() // Mozilla...
```

## is[Env] 判断环境

判断当前环境是否为 [Env]

```text
is[Env]()
```

- `is[Env]`：
    - `isWin`：是否为Windows环境
    - `isLinux`：是否为Linux环境
    - `isMac`：是否为Mac环境
    - `isIOS`：是否为iOS环境
    - `isAndroid`：是否为Android环境
    - `isWeChat`：是否为微信环境
    - `isWeChatPC`：是否为微信PC环境
    - `isWeChatMobile`：是否为手机微信环境
    - `isWeChatIOS`：是否为iOS微信环境
    - `isWeChatAndroid`：是否为Android微信环境
    - `isMobile`：是否为移动端环境
    - `isPC`：是否为PC端环境
- 返回值 `boolean`：是否为对应环境
- 例子：
```js
import { isWin } from '@hhp1614/utils/lib/common/device'
isWin()
```
