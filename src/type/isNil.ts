/**
 * 检查是否为 null 或者 undefined
 * @param value 要检查的值
 * @example
 *
 * isNil(null);
 * // => true
 *
 * isNil(void 0);
 * // => true
 *
 * isNil(NaN);
 * // => false
 */
export function isNil(value: any): boolean {
  return value == null;
}
