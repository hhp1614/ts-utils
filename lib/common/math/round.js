"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
var type_1 = require("../type");
var divide_1 = require("./divide");
var multiply_1 = require("./multiply");
/**
 * 四舍五入
 * @param num 数字
 * @param decimal 默认：`0`，保留小数位数
 */
function round(num, decimal) {
    if (decimal === void 0) { decimal = 0; }
    if (!type_1.isNumber(num)) {
        throw new TypeError('`num` 必须是数字');
    }
    if (!Number.isInteger(decimal) || decimal < 0) {
        throw new TypeError('`decimal` 必须是0或正整数');
    }
    var n = Math.pow(10, decimal);
    // 负数需要先转换成正数，四舍五入完之后再转换成负数
    if (num < 0) {
        return (-divide_1.divide(Math.round(multiply_1.multiply(-num, n)), n)).toFixed(decimal);
    }
    return divide_1.divide(Math.round(multiply_1.multiply(num, n)), n).toFixed(decimal);
}
exports.round = round;
//# sourceMappingURL=round.js.map