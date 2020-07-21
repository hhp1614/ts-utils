'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.divide = void 0;
var type_1 = require('../type');
/**
 * 精确除法运算 `x / y`
 * @param x 被除数
 * @param y 除数
 */
function divide(x, y) {
  if (!type_1.isNumber(x)) {
    throw new TypeError('`x` 必须是数字');
  }
  if (!type_1.isNumber(y)) {
    throw new TypeError('`y` 必须是数字');
  }
  var xStr = String(x);
  var yStr = String(y);
  var xStrFloat = xStr.split('.')[1] || '';
  var yStrFloat = yStr.split('.')[1] || '';
  var m = yStrFloat.length - xStrFloat.length;
  var result = Number(xStr.replace('.', '')) / Number(yStr.replace('.', ''));
  return result * Math.pow(10, m);
}
exports.divide = divide;
//# sourceMappingURL=divide.js.map
