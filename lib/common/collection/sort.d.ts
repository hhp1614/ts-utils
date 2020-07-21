declare type Item = string | number | Obj;
declare type Arr = Array<Item>;
declare type Obj = {
  [key: string]: any;
};
declare type ArrayOrObject = Arr | Obj;
/**
 * 排序
 * @description 支持排序 `item` 为 `number` 或 `string` 的数组
 * @description 支持排序对象数组
 * @description 支持排序对象
 * @param value 需要排序的数组或对象
 * @param order `asc`：升序，`desc`：降序，默认 `asc`
 * @param key 排序对象数组时，指定排序的 `key`
 */
export declare function sort(value: ArrayOrObject, order?: 'asc' | 'desc', key?: string): ArrayOrObject;
export {};
//# sourceMappingURL=sort.d.ts.map
