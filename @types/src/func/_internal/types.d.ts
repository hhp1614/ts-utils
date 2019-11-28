/**
 * debounce 选项
 * @property leading {boolean} 是否第一次触发时立即执行
 * @property maxWait {number} 最长等待时间
 * @property trailing {boolean} 是否在等待周期结束后执行用户传入的函数
 */
export interface IDebounceOptions {
    leading: boolean;
    maxWait: number;
    trailing: boolean;
}
