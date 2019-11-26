// 通用
function getCommonModel(ua: string): string {
  const commonReg: RegExp = /(ZTE|Samsung|Motorola|HTC|Coolpad|Huawei|Lenovo|LG|Sony Ericsson|Oppo|TCL|Vivo|Sony|Meizu|Nokia|Pixel 2( XL)?)/i;
  const match = ua.match(commonReg);
  return match ? match[1] : '';
}

// 苹果
function getAppleModel(ua: string): string {
  const match = ua.match(/(iPod|iPad|iPhone)/i);
  return match ? match[1] : '';
}

// 三星
function getSamsungModel(ua: string): string {
  const match = ua.match(/galaxy|SM-|GT-|S[CGP]H-|SHW-/i);
  return match ? 'samsung' : '';
}

// 华为
function getHuaweiModel(ua: string): string {
  const match = ua.match(/7D-|ALE-|CHE-/i);
  return match ? 'huawei' : '';
}

// Windows Phone
function getWindowsPhoneModel(ua: string) {
  const match = ua.match(/Microsoft/i);
  return match ? 'windowsphone' : '';
}

// 小米
function getXiaomiModel(ua: string) {
  const match = ua.match(/;\s(mi|m1|m2|m3|m4|hm)/i);
  return match ? 'xiaomi' : '';
}

// 魅族
function getMeizuModel(ua: string) {
  const match = ua.match(/\s(mx\d*\w*|mz-(\w*))build/i);
  return match ? 'meizu' : '';
}

// 黑莓
function getBlackberryModel(ua: string) {
  const match = ua.match(/bb|playbook/i);
  return match ? 'blackberry' : '';
}

/**
 * 获取设备型号
 * @param ua {string} userAgent
 */
export function getModel(ua: string) {
  return getCommonModel(ua)
    || getAppleModel(ua)
    || getSamsungModel(ua)
    || getHuaweiModel(ua)
    || getWindowsPhoneModel(ua)
    || getXiaomiModel(ua)
    || getMeizuModel(ua)
    || getBlackberryModel(ua)
    || 'unknown';
}
