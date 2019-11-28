/**
 * 正则 userAgent 校验
 * @param ua userAgent
 * @param regExp 正则表达式
 * @private
 */
export declare function testUA(ua: string, regExp: RegExp): boolean;
/**
 * 正则提取版本号
 * @param ua userAgent
 * @param regExp 正则表达式
 * @private
 */
export declare function getVersion(ua: string, regExp: RegExp): string;
