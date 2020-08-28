"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var type_1 = require("../type");
/**
 * 精确加法运算 `x + y`
 * @description 如果要做减法，只需第二个参数即被减数传负值即可
 * @param x 加数
 * @param y 加数
 */
function add(x, y) {
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
    var xStrFloat = xStr.split('.')[1] || '';
    var yStrFloat = yStr.split('.')[1] || '';
    if (xStrFloat || yStrFloat) {
        var xLen = xStrFloat.length;
        var yLen = yStrFloat.length;
        m = xLen > yLen ? xLen : yLen;
    }
    // 补零
    xStr = x.toFixed(m).replace('.', '');
    yStr = y.toFixed(m).replace('.', '');
    var result = Number(xStr) + Number(yStr);
    return result / Math.pow(10, m);
}
exports.add = add;
//# sourceMappingURL=add.js.map