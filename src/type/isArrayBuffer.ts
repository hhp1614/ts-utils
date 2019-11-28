import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 检查是否为 ArrayBuffer 对象
 * @param value 要检查的值
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2));
 * // => true
 *
 * isArrayBuffer(new Array(2));
 * // => false
 */
export function isArrayBuffer(value: any): boolean {
  return isObjectLike(value) && getTag(value) === '[object ArrayBuffer]';
}
