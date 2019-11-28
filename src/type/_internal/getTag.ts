/**
 * @private
 * 获取 toStringTag 值
 * @param value 需要获取型 toStringTag 的值
 */
export function getTag(value: any): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}
