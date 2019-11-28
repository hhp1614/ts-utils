import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 检查是否为 RegExp 对象
 * @param value 要检查的值
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
