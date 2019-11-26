import { getVersion, testUA } from './device.helper';
import { ISystemInfo } from './device.types';

/**
 * 获取操作系统信息
 * @param ua {string} userAgent
 * @return {ISystemInfo} 系统信息
 */
export function getOS(ua: string): ISystemInfo {
  // 类型
  let type: string = 'unknown';
  // 版本
  let version: string = 'unknown';
  // 平台
  let platform: string = 'unknown';

  // 判断类型
  if (testUA(ua, /windows|win32|win64|wow32|wow64/g)) type = 'windows';
  else if (testUA(ua, /macintosh|macintel/g)) type = 'mac';
  else if (testUA(ua, /x11/g)) type = 'linux';
  else if (testUA(ua, /android|adr/g)) type = 'android';
  else if (testUA(ua, /ios|iphone|ipad|ipod|iwatch/g)) type = 'ios';

  // 判断版本
  if (type === 'windows') {
    if (testUA(ua, /windows nt 10.0|windows 10/g)) version = '10';
    else if (testUA(ua, /windows nt 6.3|windows 8.1/g)) version = '8.1';
    else if (testUA(ua, /windows nt 6.2|windows 8/g)) version = '8';
    else if (testUA(ua, /windows nt 6.1|windows 7/g)) version = '7';
    else if (testUA(ua, /windows nt 6.0|windows vista/g)) version = 'vista';
    else if (testUA(ua, /windows nt 5.2|windows 2003/g)) version = '2003';
    else if (testUA(ua, /windows nt 5.1|windows xp/g)) version = 'xp';
    else if (testUA(ua, /windows nt 5.0|windows 2000/g)) version = '2000';
  } else if (type === 'mac') {
    version = getVersion(ua, /os x [\d._]+/g);
  } else if (type === 'android') {
    version = getVersion(ua, /android [\d._]+/g);
  } else if (type === 'ios') {
    version = getVersion(ua, /os [\d._]+/g);
  }

  // 判断平台
  if (type === 'android' || type === 'ios' || testUA(ua, /mobile/g)) {
    platform = 'mobile'; // 移动端
  } else if (type === 'windows' || type === 'mac' || type === 'linux') {
    platform = 'desktop'; // 桌面端
  }

  return { type, version, platform };
}
