/**
 * 检查是否为长度
 * @param value 要检查的值
 * @example
 *
 * isLength(3);
 * // => true
 *
 * isLength(Number.MIN_VALUE);
 * // => false
 *
 * isLength(Infinity);
 * // => false
 *
 * isLength('3');
 * // => false
 */
export declare function isLength(value: any): boolean;
