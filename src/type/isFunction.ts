/**
 * 判断是否为函数
 * @param value 要判断的值
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
export function isFunction(value: any): boolean {
  return typeof value === 'function';
}
