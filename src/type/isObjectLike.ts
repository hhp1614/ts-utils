/**
 * 判断是否为类对象
 * @param value 要判断的值
 * @example
 *
 * isObjectLike({});
 * // => true
 *
 * isObjectLike([1, 2, 3]);
 * // => true
 *
 * isObjectLike(Function);
 * // => false
 *
 * isObjectLike(null);
 * // => false
 */
export function isObjectLike(value: any): boolean {
  return typeof value === 'object' && value !== null;
}
