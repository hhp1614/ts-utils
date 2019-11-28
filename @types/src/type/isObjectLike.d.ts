/**
 * 检查是否为类对象
 * @param value 要检查的值
 * @example
 *
 * isObjectLike({});
 * // => true
 *
 * isObjectLike([1, 2, 3]);
 * // => true
 *
 * isObjectLike(Function);
 * // => false
 *
 * isObjectLike(null);
 * // => false
 */
export declare function isObjectLike(value: any): boolean;
