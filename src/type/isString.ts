import { getTag } from './_internal/getTag';

/**
 * 检查是否为字符串或者字符串对象
 * @param value 要检查的值
 * @example
 *
 * isString('abc');
 * // => true
 *
 * isString(1);
 * // => false
 */
export function isString(value: any): boolean {
  const type = typeof value;
  return type === 'string' ||
    (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]');
}
