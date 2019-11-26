import { IBrowserInfo, ISystemInfo } from './device.types';
/**
 * 类：设备
 */
export declare class Device {
    get ua(): string;
    set ua(value: string);
    private _ua;
    constructor();
    /**
     * 获取移动设备类型
     */
    getModel(): string;
    /**
     * 获取操作系统信息
     */
    getOS(): ISystemInfo;
    /**
     * 获取浏览器信息
     */
    getBrowser(): IBrowserInfo;
    /**
     * 获取横竖屏状态
     */
    getOrientationStatus(): string;
    /**
     * 获取屏幕分辨率
     */
    getResolution(): string;
    /**
     * 获取网络信息
     */
    getNetwork(): string;
    /**
     * 获取当前语言
     */
    getLanguage(): string;
}
