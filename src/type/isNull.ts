/**
 * 检查是否为 null
 * @param value 要检查的值
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
