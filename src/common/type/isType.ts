import { getType } from './getType';

/**
 * 数组最大长度
 */
const MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;

/**
 * 是否为字符串
 * @param value 任意值
 */
export function isString(value: any) {
  return getType(value) === 'string';
}

/**
 * 是否为数字
 * @param value 任意值
 */
export function isNumber(value: any) {
  return getType(value) === 'number';
}

/**
 * 是否为布尔值
 * @param value 任意值
 */
export function isBoolean(value: any) {
  return getType(value) === 'boolean';
}

/**
 * 是否为 null
 * @param value 任意值
 */
export function isNull(value: any) {
  return getType(value) === 'null';
}

/**
 * 是否为 undefined
 * @param value 任意值
 */
export function isUndefined(value: any) {
  return getType(value) === 'undefined';
}

/**
 * 是否为 null 或 undefined
 * @param value
 */
export function isNil(value: any) {
  return value == null;
}

/**
 * 是否为 symbol
 * @param value 任意值
 */
export function isSymbol(value: any) {
  return getType(value) === 'symbol';
}

/**
 * 是否为 bigint
 * @param value 任意值
 */
export function isBigInt(value: any) {
  return getType(value) === 'bigint';
}

/**
 * 是否为对象
 * @param value 任意值
 */
export function isObject(value: any) {
  const type = typeof value;
  return type != null && (type === 'object' || type === 'function');
}

/**
 * 是否为类对象
 * @param value 任意值
 */
export function isObjectLike(value: any) {
  return typeof value === 'object' && value !== null;
}

/**
 * 是否为普通对象
 * @description 由 `Object` 构造函数创建或者 `[[Prototype]]` 为空
 * @param value 任意值
 */
export function isPlainObject(value: any) {
  if (!isObjectLike(value) || getType(value) !== 'object') {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

/**
 * 是否为空对象
 * @param value 任意值
 */
export function isEmptyObject(value: any) {
  return isPlainObject(value) && Object.keys(value).length === 0;
}

/**
 * 是否为数组
 * @param value 任意值
 */
export function isArray(value: any) {
  return Array.isArray(value);
}

/**
 * 是否为空数组
 * @param value 任意值
 */
export function isEmptyArray(value: any) {
  return isArray(value) && value.length === 0;
}

/**
 * 是否为类数组
 * @description 类数组必定含有 `length` 属性，`length` 为 `number` 类型
 * @param value 任意值
 */
export function isArrayLike(value: any) {
  const length = value?.length;
  if (length == null || isFunction(value)) {
    return false;
  }
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_LENGTH;
}

/**
 * 是否为函数
 * @param value 任意值
 */
export function isFunction(value: any) {
  return typeof value === 'function';
}

/**
 * 是否为正则表达式
 * @param value 任意值
 */
export function isRegExp(value: any) {
  return getType(value) === 'regexp';
}
