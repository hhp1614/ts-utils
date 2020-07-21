/**
 * 函数防抖
 * @description 限制事件的频繁触发
 * @description 将需要延迟执行的函数(`func`)在函数(`debounce`)最后一次调用时的 `wait` 毫秒后执行
 * @param func 需要防抖处理的函数
 * @param wait 延迟执行的时间，单位毫秒
 * @param immediate 是否立即执行，默认 `false`
 */
export declare function debounce(
  func: Function,
  wait: number,
  immediate?: boolean
): {
  (...args: Array<any>): void;
  /**
   * 取消防抖
   */
  cancel(): void;
};
//# sourceMappingURL=debounce.d.ts.map
