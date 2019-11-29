/**
 * 判断是否为 null 或者 undefined
 * @param value 要判断的值
 * @example
 *
 * isNil(null);
 * // => true
 *
 * isNil(void 0);
 * // => true
 *
 * isNil(NaN);
 * // => false
 */
export declare function isNil(value: any): boolean;
