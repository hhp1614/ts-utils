import { ISystemInfo } from './device.types';
/**
 * 获取操作系统信息
 * @param ua {string} userAgent
 * @return {ISystemInfo} 系统信息
 */
export declare function getOS(ua: string): ISystemInfo;
