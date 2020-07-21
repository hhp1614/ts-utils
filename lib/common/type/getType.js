'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getType = void 0;
/**
 * 判断数据类型
 * @param value 任意值
 */
function getType(value) {
  var type = Object.prototype.toString.call(value).match(/\[object (\w+)\]/);
  return type ? type[1].toLowerCase() : typeof value;
}
exports.getType = getType;
//# sourceMappingURL=getType.js.map
