import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 判断是否为 Map 对象
 * @param value 要判断的值
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
