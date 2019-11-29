import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 判断是否为 WeakMap 对象
 * @param value 要判断的值
 * @example
 *
 * isWeakMap(new WeakMap);
 * // => true
 *
 * isWeakMap(new Map);
 * // => false
 */
export function isWeakMap(value: any): boolean {
  return isObjectLike(value) && getTag(value) == '[object WeakMap]';
}
