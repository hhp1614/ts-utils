/**
 * 判断是否为空的对象，集合，Map 或者 Set 对象
 * @param value 要判断的值
 * @example
 *
 * isEmpty(null);
 * // => true
 *
 * isEmpty(true);
 * // => true
 *
 * isEmpty(1);
 * // => true
 *
 * isEmpty([1, 2, 3]);
 * // => false
 *
 * isEmpty('abc');
 * // => false
 *
 * isEmpty({ 'a': 1 });
 * // => false
 */
export declare function isEmpty(value: any): boolean;
