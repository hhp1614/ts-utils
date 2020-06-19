/**
 * 函数节流
 * @description 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 `wait` 毫秒调用一次该函数
 * @description 对于想控制一些触发频率较高的事件有帮助
 * @description 默认情况下，`throttle` 将在调用的第一时间尽快执行这个 `func`（第一次和最后一次都执行 `func`）
 * @param func 需要节流处理的函数
 * @param wait 延迟执行的时间，单位毫秒
 * @param options 选项，默认 `{}`
 * @param options.leading 如果想禁用第一次首先执行的话，传递 `{ leading: false }`
 * @param options.trailing 如果想禁用最后一次执行的话，传递 `{ trailing: false }`
 */
export declare function throttle(func: Function, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): {
    (...args: Array<any>): void;
    /**
     * 取消节流
     */
    cancel(): void;
};
//# sourceMappingURL=throttle.d.ts.map