/**
 * 浏览器子信息
 */
declare type IBrowserInfoItem = {
    type: string;
    version: string;
};
/**
 * 浏览器信息
 */
declare type IBrowserInfo = {
    engine: IBrowserInfoItem;
    supporter: IBrowserInfoItem;
    shell: IBrowserInfoItem;
};
/**
 * 获取浏览器信息
 */
export declare function getBrowser(): IBrowserInfo;
export {};
//# sourceMappingURL=getBrowser.d.ts.map