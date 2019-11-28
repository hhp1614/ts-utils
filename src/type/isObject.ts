/**
 * 检查是否为对象
 * @param value 要检查的值
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject([1, 2, 3]);
 * // => true
 *
 * isObject(Function);
 * // => true
 *
 * isObject(null);
 * // => false
 */
export function isObject(value: any): boolean {
  const type: string = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
