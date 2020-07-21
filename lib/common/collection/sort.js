"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
var type_1 = require("../type");
/**
 * 快速排序
 * @param arr 需要快速排序的数组
 * @param order `asc`：升序，`desc`：降序，默认 `asc`
 */
function quickSort(arr, order) {
    if (order === void 0) { order = 'asc'; }
    // 将小于基数的数放到基数左边，大于基数的数放到右边，并返回基数的位置
    var partition = function (arr, left, right) {
        var _a;
        // 取第一个数为基数
        var temp = (_a = arr[left]) !== null && _a !== void 0 ? _a : null;
        while (left < right) {
            var agreeTypes = ['number', 'string'];
            var leftType = type_1.getType(arr[left]);
            var rightType = type_1.getType(arr[right]);
            if (!agreeTypes.includes(leftType) || !agreeTypes.includes(rightType)) {
                throw new TypeError('数组的 `item` 必须是 `number` 或 `string`');
            }
            if (order !== 'desc') {
                // 升序
                while (left < right && arr[right] >= temp) {
                    right--;
                }
                arr[left] = arr[right];
                while (left < right && arr[left] < temp) {
                    left++;
                }
                arr[right] = arr[left];
            }
            else {
                // 降序
                while (left < right && arr[right] <= temp) {
                    right--;
                }
                arr[left] = arr[right];
                while (left < right && arr[left] > temp) {
                    left++;
                }
                arr[right] = arr[left];
            }
        }
        // 修改基数的位置
        arr[left] = temp;
        return left;
    };
    // 递归排序基数左右两边的序列
    var recursive = function (arr, left, right) {
        if (left >= right) {
            return arr;
        }
        var index = partition(arr, left, right);
        recursive(arr, left, index - 1);
        recursive(arr, index + 1, right);
        return arr;
    };
    return recursive(arr, 0, arr.length - 1);
}
/**
 * 排序
 * @description 支持排序 `item` 为 `number` 或 `string` 的数组
 * @description 支持排序对象数组
 * @description 支持排序对象
 * @param value 需要排序的数组或对象
 * @param order `asc`：升序，`desc`：降序，默认 `asc`
 * @param key 排序对象数组时，指定排序的 `key`
 */
function sort(value, order, key) {
    if (order === void 0) { order = 'asc'; }
    // 原地排序对象数组，根据对象的 key 值排序
    if (key && Array.isArray(value)) {
        // 提取所有的 key 值
        var srcKeys = value.map(function (i) { return i && i[key]; });
        // 如果 key 存在不合法的值，直接返回原数组
        if (!srcKeys.every(function (i) { return typeof i === 'number' || typeof i === 'string'; })) {
            return value;
        }
        // 根据 key 值排序
        var keys = quickSort(srcKeys, order);
        // 存储原始数组
        var data_1 = __spreadArrays(value);
        // 将原数组清空
        value.length = 0;
        // 如果为倒序，就翻转原数组
        if (order === 'desc') {
            data_1.reverse();
        }
        keys.forEach(function (k) {
            // 查找排序后数据对应的下标
            var i = data_1.findIndex(function (i) { return i && i[key] === k; });
            // 插入到原数组中
            value.push(data_1[i]);
            // 删除缓存的数据，防止重复插入
            delete data_1[i];
        });
        // 返回排序后的原数组
        return value;
    }
    // 原地排序数组
    if (Array.isArray(value)) {
        // 快速排序
        return quickSort(value, order);
    }
    // 原地排序对象
    if (type_1.isObject(value)) {
        var keys = quickSort(Object.keys(value), order);
        keys.forEach(function (key) {
            var temp = value[key];
            delete value[key];
            value[key] = temp;
        });
        return value;
    }
    // 不是数组或对象时，返回原值
    return value;
}
exports.sort = sort;
//# sourceMappingURL=sort.js.map