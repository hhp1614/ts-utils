'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getUA = void 0;
var type_1 = require('../../common/type');
/**
 * 获取浏览器的 `userAgent`
 */
function getUA() {
  type_1.isBrowser(true);
  return window.navigator.userAgent;
}
exports.getUA = getUA;
//# sourceMappingURL=getUA.js.map
