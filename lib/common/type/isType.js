'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isRegExp = exports.isFunction = exports.isArrayLike = exports.isEmptyArray = exports.isArray = exports.isEmptyObject = exports.isPlainObject = exports.isObjectLike = exports.isObject = exports.isBigInt = exports.isSymbol = exports.isNil = exports.isUndefined = exports.isNull = exports.isBoolean = exports.isNumber = exports.isString = void 0;
var getType_1 = require('./getType');
/**
 * 数组最大长度
 */
var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
/**
 * 是否为字符串
 * @param value 任意值
 */
function isString(value) {
  return getType_1.getType(value) === 'string';
}
exports.isString = isString;
/**
 * 是否为数字
 * @param value 任意值
 */
function isNumber(value) {
  return getType_1.getType(value) === 'number';
}
exports.isNumber = isNumber;
/**
 * 是否为布尔值
 * @param value 任意值
 */
function isBoolean(value) {
  return getType_1.getType(value) === 'boolean';
}
exports.isBoolean = isBoolean;
/**
 * 是否为 null
 * @param value 任意值
 */
function isNull(value) {
  return getType_1.getType(value) === 'null';
}
exports.isNull = isNull;
/**
 * 是否为 undefined
 * @param value 任意值
 */
function isUndefined(value) {
  return getType_1.getType(value) === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * 是否为 null 或 undefined
 * @param value
 */
function isNil(value) {
  return value == null;
}
exports.isNil = isNil;
/**
 * 是否为 symbol
 * @param value 任意值
 */
function isSymbol(value) {
  return getType_1.getType(value) === 'symbol';
}
exports.isSymbol = isSymbol;
/**
 * 是否为 bigint
 * @param value 任意值
 */
function isBigInt(value) {
  return getType_1.getType(value) === 'bigint';
}
exports.isBigInt = isBigInt;
/**
 * 是否为对象
 * @param value 任意值
 */
function isObject(value) {
  var type = typeof value;
  return type != null && (type === 'object' || type === 'function');
}
exports.isObject = isObject;
/**
 * 是否为类对象
 * @param value 任意值
 */
function isObjectLike(value) {
  return typeof value === 'object' && value !== null;
}
exports.isObjectLike = isObjectLike;
/**
 * 是否为普通对象
 * @description 由 `Object` 构造函数创建或者 `[[Prototype]]` 为空
 * @param value 任意值
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || getType_1.getType(value) !== 'object') {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  var proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
exports.isPlainObject = isPlainObject;
/**
 * 是否为空对象
 * @param value 任意值
 */
function isEmptyObject(value) {
  return isPlainObject(value) && Object.keys(value).length === 0;
}
exports.isEmptyObject = isEmptyObject;
/**
 * 是否为数组
 * @param value 任意值
 */
function isArray(value) {
  return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * 是否为空数组
 * @param value 任意值
 */
function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
}
exports.isEmptyArray = isEmptyArray;
/**
 * 是否为类数组
 * @description 类数组必定含有 `length` 属性，`length` 为 `number` 类型
 * @param value 任意值
 */
function isArrayLike(value) {
  var length = value === null || value === void 0 ? void 0 : value.length;
  if (length == null || isFunction(value)) {
    return false;
  }
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_LENGTH;
}
exports.isArrayLike = isArrayLike;
/**
 * 是否为函数
 * @param value 任意值
 */
function isFunction(value) {
  return typeof value === 'function';
}
exports.isFunction = isFunction;
/**
 * 是否为正则表达式
 * @param value 任意值
 */
function isRegExp(value) {
  return getType_1.getType(value) === 'regexp';
}
exports.isRegExp = isRegExp;
//# sourceMappingURL=isType.js.map
