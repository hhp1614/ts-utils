"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOS = void 0;
var getUA_1 = require("./getUA");
// 正则 userAgent 校验
var testUA = function (ua, regExp) { return regExp.test(ua); };
// 正则提取版本号
var getVersion = function (ua, regExp) { return ("" + ua.match(regExp)).replace(/[^0-9|_.]/g, '').replace(/_/g, '.'); };
/**
 * 获取操作系统信息
 */
function getOS() {
    // userAgent
    var ua = getUA_1.getUA().toLowerCase();
    // 类型
    var type = 'unknown';
    // 版本
    var version = 'unknown';
    // 平台
    var platform = 'unknown';
    // 判断类型
    if (testUA(ua, /windows|win32|win64|wow32|wow64/g))
        type = 'windows';
    else if (testUA(ua, /macintosh|macintel/g))
        type = 'mac';
    else if (testUA(ua, /x11/g))
        type = 'linux';
    else if (testUA(ua, /android|adr/g))
        type = 'android';
    else if (testUA(ua, /ios|iphone|ipad|ipod|iwatch/g))
        type = 'ios';
    // 判断版本
    if (type === 'windows') {
        if (testUA(ua, /windows nt 10.0|windows 10/g))
            version = '10';
        else if (testUA(ua, /windows nt 6.3|windows 8.1/g))
            version = '8.1';
        else if (testUA(ua, /windows nt 6.2|windows 8/g))
            version = '8';
        else if (testUA(ua, /windows nt 6.1|windows 7/g))
            version = '7';
        else if (testUA(ua, /windows nt 6.0|windows vista/g))
            version = 'vista';
        else if (testUA(ua, /windows nt 5.2|windows 2003/g))
            version = '2003';
        else if (testUA(ua, /windows nt 5.1|windows xp/g))
            version = 'xp';
        else if (testUA(ua, /windows nt 5.0|windows 2000/g))
            version = '2000';
    }
    else if (type === 'mac') {
        version = getVersion(ua, /os x [\d._]+/g);
    }
    else if (type === 'android') {
        version = getVersion(ua, /android [\d._]+/g);
    }
    else if (type === 'ios') {
        version = getVersion(ua, /os [\d._]+/g);
    }
    // 判断平台
    if (type === 'android' || type === 'ios' || testUA(ua, /mobile/g)) {
        platform = 'mobile'; // 移动端
    }
    else if (type === 'windows' || type === 'mac' || type === 'linux') {
        platform = 'desktop'; // 桌面端
    }
    return { type: type, version: version, platform: platform };
}
exports.getOS = getOS;
//# sourceMappingURL=getOS.js.map