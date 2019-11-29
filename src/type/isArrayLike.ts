import { isLength } from './isLength';

/**
 * 判断是否为类数组
 * @param value 要判断的值
 * @example
 *
 * isArrayLike([1, 2, 3]);
 * // => true
 *
 * isArrayLike(document.body.children);
 * // => true
 *
 * isArrayLike('abc');
 * // => true
 *
 * isArrayLike(Function);
 * // => false
 */
export function isArrayLike(value: any): boolean {
  return value != null && typeof value !== 'function' && isLength(value.length);
}
