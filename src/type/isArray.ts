/**
 * 判断是否为数组
 * @param value 要判断的值
 * @example
 *
 * isArray([]);
 * // => true
 *
 * isArray({});
 * // => false
 */
export function isArray(value: any): boolean {
  return Array.isArray(value);
}
