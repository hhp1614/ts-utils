import { IDebounceOptions } from './_internal/types';
/**
 * 函数节流
 * @param func 需要节流处理的函数
 * @param wait 等待时间
 * @param options 选项
 * @return 防抖函数
 */
export declare function throttle(func: Function, wait: number, options?: IDebounceOptions): Function;
