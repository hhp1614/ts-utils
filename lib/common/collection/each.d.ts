interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
}
/**
 * 遍历数组
 * @param collection 需要遍历的数组
 * @param callback 回调函数
 */
export declare function each<T>(collection: T[], callback: (value: T, index: number) => void): void;
/**
 * 遍历字符串
 * @param collection 需要遍历的字符串
 * @param callback 回调函数
 */
export declare function each(collection: string, callback: (value: string, index: number) => void): void;
/**
 * 遍历类数组
 * @param collection 需要遍历的类数组
 * @param callback 回调函数
 */
export declare function each<T>(collection: ArrayLike<T>, callback: (value: T, index: number) => void): void;
/**
 * 遍历对象
 * @param collection 需要遍历的对象
 * @param callback 回调函数
 */
export declare function each<T extends object>(collection: T, callback: (value: T[keyof T], key: string) => void): void;
export {};
//# sourceMappingURL=each.d.ts.map