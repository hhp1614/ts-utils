/**
 * 日志打印类
 */
export declare class Log {
    /**
     * 前缀
     */
    static prefix: string;
    /**
     * 打印信息
     * @param args 任意值
     */
    static info(...args: any[]): void;
    /**
     * 打印报错信息
     * @param args 任意值
     */
    static error(...args: any[]): void;
    /**
     * 打印成功信息
     * @param args 任意值
     */
    static success(...args: any[]): void;
    /**
     * 打印失败信息
     * @param args 任意值
     */
    static fail(...args: any[]): void;
    /**
     * 打印 debug 信息
     * @param args 任意值
     */
    static debug(...args: any[]): void;
}
//# sourceMappingURL=log.d.ts.map