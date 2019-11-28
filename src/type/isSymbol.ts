import { getTag } from './_internal/getTag';

/**
 * 检查是否为 Symbol 对象
 * @param value 要检查的值
 * @example
 *
 * isSymbol(Symbol.iterator);
 * // => true
 *
 * isSymbol('abc');
 * // => false
 */
export function isSymbol(value: any): boolean {
  const type = typeof value;
  return type == 'symbol' ||
    (type === 'object' && value != null && getTag(value) == '[object Symbol]');
}
