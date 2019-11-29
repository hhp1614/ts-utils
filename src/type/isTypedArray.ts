import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

// 用于匹配类型数组的 toStringTag 值
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

/**
 * 判断是否为类型数组
 * @param value 要判断的值
 * @example
 *
 * isTypedArray(new Uint8Array);
 * // => true
 *
 * isTypedArray([]);
 * // => false
 */
export function isTypedArray(value: any): boolean {
  return isObjectLike(value) && reTypedTag.test(getTag(value));
}
