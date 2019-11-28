import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 检查是否为 Map 对象
 * @param value 要检查的值
 * @example
 *
 * isMap(new Map);
 * // => true
 *
 * isMap(new WeakMap);
 * // => false
 */
export function isMap(value: any): boolean {
  return isObjectLike(value) && getTag(value) == '[object Map]';
}
