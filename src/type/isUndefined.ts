/**
 * 检查是否为 undefined
 * @param value 要检查的值
 * @example
 *
 * isUndefined(void 0);
 * // => true
 *
 * isUndefined(null);
 * // => false
 */
export function isUndefined(value: any): boolean {
  return value === undefined;
}
