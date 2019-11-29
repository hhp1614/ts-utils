import { isObjectLike } from './isObjectLike';
import { isPlainObject } from './isPlainObject';

/**
 * 判断是否为 DOM 元素
 * @param value 要判断的值
 * @example
 *
 * isElement(document.body);
 * // => true
 *
 * isElement('<body>');
 * // => false
 */
export function isElement(value: any): boolean {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}
