/**
 * 系统信息
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
 * 浏览器子信息
 */
export interface IBrowserInfoItem {
  // 类型
  type: string;
  // 版本
  version: string;
}

/**
 * 浏览器信息
 */
export interface IBrowserInfo {
  // 内核
  engine: IBrowserInfoItem;
  // 载体
  supporter: IBrowserInfoItem;
  // 外壳
  shell: IBrowserInfoItem;
}
