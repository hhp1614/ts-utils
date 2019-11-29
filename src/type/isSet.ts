import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 判断是否为 Set 对象
 * @param value 要判断的值
 * @example
 *
 * isSet(new Set);
 * // => true
 *
 * isSet(new WeakSet);
 * // => false
 */
export function isSet(value: any): boolean {
  return isObjectLike(value) && getTag(value) == '[object Set]';
}
