import { isObject } from '../type';
import { IDebounceOptions } from './_internal/types';

// 默认选项
const defaultOption: IDebounceOptions = {
  leading: false,
  maxWait: 0,
  trailing: false
};

/**
 * 函数防抖
 * @param func 需要防抖处理的函数
 * @param wait 等待时间
 * @param options 选项
 * @return 防抖函数
 */
export function debounce(func: Function, wait: number, options: IDebounceOptions = defaultOption): Function {
  // debounced 被调用后赋值，表示至少调用 debounced 一次
  let lastArgs: any[] | void;
  // 保存 this
  let lastThis: Function | void;
  // 最大等待时间
  let maxWait: number = 0;
  // 定时器句柄
  let timerID: number | void;
  // 上一次调用 debounced 的时间
  let lastCallTime: number | void;

  // 上一次执行 func 的时间
  let lastInvokeTime: number = 0;
  // 是否第一次触发时立即执行
  let leading: boolean = false;
  // 是否有最长等待时间
  let maxing: boolean = false;
  // 是否在等待周期结束后执行用户传入的函数
  let trailing: boolean = true;

  // 如果传入的 func 不是函数，抛出错误
  if (typeof func !== 'function') throw new TypeError('Expected a function');

  wait = +wait || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait!;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  /**
   * 执行 用户传入的 func
   * @param time 时间
   */
  function invokeFunc(time: number): void {
    // 重置 lastArgs，lastThis
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = lastThis = undefined;

    lastInvokeTime = time; // 记录上一次调用 func 的时间
    func.apply(thisArg, args);
  }

  /**
   * setTimeout 一个定时器
   * @param pendingFunc 等待时间后执行的函数
   * @param wait 等待时间
   * @return 定时器句柄
   */
  function startTimer(pendingFunc: Function, wait: number): number {
    return window.setTimeout(pendingFunc, wait);
  }

  /**
   * 清除定时器
   * @param id 定时器句柄
   */
  function cancelTimer(id: number): void {
    clearTimeout(id);
  }

  /**
   * 防抖开始时执行的操作
   * @param time 时间
   */
  function leadingEdge(time: number): void {
    lastInvokeTime = time; // 记录上一次调用 func的时间
    timerID = startTimer(timerExpired, wait);
    // 设置了立即执行 func，则执行 func， 否则设置定时器
    leading ? invokeFunc(time) : null;
  }

  /**
   * 计算还需要等待多久
   * @param time 时间
   */
  function remainingWait(time: number): number {
    const timeSinceLastCall = time - (+lastCallTime);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    // 设置了最长等待时间，结果为 最长等待时间 和 按照 wait 计算还需要等待时间 的最小值
    // 没设置最大等待时间，结果为 wait - (当前时间 - 上一次触发) 时间，也就是 wait - 已经等候时间
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  /**
   * 此时是否应该设置定时器 / 执行用户传入的函数
   * @param time 时间
   */
  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = time - (+lastCallTime);
    const timeSinceLastInvoke = time - lastInvokeTime;
    return (
      (lastCallTime === undefined) || // 第一次触发
      (timeSinceLastCall >= wait) || // 距离上次触发超过 wait
      (timeSinceLastCall < 0) || // 当前时间小于 上次触发时间
      (maxing && timeSinceLastInvoke >= maxWait) // 设置了最长等待时间，并且等待时长不小于 最长等待时间
    );
  }

  /**
   * 防抖的核心 执行函数或者定时器
   */
  function timerExpired(): void {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerID = startTimer(timerExpired, remainingWait(time));
  }

  /**
   * 执行用户传入的 func 之前的最后一道屏障
   * @param time 时间
   */
  function trailingEdge(time: number): void {
    timerID = undefined;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
  }

  /**
   * 取消防抖
   */
  function cancel(): void {
    // 重置所有变量  清除定时器
    if (timerID !== undefined) {
      cancelTimer(timerID);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerID = undefined;
  }

  /**
   * 执行
   */
  function flush(): void {
    (timerID !== undefined) && trailingEdge(Date.now());
  }

  /**
   * 是否在等待中
   */
  function pending(): boolean {
    return timerID !== undefined;
  }

  /**
   * 入口函数
   * @param args 参数
   */
  function debounced(...args: any[]): void {
    const time: number = Date.now();
    const isInvoking: boolean = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerID === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerID = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerID === undefined) {
      timerID = startTimer(timerExpired, wait);
    }
  }

  // 取消防抖
  debounced.cancel = cancel;
  // 执行
  debounced.flush = flush;
  // 是否在等待中
  debounced.pending = pending;

  return debounced;
}
