import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 判断是否为 arguments 对象
 * @param value 要判断的值
 * @example
 *
 * isArguments(function() { return arguments }());
 * // => true
 *
 * isArguments([1, 2, 3]);
 * // => false
 */
export function isArguments(value: any): boolean {
  return isObjectLike(value) && getTag(value) === '[object Arguments]';
}
