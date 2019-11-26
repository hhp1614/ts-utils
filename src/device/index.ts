import { getOS } from './getOS';
import { getBrowser } from './getBrowser';
import { IBrowserInfo, ISystemInfo } from './device.types';
import { getOrientationStatus, getResolution } from './getScreen';
import { getModel } from './getModel';

/**
 * 类：设备
 */
export class Device {
  // 获取 userAgent
  get ua(): string {
    return this._ua;
  }

  // 设置 userAgent
  set ua(value: string) {
    this._ua = value;
  }

  // userAgent
  private _ua: string;

  constructor() {
    this._ua = navigator.userAgent.toLowerCase() || '';
  }

  /**
   * 获取移动设备类型
   */
  public getModel(): string {
    return getModel(this._ua);
  }

  /**
   * 获取操作系统信息
   */
  public getOS(): ISystemInfo {
    return getOS(this._ua);
  }

  /**
   * 获取浏览器信息
   */
  public getBrowser(): IBrowserInfo {
    return getBrowser(this._ua);
  }

  /**
   * 获取横竖屏状态
   */
  public getOrientationStatus(): string {
    return getOrientationStatus();
  }

  /**
   * 获取屏幕分辨率
   */
  public getResolution(): string {
    return getResolution();
  }

  /**
   * 获取网络信息
   */
  public getNetwork(): string {
    const n: any = navigator || {};
    const connect = n.connection || n.mozConnection || n.webkitConnection || {};
    return connect.type || connect.effectiveType || 'unknown';
  }

  /**
   * 获取当前语言
   */
  public getLanguage(): string {
    return navigator.language.replace(/-/g, '_');
  }
}
