/**
 * 判断是否为对象
 * @param value 要判断的值
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject([1, 2, 3]);
 * // => true
 *
 * isObject(Function);
 * // => true
 *
 * isObject(null);
 * // => false
 */
export declare function isObject(value: any): boolean;
