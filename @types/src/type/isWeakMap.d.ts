/**
 * 判断是否为 WeakMap 对象
 * @param value 要判断的值
 * @example
 *
 * isWeakMap(new WeakMap);
 * // => true
 *
 * isWeakMap(new Map);
 * // => false
 */
export declare function isWeakMap(value: any): boolean;
