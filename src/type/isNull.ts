/**
 * 判断是否为 null
 * @param value 要判断的值
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(void 0);
 * // => false
 */
export function isNull(value: any): boolean {
  return value === null;
}
