/**
 * 检查是否为函数
 * @param value 要检查的值
 * @example
 *
 * isFunction(class Any{});
 * // => true
 *
 * isFunction(() => {});
 * // => true
 *
 * isFunction(async () => {});
 * // => true
 *
 * isFunction(function * Any() {});
 * // => true
 *
 * isFunction(Math.round);
 * // => true
 *
 * isFunction(/abc/);
 * // => false
 */
export declare function isFunction(value: any): boolean;
