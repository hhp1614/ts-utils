/**
 * 检查是否为 WeakMap 对象
 * @param value 要检查的值
 * @example
 *
 * isWeakMap(new WeakMap);
 * // => true
 *
 * isWeakMap(new Map);
 * // => false
 */
export declare function isWeakMap(value: any): boolean;
