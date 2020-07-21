"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatThousands = void 0;
var type_1 = require("../type");
/**
 * 数字千分位格式化
 * @description 支持负数和小数，小数部分不会参与格式化
 * @param num 数字或可以转换成数字的字符串
 */
function formatThousands(num) {
    if (!type_1.isNumber(num) && !type_1.isString(num)) {
        throw new TypeError('`num` 必须是数字或字符串');
    }
    return String(num).replace(/(?<=(^|\s)-?\d+)(?=(\d{3})+\b)/g, ',');
}
exports.formatThousands = formatThousands;
//# sourceMappingURL=formatThousands.js.map