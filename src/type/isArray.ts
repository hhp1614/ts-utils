/**
 * 检查是否为数组
 * @param value 要检查的值
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
