import { getTag } from './_internal/getTag';
import { isPrototype } from './_internal/isPrototype';
import { isArray } from './isArray';
import { isTypedArray } from './isTypedArray';
import { isArguments } from './isArguments';

/**
 * 判断是否为空的对象，集合，Map 或者 Set 对象
 * @param value 要判断的值
 * @example
 *
 * isEmpty(null);
 * // => true
 *
 * isEmpty(true);
 * // => true
 *
 * isEmpty(1);
 * // => true
 *
 * isEmpty([1, 2, 3]);
 * // => false
 *
 * isEmpty('abc');
 * // => false
 *
 * isEmpty({ 'a': 1 });
 * // => false
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true;
  if (
    isArray(value) ||
    typeof value === 'string' ||
    typeof value.splice === 'function' ||
    isTypedArray(value) ||
    isArguments(value)
  ) {
    return !value.length;
  }
  const tag = getTag(value);
  if (tag === '[object Map]' || tag === '[object Set]') return !value.size;
  if (isPrototype(value)) return !Object.keys(value).length;
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
