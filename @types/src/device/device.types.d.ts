/**
 * 接口：系统信息
 */
export interface ISystemInfo {
    type: string;
    version: string;
    platform: string;
}
/**
 * 接口：浏览器子信息
 */
export interface IBrowserInfoItem {
    type: string;
    version: string;
}
/**
 * 接口：浏览器信息
 */
export interface IBrowserInfo {
    engine: IBrowserInfoItem;
    supporter: IBrowserInfoItem;
    shell: IBrowserInfoItem;
}
