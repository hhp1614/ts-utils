import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';
import { isPlainObject } from './isPlainObject';

/**
 * 检查是否为 Error 对象
 * @param value 要检查的值
 * @example
 *
 * isError(new Error);
 * // => true
 *
 * isError(Error);
 * // => false
 */
export function isError(value: any): boolean {
  if (!isObjectLike(value)) return false;
  const tag = getTag(value);
  return tag === '[object Error]' || tag === '[object DOMException]' ||
    (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
}
