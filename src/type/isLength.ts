/**
 * 检查是否为长度
 * @param value 要检查的值
 * @example
 *
 * isLength(3);
 * // => true
 *
 * isLength(Number.MIN_VALUE);
 * // => false
 *
 * isLength(Infinity);
 * // => false
 *
 * isLength('3');
 * // => false
 */
export function isLength(value: any): boolean {
  return typeof value === 'number' &&
    value > -1 &&
    value % 1 === 0 &&
    value <= Number.MAX_SAFE_INTEGER;
}
