'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.multiply = void 0;
var type_1 = require('../type');
/**
 * 精确乘法运算 `x * y`
 * @param x 因数
 * @param y 因数
 */
function multiply(x, y) {
  if (!type_1.isNumber(x)) {
    throw new TypeError('`x` 必须是数字');
  }
  if (!type_1.isNumber(y)) {
    throw new TypeError('`y` 必须是数字');
  }
  // 记录两个加数中最长的小数位长度
  var m = 0;
  var xStr = String(x);
  var yStr = String(y);
  var xStrFloat = xStr.split('.')[1];
  var yStrFloat = yStr.split('.')[1];
  if (xStrFloat) {
    m += xStrFloat.length;
  }
  if (yStrFloat) {
    m += yStrFloat.length;
  }
  var result = Number(xStr.replace('.', '')) * Number(yStr.replace('.', ''));
  return result / Math.pow(10, m);
}
exports.multiply = multiply;
//# sourceMappingURL=multiply.js.map
