"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowser = void 0;
var getUA_1 = require("./getUA");
// 正则 userAgent 校验
var testUA = function (ua, regExp) { return regExp.test(ua); };
// 正则提取版本号
var getVersion = function (ua, regExp) { return ("" + ua.match(regExp)).replace(/[^0-9|_.]/g, '').replace(/_/g, '.'); };
/**
 * 获取浏览器信息
 */
function getBrowser() {
    // userAgent
    var ua = getUA_1.getUA().toLowerCase();
    // 内核
    var engine = {
        type: 'unknown',
        version: 'unknown'
    };
    // 载体
    var supporter = {
        type: 'unknown',
        version: 'unknown'
    };
    // 外壳
    var shell = {
        type: 'unknown',
        version: 'unknown'
    };
    // 判断内核，载体类型
    if (testUA(ua, /applewebkit/g)) {
        engine.type = 'webkit'; // webkit 内核
        if (testUA(ua, /edge/g)) {
            supporter.type = 'edge'; // edge 浏览器
        }
        else if (testUA(ua, /opr/g)) {
            supporter.type = 'opera'; // opera 浏览器
        }
        else if (testUA(ua, /chrome/g)) {
            supporter.type = 'chrome'; // chrome 浏览器
        }
        else if (testUA(ua, /safari/g)) {
            supporter.type = 'safari'; // safari 浏览器
        }
    }
    else if (testUA(ua, /gecko/g) && testUA(ua, /firefox/g)) {
        engine.type = 'gecko'; // gecko 内核
        supporter.type = 'firefox'; // firefox 浏览器
    }
    else if (testUA(ua, /presto/g)) {
        engine.type = 'presto'; // presto 内核
        supporter.type = 'opera'; // opera 浏览器
    }
    else if (testUA(ua, /trident|compatible|msie/g)) {
        engine.type = 'trident'; // trident 内核
        supporter.type = 'ie'; // ie 浏览器
    }
    // 判断内核版本
    if (engine.type === 'webkit') {
        engine.version = getVersion(ua, /applewebkit\/[\d._]+/g);
    }
    else if (engine.type === 'gecko') {
        engine.version = getVersion(ua, /gecko\/[\d._]+/g);
    }
    else if (engine.type === 'presto') {
        engine.version = getVersion(ua, /presto\/[\d._]+/g);
    }
    else if (engine.type === 'trident') {
        engine.version = getVersion(ua, /trident\/[\d._]+/g);
    }
    // 判断载体版本
    if (supporter.type === 'chrome') {
        supporter.version = getVersion(ua, /chrome\/[\d._]+/g);
    }
    else if (supporter.type === 'safari') {
        supporter.version = getVersion(ua, /version\/[\d._]+/g);
    }
    else if (supporter.type === 'firefox') {
        supporter.version = getVersion(ua, /firefox\/[\d._]+/g);
    }
    else if (supporter.type === 'opera') {
        supporter.version = getVersion(ua, /opr\/[\d._]+/g);
    }
    else if (supporter.type === 'ie') {
        supporter.version = getVersion(ua, /(msie [\d._]+)|(rv:[\d._]+)/g);
    }
    else if (supporter.type === 'edge') {
        supporter.version = getVersion(ua, /edge\/[\d._]+/g);
    }
    // 判断外壳
    if (testUA(ua, /WindowsWechat/g)) {
        shell.type = 'wechat pc'; // 微信PC浏览器
        shell.version = getVersion(ua, /windowswechat\/[\d._]+/g);
    }
    else if (testUA(ua, /micromessenger/g)) {
        shell.type = 'wechat'; // 微信浏览器
        shell.version = getVersion(ua, /micromessenger\/[\d._]+/g);
    }
    else if (testUA(ua, /qqbrowser/g)) {
        shell.type = 'qq'; // QQ 浏览器
        shell.version = getVersion(ua, /qqbrowser\/[\d._]+/g);
    }
    else if (testUA(ua, /ucbrowser/g)) {
        shell.type = 'uc'; // UC 浏览器
        shell.version = getVersion(ua, /ucbrowser\/[\d._]+/g);
    }
    else if (testUA(ua, /360se(?:[ \/]([\w.]+))?/g)) {
        shell.type = '360 security';
        shell.version = getVersion(ua, /360se(?:[ \/]([\w.]+))?/g);
    }
    else if (testUA(ua, /360.s*aphone\s*browser\s*\(version\s*([\w.]+)\)/g)) {
        shell.type = '360 browser';
        shell.version = getVersion(ua, /360.s*aphone\s*browser\s*\(version\s*([\w.]+)\)/g);
    }
    else if (testUA(ua, /qihu 360se/g)) {
        shell.type = '360'; // 360 浏览器(无版本)
    }
    else if (testUA(ua, /2345explorer/g)) {
        shell.type = '2345'; // 2345 浏览器
        shell.version = getVersion(ua, /2345explorer\/[\d._]+/g);
    }
    else if (testUA(ua, /(metasr)|(sogou\w+\/([0-9.]+))/g)) {
        shell.type = 'sougou'; // 搜狗浏览器
        shell.version = getVersion(ua, /sogou\w+\/([0-9.]+)/g);
    }
    else if (testUA(ua, /lbbrowser/g)) {
        shell.type = 'liebao'; // 猎豹浏览器
        shell.version = getVersion(ua, /LieBao\/([\w.]+)/g);
    }
    else if (testUA(ua, /maxthon/g)) {
        shell.type = 'maxthon'; // 遨游浏览器
        shell.version = getVersion(ua, /maxthon\/[\d._]+/g);
    }
    else if (testUA(ua, /the world(?:[ \/]([\w.]+))?/g)) {
        shell.type = 'the world'; // 世界之窗
        shell.version = getVersion(ua, /the world(?:[ \/]([\w.]+))?/g);
    }
    else if (testUA(ua, /flyflow\/([\w.]+)/g)) {
        shell.type = 'baidu'; // 百度浏览器
        shell.version = getVersion(ua, /flyflow\/([\w.]+)/g);
    }
    return { engine: engine, supporter: supporter, shell: shell };
}
exports.getBrowser = getBrowser;
//# sourceMappingURL=getBrowser.js.map