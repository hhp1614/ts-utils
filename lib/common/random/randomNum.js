"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNum = void 0;
var type_1 = require("../type");
/**
 * 随机整数
 * @description 随机数范围包括最小值和最大值
 * @param min 最小值
 * @param max 最大值
 */
function randomNum(min, max) {
    if (!type_1.isNumber(min)) {
        throw new TypeError('`min` 必须是数字');
    }
    if (!type_1.isNumber(max)) {
        throw new TypeError('`max` 必须是数字');
    }
    // 去掉小数部分
    min |= 0;
    max |= 0;
    if (min >= max) {
        throw new Error('`min` 应该小于 `max`');
    }
    var random = Math.random();
    return Math.floor(min + random * (max - min + 1));
}
exports.randomNum = randomNum;
//# sourceMappingURL=randomNum.js.map