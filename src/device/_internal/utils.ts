/**
 * 正则 userAgent 校验
 * @param ua userAgent
 * @param regExp 正则表达式
 * @private
 */
export function testUA(ua: string, regExp: RegExp): boolean {
  return regExp.test(ua);
}

/**
 * 正则提取版本号
 * @param ua userAgent
 * @param regExp 正则表达式
 * @private
 */
export function getVersion(ua: string, regExp: RegExp): string {
  return `${ua.match(regExp)}`
    .replace(/[^0-9|_.]/g, '')
    .replace(/_/g, '.');
}
