/**
 * 判断是否为 undefined
 * @param value 要判断的值
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
