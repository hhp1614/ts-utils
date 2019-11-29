/**
 * 判断是否为对象类型的类数组
 * @param value 要判断的值
 * @example
 *
 * isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * isArrayLikeObject(document.body.children);
 * // => true
 *
 * isArrayLikeObject('abc');
 * // => false
 *
 * isArrayLikeObject(Function);
 * // => false
 */
export declare function isArrayLikeObject(value: any): boolean;
