import { isObjectLike } from './isObjectLike';
import { isArrayLike } from './isArrayLike';

/**
 * 检查是否为对象类型的类数组
 * @param value 要检查的值
 * @example
 *
 * isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * isArrayLikeObject(document.body.children);
 * // => true
 *
 * isArrayLikeObject('abc');
 * // => false
 *
 * isArrayLikeObject(Function);
 * // => false
 */
export function isArrayLikeObject(value: any): boolean {
  return isObjectLike(value) && isArrayLike(value);
}
