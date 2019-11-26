/**
 * 接口：系统信息
 */
export interface ISystemInfo {
  // 系统类型
  type: string;
  // 系统版本
  version: string;
  // 系统平台
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
