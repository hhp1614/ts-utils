# console 控制台

## Log 日志打印类

在浏览器控制台上打印，基于 `console.warn` 和 `console.error` 封装

- `Log.setPrefix`：设置前缀
    - 参数：
        - `prefix`：前缀，会自动使用 `[]` 包着前缀
- `Log.info`：打印信息
- `Log.error`：打印报错信息
- `Log.success`：打印成功信息
- `Log.fail`：打印失败信息
- `Log.debug`：打印 debug 信息
- 例子：
```js
import { Log } from '@hhp1614/utils/lib/browser/console';
Log.setPrefix('hhp');
Log.info('test'); // [hhp][info] test
Log.error('test'); // [hhp][error] test
Log.success('test'); // [hhp][success] test
Log.fail('test'); // [hhp][fail] test
Log.debug('test'); // [hhp][debug] test
```
