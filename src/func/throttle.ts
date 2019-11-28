import { isObject } from '../type';
import { IDebounceOptions } from './_internal/types';
import { debounce } from './debounce';

// 默认选项
const defaultOption: IDebounceOptions = {
  leading: false,
  maxWait: 0,
  trailing: false
};

/**
 * 函数节流
 * @param func 需要节流处理的函数
 * @param wait 等待时间
 * @param options 选项
 * @return 防抖函数
 */
export function throttle(func: Function, wait: number, options: IDebounceOptions = defaultOption): Function {
  // 是否第一次触发时立即执行
  let leading: boolean = true;
  // 是否在等待周期结束后执行用户传入的函数
  let trailing: boolean = true;

  // 如果传入的 func 不是函数，抛出错误
  if (typeof func != 'function') throw new TypeError('Expected a function');

  if (isObject(options)) {
    leading = 'leading' in options && !!options.leading;
    trailing = 'trailing' in options && !!options.trailing;
  }

  return debounce(func, wait, {
    leading: leading,
    maxWait: wait,
    trailing: trailing
  });
}
