import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 检查是否为 WeakSet 对象
 * @param value 要检查的值
 * @example
 *
 * isWeakSet(new WeakSet);
 * // => true
 *
 * isWeakSet(new Set);
 * // => false
 */
export function isWeakSet(value: any): boolean {
  return isObjectLike(value) && getTag(value) == '[object WeakSet]';
}
