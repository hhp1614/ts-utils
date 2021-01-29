# storage 存储

## Local localStorage 操作类

- `Local.setPrefix`：设置前缀
  - 参数：
    - `prefix`：前缀，会自动使用 `_` 与后面的 `key` 相连
- `Local.get`：获取 localStorage item
- `Local.set`：设置 localStorage item
- `Local.remove`：删除 localStorage item
- `Local.clear`：清空 localStorage
- 例子：

```js
import { Local } from '@hhp1614/utils/lib/browser/storage';
Local.set('test', { foo: 'bar' }); // true
Local.get('test'); // { foo: 'bar' }
```

## Session sessionStorage 操作类

- `Session.setPrefix`：设置前缀
  - 参数：
    - `prefix`：前缀，会自动使用 `_` 与后面的 `key` 相连
- `Session.get`：获取 sessionStorage item
- `Session.set`：设置 sessionStorage item
- `Session.remove`：删除 sessionStorage item
- `Session.clear`：清空 sessionStorage
- 例子：

```js
import { Session } from '@hhp1614/utils/lib/browser/storage';
Session.set('test', { foo: 'bar' }); // true
Session.get('test'); // { foo: 'bar' }
```
