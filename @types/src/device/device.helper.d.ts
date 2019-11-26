/**
 * 正则 userAgent 校验
 * @param ua {string} userAgent
 * @param regExp {RegExp} 正则表达式
 */
export declare function testUA(ua: string, regExp: RegExp): boolean;
/**
 * 正则提取版本号
 * @param ua {string} userAgent
 * @param regExp {RegExp} 正则表达式
 */
export declare function getVersion(ua: string, regExp: RegExp): string;
