"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.each = void 0;
var type_1 = require("../type");
/**
 * 遍历数组、类数组和对象
 * @param collection 需要遍历的数组、类数组和对象
 * @param callback 回调函数
 */
function each(collection, callback) {
    if (collection == null) {
        throw new TypeError('`collection` 类型错误，无法遍历');
    }
    if (!type_1.isFunction(callback)) {
        throw new TypeError('`callback` 必须是函数');
    }
    if (type_1.isArrayLike(collection)) {
        // 处理数组和类数组
        for (var i = 0, length_1 = collection.length; i < length_1; i++) {
            callback(collection[i], i);
        }
    }
    else {
        // 处理对象
        var keys = Object.keys(collection);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            callback(collection[key], key);
        }
    }
}
exports.each = each;
//# sourceMappingURL=each.js.map