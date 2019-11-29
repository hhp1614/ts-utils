import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 判断是否为 RegExp 对象
 * @param value 要判断的值
 * @example
 *
 * isRegExp(/abc/);
 * // => true
 *
 * isRegExp('/abc/');
 * // => false
 */
export function isRegExp(value: any): boolean {
  return isObjectLike(value) && getTag(value) == '[object RegExp]';
}
