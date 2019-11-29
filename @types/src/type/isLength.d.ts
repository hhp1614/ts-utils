/**
 * 判断是否为长度
 * @param value 要判断的值
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
