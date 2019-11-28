import * as _device from './device';
import * as _func from './func';
import * as _type from './type';

// 设备方法
export const device = _device;
// 常用方法
export const func = _func;
// 类型检查方法
export const type = _type;

export default {
  // 设备方法
  device: _device,
  // 常用方法
  func: _func,
  // 类型检查方法
  type: _type
} as Object;
