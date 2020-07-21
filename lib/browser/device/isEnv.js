'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isPC = exports.isMobile = exports.isWeChatAndroid = exports.isWeChatIOS = exports.isWeChatMobile = exports.isWeChatPC = exports.isWeChat = exports.isAndroid = exports.isIOS = exports.isMac = exports.isLinux = exports.isWin = void 0;
var getUA_1 = require('./getUA');
/**
 * 是否为Windows环境
 */
exports.isWin = function () {
  return /windows|win32|win64|wow32|wow64/i.test(getUA_1.getUA());
};
/**
 * 是否为Linux环境
 */
exports.isLinux = function () {
  return /x11/i.test(getUA_1.getUA());
};
/**
 * 是否为Mac环境
 */
exports.isMac = function () {
  return /macintosh|macintel|darwin/i.test(getUA_1.getUA());
};
/**
 * 是否为iOS环境
 */
exports.isIOS = function () {
  return /ios|iphone|ipad|ipod|iwatch/i.test(getUA_1.getUA());
};
/**
 * 是否为Android环境
 */
exports.isAndroid = function () {
  return /android|adr/i.test(getUA_1.getUA());
};
/**
 * 是否为微信环境
 */
exports.isWeChat = function () {
  return /micromessenger/i.test(getUA_1.getUA());
};
/**
 * 是否为微信PC环境
 */
exports.isWeChatPC = function () {
  return /WindowsWechat/i.test(getUA_1.getUA());
};
/**
 * 是否为手机微信环境
 */
exports.isWeChatMobile = function () {
  return exports.isWeChat() && !exports.isWeChatPC();
};
/**
 * 是否为iOS微信环境
 */
exports.isWeChatIOS = function () {
  return exports.isWeChat() && !exports.isWeChatPC() && exports.isIOS();
};
/**
 * 是否为Android微信环境
 */
exports.isWeChatAndroid = function () {
  return exports.isWeChat() && !exports.isWeChatPC() && exports.isAndroid();
};
/**
 * 是否为移动端环境
 */
exports.isMobile = function () {
  return exports.isAndroid() || exports.isIOS() || /mobile/i.test(getUA_1.getUA());
};
/**
 * 是否为PC端环境
 */
exports.isPC = function () {
  return exports.isWin() || exports.isLinux() || exports.isMac();
};
//# sourceMappingURL=isEnv.js.map
