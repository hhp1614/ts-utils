import { isArrayLike, isFunction } from '../type';

interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}

/**
 * 遍历数组
 * @param collection 需要遍历的数组
 * @param callback 回调函数
 */
export function each<T>(collection: T[], callback: (value: T, index: number) => void): void;
/**
 * 遍历字符串
 * @param collection 需要遍历的字符串
 * @param callback 回调函数
 */
export function each(collection: string, callback: (value: string, index: number) => void): void;
/**
 * 遍历类数组
 * @param collection 需要遍历的类数组
 * @param callback 回调函数
 */
export function each<T>(collection: ArrayLike<T>, callback: (value: T, index: number) => void): void;
/**
 * 遍历对象
 * @param collection 需要遍历的对象
 * @param callback 回调函数
 */
export function each<T extends object>(collection: T, callback: (value: T[keyof T], key: string) => void): void;

/**
 * 遍历数组、类数组和对象
 * @param collection 需要遍历的数组、类数组和对象
 * @param callback 回调函数
 */
export function each(collection: any, callback: (value: any, key: any) => void) {
  if (collection == null) {
    throw new TypeError('`collection` 类型错误，无法遍历');
  }
  if (!isFunction(callback)) {
    throw new TypeError('`callback` 必须是函数');
  }

  if (isArrayLike(collection)) {
    // 处理数组和类数组
    for (let i = 0, length = collection.length; i < length; i++) {
      callback(collection[i], i);
    }
  } else {
    // 处理对象
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      callback(collection[key], key);
    }
  }
}
