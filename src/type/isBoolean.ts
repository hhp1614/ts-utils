import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 检查是否为布尔值
 * @param value 要检查的值
 * @example
 *
 * isBoolean(false);
 * // => true
 *
 * isBoolean(null);
 * // => false
 */
export function isBoolean(value: any): boolean {
  return value === true || value === false ||
    (isObjectLike(value) && getTag(value) === '[object Boolean]');
}
